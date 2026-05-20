"use client";

import { useEffect, useState } from "react";
import CinemaViewer from "@/components/CinemaViewer";
import ano1 from "@/data/ano1";
import ano2 from "@/data/ano2";

export default function Home() {
  const [ano, setAno] = useState<1 | 2>(1);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("cinema-lastAno");
    if (saved === "1" || saved === "2") {
      setAno(Number(saved) as 1 | 2);
    }
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#080808",
          display: "grid",
          placeItems: "center",
          color: "#9a9a9a",
          fontFamily: "monospace",
          fontSize: 13,
        }}
      >
        Carregando seu ponto de parada...
      </div>
    );
  }

  return (
    <div>
      {/* Year switcher */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 100,
          padding: "12px 20px",
          display: "flex",
          gap: 6,
          alignItems: "center",
        }}
      >
        {([1, 2] as const).map((n) => (
          <button
            key={n}
            onClick={() => {
              setAno(n);
              window.localStorage.setItem("cinema-lastAno", String(n));
            }}
            style={{
              padding: "4px 12px",
              background: ano === n ? "#1a1a1a" : "transparent",
              border: `1px solid ${ano === n ? "#333" : "#1a1a1a"}`,
              borderRadius: 2,
              color: ano === n ? "#ede5d5" : "#333",
              fontSize: 9,
              fontFamily: "monospace",
              letterSpacing: 2,
              transition: "all 0.15s",
            }}
          >
            ANO {n}
          </button>
        ))}
      </div>

      <CinemaViewer key={ano} data={ano === 1 ? ano1 : ano2} ano={ano} />
    </div>
  );
}
