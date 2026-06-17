import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Igor Pacheco | Especialista em Crescimento para Lojas de Móveis Planejados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(180,140,90,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(180,140,90,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "600px",
            background: "radial-gradient(ellipse at center, rgba(180,140,90,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "100px",
            border: "1px solid rgba(180,140,90,0.3)",
            background: "rgba(180,140,90,0.08)",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#c9a46e",
            }}
          />
          <span style={{ color: "#b48c5a", fontSize: "16px", fontWeight: 600, letterSpacing: "2px" }}>
            MÉTODO PROJETO FECHADO™
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#f0ede8",
            textAlign: "center",
            lineHeight: 1.1,
            margin: "0 0 24px 0",
            maxWidth: "900px",
          }}
        >
          Sua loja recebe{" "}
          <span style={{ color: "#c9a46e" }}>orçamentos</span>{" "}
          ou curiosos?
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "24px",
            color: "#6a6a68",
            textAlign: "center",
            margin: "0 0 48px 0",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Diagnóstico gratuito para lojas de móveis planejados
        </p>

        {/* Author */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c9a46e, #8a6840)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#080808",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            IP
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f0ede8", fontSize: "18px", fontWeight: 600 }}>Igor Pacheco</span>
            <span style={{ color: "#6a6a68", fontSize: "14px" }}>Especialista em crescimento · Lojas de móveis planejados</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
