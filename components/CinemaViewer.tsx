"use client";

import { useEffect, useState } from "react";
import { Film, Month } from "@/data/ano1";
import { seasonColors, seasonLabels, monthLabel, Season } from "@/lib/seasons";

interface Props {
  data: Month[];
  ano: 1 | 2;
}

type Tab = "filmes" | "semanas" | "arco";

const activeStorageKey = (ano: 1 | 2) => `cinema-lastActive-ano${ano}`;
const watchedFilmsStorageKey = "cinema-watchedFilms";

const getFilmKey = (film: Film, monthIndex: number, filmIndex: number) =>
  `${film.title}::${film.year}::${monthIndex}::${filmIndex}`;

function getWikipediaUrl(name: string) {
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(name)}`;
}

function getLetterboxdSearchUrl(title: string, year: number) {
  const query = encodeURIComponent(`${title} ${year}`);
  return `https://letterboxd.com/search/films/${query}/`;
}

export default function CinemaViewer({ data, ano }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const [tab, setTab] = useState<Tab>("filmes");
  const [watchedFilms, setWatchedFilms] = useState<Record<string, boolean>>({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedActive = window.localStorage.getItem(activeStorageKey(ano));
    if (savedActive !== null) {
      const parsed = Number(savedActive);
      if (!Number.isNaN(parsed) && parsed >= 0 && parsed < data.length) {
        setActive(parsed);
      } else {
        setActive(0);
      }
    } else {
      setActive(0);
    }

    const savedFilms = window.localStorage.getItem(watchedFilmsStorageKey);
    if (savedFilms) {
      try {
        setWatchedFilms(JSON.parse(savedFilms));
      } catch {
        setWatchedFilms({});
      }
    }

    setIsReady(true);
  }, [ano, data.length]);

  useEffect(() => {
    if (active !== null) {
      window.localStorage.setItem(activeStorageKey(ano), String(active));
    }
  }, [active, ano]);

  useEffect(() => {
    window.localStorage.setItem(
      watchedFilmsStorageKey,
      JSON.stringify(watchedFilms),
    );
  }, [watchedFilms]);

  if (!isReady || active === null) {
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
        Restaurando seu ponto de parada...
      </div>
    );
  }

  const m = data[active];
  const colors = seasonColors[m.season as Season];
  const totalFilmes = data.reduce((a, d) => a + d.films.length, 0);
  const accumulated = data
    .slice(0, active + 1)
    .reduce((a, d) => a + d.films.length, 0);

  const handleMonth = (i: number) => {
    setActive(i);
    setTab("filmes");
  };

  const toggleWatched = (filmKey: string) => {
    setWatchedFilms((prev) => ({
      ...prev,
      [filmKey]: !prev[filmKey],
    }));
  };

  const isAno1 = ano === 1;
  const subtitle = isAno1
    ? `${totalFilmes} filmes · ${data.length} meses · ${data.length} movimentos · ordem cronológica`
    : `${totalFilmes} filmes · ${data.length} meses · 12 diretores · por autor`;

  const dateRange = isAno1 ? "Mai 2026 → Jul 2027" : "Ago 2027 → Jul 2028";
  const label = isAno1 ? "MOVIMENTOS HISTÓRICOS" : "ESTUDO POR DIRETOR";

  return (
    <div style={{ minHeight: "100vh", background: "#080808" }}>
      {/* ── Header ─────────────────────────────────────── */}
      <div
        style={{
          borderBottom: "1px solid #181818",
          padding: "20px 28px 0",
          background: "#0c0c0c",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 18,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                fontSize: 13,
                letterSpacing: 4,
                color: "#444",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontSize: 13,
                color: "#282828",
                fontFamily: "monospace",
              }}
            >
              {dateRange}
            </span>
          </div>
          <h1
            style={{
              fontSize: 30,
              fontWeight: "normal",
              color: "#ede5d5",
              margin: "0 0 18px",
              letterSpacing: -0.5,
            }}
          >
            {subtitle}
          </h1>

          {/* Month tabs */}
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: 0,
              scrollbarWidth: "none",
            }}
          >
            {data.map((d, i) => {
              const c = seasonColors[d.season as Season];
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => handleMonth(i)}
                  style={{
                    padding: "8px 11px",
                    background: isActive ? c.bg : "transparent",
                    borderBottom: isActive
                      ? `2px solid ${c.accent}`
                      : "2px solid transparent",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    color: isActive ? c.accent : "#333",
                    fontSize: 13,
                    fontFamily: "monospace",
                    letterSpacing: 1,
                    whiteSpace: "nowrap",
                    transition: "all 0.15s",
                    flexShrink: 0,
                  }}
                >
                  {monthLabel(d.month, d.year)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 34px" }}>
        {/* Movement / Director card */}
        <div
          style={{
            background: colors.bg,
            border: `1px solid ${colors.soft}`,
            borderRadius: 3,
            padding: "20px 24px",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 12,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  marginBottom: 7,
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    letterSpacing: 3,
                    color: colors.accent,
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                  }}
                >
                  {seasonLabels[m.season as Season]}
                </span>
                <span style={{ color: colors.soft, fontSize: 14 }}>·</span>
                <span
                  style={{
                    fontSize: 13,
                    letterSpacing: 2,
                    color: "#484848",
                    fontFamily: "monospace",
                  }}
                >
                  {m.period}
                </span>
                <span style={{ color: colors.soft, fontSize: 14 }}>·</span>
                <span
                  style={{
                    fontSize: 13,
                    color: "#343434",
                    fontFamily: "monospace",
                  }}
                >
                  #{active + 1} / {data.length}
                </span>
              </div>
              <h2
                style={{
                  fontSize: 28,
                  margin: 0,
                  color: "#f0e8d8",
                  fontWeight: "normal",
                  letterSpacing: -0.2,
                }}
              >
                {m.movement}
              </h2>
            </div>
            <div
              style={{
                background: colors.tag,
                padding: "4px 11px",
                borderRadius: 2,
                fontSize: 13,
                color: colors.accent,
                fontFamily: "monospace",
                letterSpacing: 2,
                whiteSpace: "nowrap",
              }}
            >
              {m.month.toUpperCase()} &apos;{m.year.slice(2)} · {m.films.length}{" "}
              FILMES
            </div>
          </div>

          <p
            style={{
              margin: "0 0 12px",
              lineHeight: 1.9,
              fontSize: 18,
              color: "#9a9288",
              maxWidth: 760,
            }}
          >
            {m.context}
          </p>

          {/* Directors */}
          <div
            style={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              marginBottom: 12,
            }}
          >
            {m.directors.map((d, i) => (
              <a
                key={i}
                href={getWikipediaUrl(d)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "4px 10px",
                  background: "#ffffff05",
                  border: `1px solid ${colors.soft}`,
                  borderRadius: 2,
                  fontSize: 14,
                  color: colors.accent,
                  fontFamily: "monospace",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.accent)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.accent)
                }
              >
                {d}
              </a>
            ))}
          </div>

          {/* Refs */}
          <div
            style={{
              borderTop: `1px solid ${colors.soft}`,
              paddingTop: 10,
              display: "flex",
              gap: 7,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 10,
                color: "#3a3a3a",
                fontFamily: "monospace",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Referências
            </span>
            {m.refs.map((r, i) => (
              <a
                key={i}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 12,
                  color: colors.soft,
                  padding: "2px 8px",
                  border: `1px solid ${colors.soft}`,
                  borderRadius: 2,
                  fontFamily: "monospace",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.accent)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.soft)
                }
              >
                ↗ {r.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Tabs ──────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            marginBottom: 14,
            borderBottom: "1px solid #181818",
          }}
        >
          {(["filmes", "semanas", "arco"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "6px 16px",
                background: "transparent",
                borderBottom:
                  tab === t
                    ? `2px solid ${colors.accent}`
                    : "2px solid transparent",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                color: tab === t ? colors.accent : "#333",
                fontSize: 11,
                fontFamily: "monospace",
                letterSpacing: 2,
                textTransform: "uppercase",
                transition: "color 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── Filmes ─────────────────────────────────────── */}
        {tab === "filmes" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 7,
            }}
          >
            {m.films.map((f, i) => {
              const filmKey = getFilmKey(f, active, i);
              const isWatched = !!watchedFilms[filmKey];
              return (
                <div
                  key={i}
                  style={{
                    padding: "10px 13px",
                    background: f.type === "núcleo" ? "#101010" : "#0a0a0a",
                    border: `1px solid ${f.type === "núcleo" ? colors.soft : "#141414"}`,
                    borderLeft: `3px solid ${f.type === "núcleo" ? colors.accent : "#252525"}`,
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 16,
                        marginBottom: 3,
                        color: f.type === "núcleo" ? "#e0d8c8" : "#706860",
                      }}
                    >
                      <a
                        href={getLetterboxdSearchUrl(f.title, f.year)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: f.type === "núcleo" ? "#e0d8c8" : "#706860",
                          textDecoration: "none",
                        }}
                      >
                        {f.title}
                      </a>
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#404040",
                        fontFamily: "monospace",
                      }}
                    >
                      {f.director} · {f.year}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: 8,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleWatched(filmKey)}
                      aria-label={
                        isWatched ? "Desmarcar como visto" : "Marcar como visto"
                      }
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 4,
                        border: `1px solid ${
                          isWatched ? colors.accent : "#333"
                        }`,
                        background: isWatched ? colors.bg : "transparent",
                        color: isWatched ? colors.accent : "#777",
                        fontSize: 14,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {isWatched ? "✓" : "○"}
                    </button>
                    <span
                      style={{
                        fontSize: 10,
                        color: isWatched ? colors.accent : "#555",
                        fontFamily: "monospace",
                        textTransform: "uppercase",
                        letterSpacing: 1.2,
                      }}
                    >
                      {isWatched ? "VISTO" : f.type}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Semanas ────────────────────────────────────── */}
        {tab === "semanas" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 10,
              }}
            >
              {m.weeks.map((w, i) => (
                <div
                  key={i}
                  style={{
                    padding: "14px 16px",
                    background: "#0d0d0d",
                    border: "1px solid #181818",
                    borderRadius: 2,
                  }}
                >
                  <div
                    style={{
                      fontSize: 8,
                      letterSpacing: 3,
                      color: colors.accent,
                      textTransform: "uppercase",
                      fontFamily: "monospace",
                      marginBottom: 10,
                    }}
                  >
                    SEMANA {i + 1}
                  </div>
                  {w.map((film, j) => (
                    <div
                      key={j}
                      style={{
                        padding: "6px 0",
                        borderBottom:
                          j < w.length - 1 ? "1px solid #181818" : "none",
                        fontSize: 16,
                        color: j === 0 ? "#d8d0c0" : "#706860",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <span
                        style={{
                          color: colors.soft,
                          fontFamily: "monospace",
                          fontSize: 11,
                          minWidth: 22,
                        }}
                      >
                        {j === 0 ? "Sex" : "Dom"}
                      </span>
                      {film}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Connection note */}
            <div
              style={{
                padding: "12px 16px",
                background: "#0d0d0d",
                border: `1px solid ${colors.soft}`,
                borderLeft: `3px solid ${colors.accent}`,
                borderRadius: 2,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: "#a09888",
                  lineHeight: 1.8,
                }}
              >
                {m.connection}
              </p>
            </div>
          </div>
        )}

        {/* ── Arco ───────────────────────────────────────── */}
        {tab === "arco" && (
          <div
            style={{
              padding: "18px 22px",
              background: "#0d0d0d",
              border: "1px solid #181818",
              borderRadius: 2,
            }}
          >
            <div
              style={{
                fontSize: 8,
                letterSpacing: 3,
                color: "#343434",
                textTransform: "uppercase",
                fontFamily: "monospace",
                marginBottom: 14,
              }}
            >
              {isAno1 ? "ARCO CRONOLÓGICO" : "12 DIRETORES"} — {active + 1} /{" "}
              {data.length}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {data.map((d, i) => {
                const c = seasonColors[d.season as Season];
                const isCurrent = i === active;
                const isPast = i < active;
                return (
                  <button
                    key={i}
                    onClick={() => handleMonth(i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "3px 0",
                      background: "transparent",
                      border: "none",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: isCurrent
                          ? c.accent
                          : isPast
                            ? c.soft
                            : "#222",
                        border: isCurrent
                          ? `1px solid ${c.accent}`
                          : "1px solid transparent",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: "monospace",
                        minWidth: 52,
                        color: isCurrent ? c.accent : "#383838",
                      }}
                    >
                      {monthLabel(d.month, d.year)}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: "monospace",
                        minWidth: 72,
                        color: "#2a2a2a",
                      }}
                    >
                      {d.period}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: isCurrent
                          ? "#e8e0d0"
                          : isPast
                            ? "#404040"
                            : "#303030",
                      }}
                    >
                      {d.movement}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Footer stats ───────────────────────────────── */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 20,
            paddingTop: 16,
            borderTop: "1px solid #121212",
            flexWrap: "wrap",
          }}
        >
          {[
            ["Posição", `${active + 1} / ${data.length}`],
            ["Núcleos", `${m.films.filter((f) => f.type === "núcleo").length}`],
            [
              "Complementares",
              `${m.films.filter((f) => f.type === "complementar").length}`,
            ],
            ["Acumulado", `${accumulated} / ${totalFilmes}`],
            ["Temporada", seasonLabels[m.season as Season]],
          ].map(([lbl, val]) => (
            <div key={lbl}>
              <div
                style={{
                  fontSize: 8,
                  color: "#282828",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  marginBottom: 3,
                }}
              >
                {lbl}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: colors.accent,
                  fontFamily: "monospace",
                }}
              >
                {val}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
