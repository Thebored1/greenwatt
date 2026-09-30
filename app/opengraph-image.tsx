import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Greenwatt Global Ventures – Advanced Electrical Testing Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(
    join(process.cwd(), "public/greenwatt-logo.png")
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <img src={logoSrc} width={502} height={150} alt="" />
          <div
            style={{
              marginTop: 40,
              fontSize: 60,
              fontWeight: 700,
              color: "#292929",
              lineHeight: 1.15,
            }}
          >
            Advanced Electrical Testing Solutions
          </div>
          <div style={{ marginTop: 20, fontSize: 30, color: "#54595F" }}>
            Thermal imaging · Solar PV testing · Relay test kits · CT/PT analyzers
          </div>
        </div>
        <div style={{ height: 24, background: "#0B7F3B", display: "flex" }} />
      </div>
    ),
    size
  );
}
