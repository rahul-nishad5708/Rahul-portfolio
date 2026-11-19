import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isDownload = searchParams.get("download") === "1";

  const candidates = [
    path.join(process.cwd(), "public", "Rahul_Chandraveer_Nishad_Resume.pdf"),
    path.join(process.cwd(), "public", "images", "Rahul_Chandraveer_Nishad_Resume.pdf"),
    path.join(process.cwd(), "public", "images", "Rahul_Resume.pdf"),
  ];

  let resolvedPath: string | null = null;
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      resolvedPath = candidate;
      break;
    }
  }

  if (!resolvedPath) {
    return new NextResponse("Resume file not found on server", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(resolvedPath);

  const disposition = isDownload
    ? 'attachment; filename="Rahul_Chandraveer_Nishad_Resume.pdf"'
    : 'inline; filename="Rahul_Chandraveer_Nishad_Resume.pdf"';

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": disposition,
      "Content-Length": fileBuffer.length.toString(),
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      "Accept-Ranges": "bytes",
    },
  });
}
