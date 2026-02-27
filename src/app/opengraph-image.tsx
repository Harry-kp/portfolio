import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Harshit Chaudhary — Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0b 0%, #141415 50%, #1c1c1e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#f59e0b",
            }}
          />
          <span style={{ color: "#a1a1aa", fontSize: "20px", letterSpacing: "4px" }}>
            PORTFOLIO
          </span>
        </div>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#fafafa",
            lineHeight: 1,
            marginBottom: "24px",
            letterSpacing: "-2px",
          }}
        >
          Harshit Chaudhary
        </h1>

        <p
          style={{
            fontSize: "28px",
            color: "#a1a1aa",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Backend engineer building scalable distributed systems and AI-powered
          products. Rust, Go, Ruby.
        </p>

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {["Distributed Systems", "Rust & Go", "Open Source"].map((tag) => (
            <span
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                border: "1px solid #23232a",
                color: "#f59e0b",
                fontSize: "16px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
