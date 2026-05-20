"use client";

import { useEffect, useState } from "react";
import CinemaViewer from "@/components/CinemaViewer";
import ano1, { Film, Month } from "@/data/ano1";
import ano2 from "@/data/ano2";
import { monthLabel } from "@/lib/seasons";

type ViewMode = "home" | "viewer";

type YearStats = {
  ano: 1 | 2;
  title: string;
  description: string;
  coreCount: number;
  coreWatched: number;
  extraStars: number;
  lastMonth: number | null;
  lastTab: string;
};

const activeStorageKey = (ano: 1 | 2) => `cinema-lastActive-ano${ano}`;
const watchedFilmsStorageKey = "cinema-watchedFilms";
const tabStorageKey = "cinema-lastTab";

const getFilmKey = (film: Film, monthIndex: number, filmIndex: number) =>
  `${film.title}::${film.year}::${monthIndex}::${filmIndex}`;

export default function Home() {
  const [ready, setReady] = useState(false);
  const [view, setView] = useState<ViewMode>("home");
  const [selectedAno, setSelectedAno] = useState<1 | 2>(1);
  const [stats, setStats] = useState<YearStats[]>([]);

  useEffect(() => {
    const savedAno = window.localStorage.getItem("cinema-lastAno");
    const savedYear =
      savedAno === "1" || savedAno === "2" ? Number(savedAno) : 1;
    setSelectedAno(savedYear as 1 | 2);

    const savedFilms = window.localStorage.getItem(watchedFilmsStorageKey);
    let watchedFilms: Record<string, boolean> = {};
    if (savedFilms) {
      try {
        watchedFilms = JSON.parse(savedFilms);
      } catch {
        watchedFilms = {};
      }
    }

    const buildStats = (data: Month[], ano: 1 | 2): YearStats => {
      const coreCount = data.reduce(
        (sum, month) =>
          sum + month.films.filter((film) => film.type === "núcleo").length,
        0,
      );
      const coreWatched = data.reduce((sum, month, monthIndex) => {
        return (
          sum +
          month.films.reduce((sub, film, filmIndex) => {
            return (
              sub +
              (film.type === "núcleo" &&
              watchedFilms[getFilmKey(film, monthIndex, filmIndex)]
                ? 1
                : 0)
            );
          }, 0)
        );
      }, 0);
      const extraStars = data.reduce((sum, month, monthIndex) => {
        return (
          sum +
          month.films.reduce((sub, film, filmIndex) => {
            return (
              sub +
              (film.type === "complementar" &&
              watchedFilms[getFilmKey(film, monthIndex, filmIndex)]
                ? 1
                : 0)
            );
          }, 0)
        );
      }, 0);
      const savedMonth = window.localStorage.getItem(activeStorageKey(ano));
      const lastMonth = savedMonth !== null ? Number(savedMonth) : null;
      const savedTab = window.localStorage.getItem(tabStorageKey);
      return {
        ano,
        title: `Ano ${ano}`,
        description: ano === 1 ? "Movimentos históricos" : "Estudo por diretor",
        coreCount,
        coreWatched,
        extraStars,
        lastMonth: Number.isNaN(lastMonth) ? null : lastMonth,
        lastTab:
          savedTab === "filmes" || savedTab === "semanas" || savedTab === "arco"
            ? savedTab
            : "filmes",
      };
    };

    setStats([buildStats(ano1, 1), buildStats(ano2, 2)]);
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
        Carregando a home...
      </div>
    );
  }

  if (view === "viewer") {
    return (
      <div>
        <div
          style={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 100,
          }}
        >
          <button
            type="button"
            onClick={() => setView("home")}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              border: "1px solid #333",
              background: "#0f0f0f",
              color: "#ddd",
              fontFamily: "monospace",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            ← Voltar para a home
          </button>
        </div>
        <CinemaViewer
          key={selectedAno}
          data={selectedAno === 1 ? ano1 : ano2}
          ano={selectedAno}
        />
      </div>
    );
  }

  return (
    <div
      style={{ minHeight: "100vh", background: "#080808", color: "#ede5d5" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 34px" }}>
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: 4,
              color: "#6a6a6a",
              textTransform: "uppercase",
              fontFamily: "monospace",
              marginBottom: 12,
            }}
          >
            Home
          </div>
          <h1
            style={{
              fontSize: 38,
              margin: 0,
              lineHeight: 1.1,
              fontWeight: "normal",
            }}
          >
            Seu desafio de cinema
          </h1>
          <p
            style={{
              marginTop: 14,
              maxWidth: 720,
              color: "#9a9288",
              lineHeight: 1.8,
            }}
          >
            Aqui você acompanha a progressão dos anos, vê quantos núcleos já
            completou e quantas estrelas extras ganhou.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 18,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {stats.map((card) => {
            const monthLabelText =
              card.lastMonth !== null
                ? monthLabel(
                    card.ano === 1
                      ? ano1[card.lastMonth].month
                      : ano2[card.lastMonth].month,
                    card.ano === 1
                      ? ano1[card.lastMonth].year
                      : ano2[card.lastMonth].year,
                  )
                : "Nunca acessado";
            const progress = Math.round(
              (card.coreWatched / card.coreCount) * 100,
            );
            return (
              <div
                key={card.ano}
                style={{
                  background: "#0c0c0c",
                  border: "1px solid #1f1f1f",
                  borderRadius: 16,
                  padding: "26px 24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 18,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: 2,
                        color: "#6a6a6a",
                        textTransform: "uppercase",
                        fontFamily: "monospace",
                        marginBottom: 6,
                      }}
                    >
                      Ano {card.ano}
                    </div>
                    <h2
                      style={{
                        margin: 0,
                        fontSize: 24,
                        color: "#ede5d5",
                      }}
                    >
                      {card.title}
                    </h2>
                    <p
                      style={{
                        margin: "10px 0 0",
                        color: "#9a9288",
                        fontFamily: "monospace",
                        fontSize: 13,
                        lineHeight: 1.7,
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#888",
                      fontFamily: "monospace",
                      fontSize: 12,
                      textAlign: "right",
                    }}
                  >
                    <div>
                      {card.coreWatched}/{card.coreCount} núcleos
                    </div>
                    <div>
                      {card.extraStars} estrela
                      {card.extraStars === 1 ? "" : "s"}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: 6,
                    background: "#111",
                    borderRadius: 999,
                    overflow: "hidden",
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background: "#c4a02d",
                      transition: "width 0.25s ease",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 20,
                    color: "#7d7d7d",
                    fontFamily: "monospace",
                    fontSize: 12,
                  }}
                >
                  <span>Progresso: {progress}%</span>
                  <span>Último mês: {monthLabelText}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedAno(card.ano);
                    setView("viewer");
                    window.localStorage.setItem(
                      "cinema-lastAno",
                      String(card.ano),
                    );
                  }}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: 999,
                    border: "1px solid #333",
                    background: "#111",
                    color: "#ece0c8",
                    fontFamily: "monospace",
                    fontSize: 12,
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  Continuar Ano {card.ano}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
