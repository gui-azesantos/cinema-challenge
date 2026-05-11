"use client";

import { useState } from "react";
import CinemaViewer from "@/components/CinemaViewer";
import ano1 from "@/data/ano1";
import ano2 from "@/data/ano2";

export default function Home() {
  const [ano, setAno] = useState<1 | 2>(1);

  return (
    <div>
      {/* Year switcher */}
      <div style={{
        position: "fixed", top: 0, right: 0, zIndex: 100,
        padding: "12px 20px",
        display: "flex", gap: 6, alignItems: "center",
      }}>
        {([1, 2] as const).map(n => (
          <button
            key={n}
            onClick={() => setAno(n)}
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

      <CinemaViewer data={ano === 1 ? ano1 : ano2} ano={ano} />
    </div>
  );
}
