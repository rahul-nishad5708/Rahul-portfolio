import { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import fs from "fs";
import path from "path";
import os from "os";

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number; // Unix timestamp in ms when rate-limit window resets
}

export function getClientIp(request: NextRequest): string {
  const xForwardedFor = request.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const firstIp = xForwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  return "127.0.0.1";
}

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

// Persistent store file located in OS temporary directory to persist across process restarts
const PERSISTENT_STORE_FILE = path.join(
  os.tmpdir(),
  "portfolio_contact_rate_limit.json"
);

function readPersistentStore(): Record<string, number[]> {
  try {
    if (fs.existsSync(PERSISTENT_STORE_FILE)) {
      const data = fs.readFileSync(PERSISTENT_STORE_FILE, "utf8");
      return JSON.parse(data) as Record<string, number[]>;
    }
  } catch {
    // If reading fails or file is locked, start with clean state
  }
  return {};
}

function writePersistentStore(store: Record<string, number[]>): void {
  try {
    fs.writeFileSync(PERSISTENT_STORE_FILE, JSON.stringify(store), "utf8");
  } catch {
    // Graceful disk write failure handling
  }
}

function checkPersistentRateLimit(identifier: string): RateLimitResult {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const store = readPersistentStore();

  // Prune expired records older than sliding window
  const cleanedStore: Record<string, number[]> = {};
  for (const [key, timestamps] of Object.entries(store)) {
    const valid = timestamps.filter((t) => t > windowStart);
    if (valid.length > 0) {
      cleanedStore[key] = valid;
    }
  }

  const userTimestamps = cleanedStore[identifier] || [];
  const reset =
    userTimestamps.length > 0
      ? userTimestamps[0] + RATE_LIMIT_WINDOW_MS
      : now + RATE_LIMIT_WINDOW_MS;

  if (userTimestamps.length >= RATE_LIMIT_MAX) {
    writePersistentStore(cleanedStore);
    return {
      success: false,
      limit: RATE_LIMIT_MAX,
      remaining: 0,
      reset,
    };
  }

  userTimestamps.push(now);
  cleanedStore[identifier] = userTimestamps;
  writePersistentStore(cleanedStore);

  return {
    success: true,
    limit: RATE_LIMIT_MAX,
    remaining: RATE_LIMIT_MAX - userTimestamps.length,
    reset,
  };
}

export async function checkRateLimit(
  request: NextRequest
): Promise<RateLimitResult> {
  const ip = getClientIp(request);
  const identifier = `contact_${ip}`;

  const upstashUrl =
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const upstashToken =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  // 1. Production distributed rate limiting via Upstash / Vercel KV Redis
  if (upstashUrl && upstashToken) {
    try {
      const redis = new Redis({
        url: upstashUrl,
        token: upstashToken,
      });

      const ratelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(RATE_LIMIT_MAX, "10 m"),
        prefix: "ratelimit:contact",
      });

      const result = await ratelimit.limit(identifier);
      return {
        success: result.success,
        limit: result.limit,
        remaining: result.remaining,
        reset: result.reset,
      };
    } catch (err) {
      console.warn(
        "[RateLimit] Upstash Redis query failed; using persistent store fallback:",
        err instanceof Error ? err.message : "Connection error"
      );
    }
  }

  // 2. Persistent file-backed sliding-window rate limiter (not an ephemeral in-memory Map)
  return checkPersistentRateLimit(identifier);
}
