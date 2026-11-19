import { ImageResponse } from "next/og";

export const alt = "Rahul Chandraveer Nishad — Software Engineer & Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#090B10",
          color: "#F5F7FA",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          border: "1px solid rgba(117, 214, 154, 0.25)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              backgroundColor: "#151A24",
              border: "2px solid #75D69A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#75D69A",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            RN
          </div>
          <div style={{ fontSize: "20px", color: "#A0A8B5" }}>
            rahulnishad.dev
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "18px",
              color: "#75D69A",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            COMPUTER SCIENCE UNDERGRADUATE · PARUL UNIVERSITY 2027
          </div>
          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#F5F7FA",
            }}
          >
            Rahul Chandraveer Nishad
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#A0A8B5",
              lineHeight: 1.35,
            }}
          >
            Aspiring Software Engineer · Full-Stack Developer · ServiceNow CAD &amp; CSA
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "20px",
            color: "#F5F7FA",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "28px",
          }}
        >
          <span style={{ color: "#75D69A" }}>435+ LeetCode Solved</span>
          <span style={{ color: "#A0A8B5" }}>•</span>
          <span>JobFit.ai SaaS</span>
          <span style={{ color: "#A0A8B5" }}>•</span>
          <span>SnippetSphere</span>
          <span style={{ color: "#A0A8B5" }}>•</span>
          <span>ServiceNow CAD &amp; CSA</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
