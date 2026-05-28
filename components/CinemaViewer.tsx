"use client";

import { useEffect, useState } from "react";
import { Film, Month } from "@/data/ano1";
import { seasonColors, seasonLabels, monthLabel, Season } from "@/lib/seasons";

interface Props {
  data: Month[];
  ano: 1 | 2;
}

type Tab = "filmes" | "semanas" | "arco";
type FilmFilter = "all" | "nao-vistos";

const activeStorageKey = (ano: 1 | 2) => `cinema-lastActive-ano${ano}`;
const tabStorageKey = "cinema-lastTab";
const filterStorageKey = "cinema-filmFilter";
const watchedFilmsStorageKey = "cinema-watchedFilms";

const getFilmKey = (film: Film, monthIndex: number, filmIndex: number) =>
  `${film.title}::${film.year}::${monthIndex}::${filmIndex}`;

const filmTitleMap: Record<string, string> = {
  "O Gabinete do Dr. Caligari": "The Cabinet of Dr. Caligari",
  Metrópolis: "Metropolis",
  "M – O Vampiro de Düsseldorf": "M",
  "O Último Homem": "The Last Laugh",
  "As Mãos de Orlac": "The Hands of Orlac",
  "A Caixa de Pandora": "Pandora's Box",
  "O Encouraçado Potemkin": "Battleship Potemkin",
  "A Greve": "Strike",
  "O Homem com a Câmera": "Man with a Movie Camera",
  "A Mãe": "Mother",
  Outubro: "October",
  "Ivan, o Terrível – Parte I": "Ivan the Terrible, Part I",
  "A Terra": "Earth",
  Entusiasmo: "Enthusiasm",
  "A Marca da Maldade": "Touch of Evil",
  "Rio Vermelho": "Red River",
  "Rastros de Ódio": "The Searchers",
  "Os Melhores Anos de Nossas Vidas": "The Best Years of Our Lives",
  "No Desfiladeiro da Morte": "My Darling Clementine",
  "A Malvada": "All About Eve",
  "Quanto Mais Quente Melhor": "Some Like It Hot",
  "O Pecado Mora ao Lado": "The Seven Year Itch",
  "Pacto de Sangue": "Double Indemnity",
  "A Mulher do Quadro": "The Woman in the Window",
  "Os Assassinos": "The Killers",
  "A Morte Num Beijo": "Kiss of Death",
  "Aos Olhos do Crime": "The Naked City",
  "O Estranho": "The Stranger",
  "Roma, Cidade Aberta": "Rome, Open City",
  "Arroz Amargo": "Bitter Rice",
  "Milagre em Milão": "Miracle in Milan",
  "Viagem a Tóquio": "Tokyo Story",
  "Os Sete Samurais": "Seven Samurai",
  "Contos da Lua Vaga": "Tales of the Night",
  "Primavera Tardia": "Late Spring",
  "O Fim do Verão": "Late Summer",
  "Mulher na Neblina": "Woman in the Dunes",
  "Intriga Internacional": "North by Northwest",
  "A Sombra de uma Dúvida": "Shadow of a Doubt",
  "Juventude Transviada": "The Wild One",
  "Os Pássaros": "The Birds",
  "Tudo que o Céu Permite": "All That Heaven Allows",
  "Um Americano em Paris": "An American in Paris",
  "A Noite Americana": "Day for Night",
  "A Colecionadora": "The Collector",
  "Paris Pertence a Nós": "Paris Belongs to Us",
  "Uma Mulher é uma Mulher": "A Woman Is a Woman",
  "Contos Cruéis da Juventude": "Cruel Tales of Youth",
  "A Mulher dos Dunas": "Woman in the Dunes",
  "Morte por Enforcamento": "Death by Hanging",
  "Violência às 11h": "Violence at Noon",
  "O Porco e o Couraçado": "The Pig and the Battleship",
  "O Desprezo": "Contempt",
  "O Amor é Mais Frio que a Morte": "Love Is Colder Than Death",
  "Aguirre, a Cólera de Deus": "Aguirre, the Wrath of God",
  "No Decurso do Tempo": "In the Course of Time",
  "O Tambor": "The Tin Drum",
  "O Casamento de Maria Braun": "The Marriage of Maria Braun",
  "A Chinesa": "La Chinoise",
  "Um Filme Como os Outros": "A Film Like Any Other",
  "Número Dois": "Number Two",
  "A Conversação": "The Conversation",
  "Touro Indomável": "Raging Bull",
  "O Franco-Atirador": "The Deer Hunter",
  Sabotador: "Saboteur",
  "Janela Indiscreta": "Rear Window",
  "O Homem Errado": "The Wrong Man",
  "O Caso Paradine": "The Paradine Case",
  "Sob o Signo de Capricórnio": "Under Capricorn",
  "Caminhos da Glória": "Paths of Glory",
  "Dr. Fantástico": "Dr. Strangelove",
  "2001: Uma Odisseia no Espaço": "2001: A Space Odyssey",
  "Laranja Mecânica": "A Clockwork Orange",
  "O Iluminado": "The Shining",
  "De Olhos Bem Fechados": "Eyes Wide Shut",
  "O Sétimo Selo": "The Seventh Seal",
  "Como num Espelho": "Through a Glass Darkly",
  "O Silêncio": "The Silence",
  "Cenas de um Casamento": "Scenes from a Marriage",
  "A Hora do Lobo": "Hour of the Wolf",
  "A Vergonha": "Shame",
  "Os Palhaços": "The Clowns",
  "Casanova de Fellini": "Fellini's Casanova",
  "A Noite": "The Night",
  "O Deserto Vermelho": "Red Desert",
  "O Passageiro": "The Passenger",
  "A Amiga": "The Girlfriend",
  "O Grito": "The Cry",
  "Identificação de uma Mulher": "Identification of a Woman",
  "Um Cão Andaluz": "Un Chien Andalou",
  "O Anjo Exterminador": "The Exterminating Angel",
  "O Charme Discreto da Burguesia": "The Discreet Charm of the Bourgeoisie",
  "O Fantasma da Liberdade": "The Phantom of Liberty",
  "Esse Obscuro Objeto do Desejo": "That Obscure Object of Desire",
  "Um Condenado à Morte Escapou": "A Man Escaped",
  "O Diário de um Pároco de Aldeia": "Diary of a Country Priest",
  "O Diabo Provavelmente": "The Devil Probably",
  "O Dinheiro": "The Money",
  "Uma Mulher sob Influência": "A Woman Under the Influence",
  "A Morte de um Burocrata": "Death of a Bureaucrat",
  "O Assassinato de um Corretor Chinês": "The Killing of a Chinese Bookie",
  "O Evangelho Segundo Mateus": "The Gospel According to St. Matthew",
  "O Decamerão": "The Decameron",
  "As Mil e Uma Noites": "Arabian Nights",
  "Atirem no Pianista": "Shoot the Piano Player",
  "Antoine e Colette": "Antoine and Colette",
  "A Noiva Estava de Preto": "The Bride Wore Black",
  "O Quarto Verde": "The Green Room",
  "Beijos Proibidos": "Forbidden Kisses",
  "Domicílio Conjugal": "My Night at Maud's",
  "A História de Adèle H.": "The Story of Adele H.",
  "O Amor em Fuga": "Love in the Afternoon",
};

function getWikipediaUrl(name: string) {
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(name)}`;
}

function getFilmLabel(title: string) {
  return filmTitleMap[title] ?? title;
}

function getLetterboxdSearchUrl(title: string, year: number) {
  const query = encodeURIComponent(`${title} ${year}`);
  return `https://letterboxd.com/search/films/${query}/`;
}

export default function CinemaViewer({ data, ano }: Props) {
  const [active, setActive] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    const savedActive = window.localStorage.getItem(activeStorageKey(ano));
    if (savedActive !== null) {
      const parsed = Number(savedActive);
      if (!Number.isNaN(parsed) && parsed >= 0 && parsed < data.length) {
        return parsed;
      }
    }
    return 0;
  });
  const [tab, setTab] = useState<Tab>(() => {
    if (typeof window === "undefined") return "filmes";
    const savedTab = window.localStorage.getItem(tabStorageKey);
    if (
      savedTab === "filmes" ||
      savedTab === "semanas" ||
      savedTab === "arco"
    ) {
      return savedTab;
    }
    return "filmes";
  });
  const [filmFilter, setFilmFilter] = useState<FilmFilter>(() => {
    if (typeof window === "undefined") return "all";
    const savedFilter = window.localStorage.getItem(filterStorageKey);
    if (savedFilter === "all" || savedFilter === "nao-vistos") {
      return savedFilter;
    }
    return "all";
  });
  const [watchedFilms, setWatchedFilms] = useState<Record<string, boolean>>(
    () => {
      if (typeof window === "undefined") return {};
      const savedFilms = window.localStorage.getItem(watchedFilmsStorageKey);
      if (!savedFilms) return {};
      try {
        return JSON.parse(savedFilms);
      } catch {
        return {};
      }
    },
  );

  useEffect(() => {
    window.localStorage.setItem(activeStorageKey(ano), String(active));
  }, [active, ano]);

  useEffect(() => {
    window.localStorage.setItem(tabStorageKey, tab);
  }, [tab]);

  useEffect(() => {
    window.localStorage.setItem(filterStorageKey, filmFilter);
  }, [filmFilter]);

  useEffect(() => {
    window.localStorage.setItem(
      watchedFilmsStorageKey,
      JSON.stringify(watchedFilms),
    );
  }, [watchedFilms]);

  const m = data[active];
  const colors = seasonColors[m.season as Season];
  const totalFilmes = data.reduce((a, d) => a + d.films.length, 0);
  const accumulated = data
    .slice(0, active + 1)
    .reduce((a, d) => a + d.films.length, 0);

  const monthCoreCount = m.films.filter(
    (film) => film.type === "núcleo",
  ).length;
  const monthCoreWatched = m.films.reduce((sum, film, index) => {
    return (
      sum +
      (film.type === "núcleo" && watchedFilms[getFilmKey(film, active, index)]
        ? 1
        : 0)
    );
  }, 0);
  const monthWatchedCount = m.films.reduce((sum, film, index) => {
    return sum + (watchedFilms[getFilmKey(film, active, index)] ? 1 : 0);
  }, 0);
  const monthCompleted = monthWatchedCount >= 4;
  const monthExtraStars = m.films.reduce((sum, film, index) => {
    return (
      sum +
      (film.type === "complementar" &&
      watchedFilms[getFilmKey(film, active, index)]
        ? 1
        : 0)
    );
  }, 0);

  const totalWatched = data.reduce((sum, month, monthIndex) => {
    return (
      sum +
      month.films.reduce((sub, film, index) => {
        return (
          sub + (watchedFilms[getFilmKey(film, monthIndex, index)] ? 1 : 0)
        );
      }, 0)
    );
  }, 0);

  const yearCoreCount = data.reduce(
    (sum, month) =>
      sum + month.films.filter((film) => film.type === "núcleo").length,
    0,
  );
  const yearCoreWatched = data.reduce((sum, month, monthIndex) => {
    return (
      sum +
      month.films.reduce((sub, film, index) => {
        return (
          sub +
          (film.type === "núcleo" &&
          watchedFilms[getFilmKey(film, monthIndex, index)]
            ? 1
            : 0)
        );
      }, 0)
    );
  }, 0);
  const yearExtraStars = totalWatched - yearCoreWatched;
  const yearProgress = Math.round((yearCoreWatched / yearCoreCount) * 100);
  const monthProgress = Math.min(
    100,
    Math.round((monthCoreWatched / monthCoreCount) * 100),
  );

  const notWatched = m.films
    .map((film, index) => ({ film, index }))
    .filter(
      ({ film, index }) => !watchedFilms[getFilmKey(film, active, index)],
    );
  const watchedList = m.films
    .map((film, index) => ({ film, index }))
    .filter(({ film, index }) => watchedFilms[getFilmKey(film, active, index)]);
  const visibleFilms =
    filmFilter === "all" ? [...notWatched, ...watchedList] : notWatched;

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

  const renderFilmCard = (film: Film, index: number) => {
    const filmKey = getFilmKey(film, active, index);
    const isWatched = !!watchedFilms[filmKey];
    return (
      <div
        key={filmKey}
        style={{
          padding: "10px 13px",
          background: isWatched
            ? "#0c0c0c"
            : film.type === "núcleo"
              ? "#101010"
              : "#0a0a0a",
          border: `1px solid ${film.type === "núcleo" ? colors.soft : "#141414"}`,
          borderLeft: `3px solid ${film.type === "núcleo" ? colors.accent : "#252525"}`,
          borderRadius: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          opacity: isWatched ? 0.95 : 1,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 16,
              marginBottom: 3,
              color: film.type === "núcleo" ? "#e0d8c8" : "#706860",
            }}
          >
            <a
              href={getLetterboxdSearchUrl(getFilmLabel(film.title), film.year)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: film.type === "núcleo" ? "#e0d8c8" : "#706860",
                textDecoration: "none",
              }}
            >
              {getFilmLabel(film.title)}
            </a>
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#404040",
              fontFamily: "monospace",
            }}
          >
            {film.director} · {film.year}
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
              border: `1px solid ${isWatched ? colors.accent : "#333"}`,
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
            {isWatched ? "VISTO" : film.type === "núcleo" ? "NÚCLEO" : "EXTRA"}
          </span>
        </div>
      </div>
    );
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
              margin: "0 0 8px",
              letterSpacing: -0.5,
            }}
          >
            {subtitle}
          </h1>
          <div
            style={{
              fontSize: 12,
              color: "#7d7d7d",
              fontFamily: "monospace",
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 8,
            }}
          >
            <span>
              Desafio do ano: {yearCoreWatched}/{yearCoreCount} núcleos (
              {yearProgress}%)
            </span>
            <span>•</span>
            <span>
              Estrelas extras: {yearExtraStars} {yearExtraStars > 0 ? "★" : ""}
            </span>
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#7d7d7d",
              fontFamily: "monospace",
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <span>Último ponto de parada: {monthLabel(m.month, m.year)}</span>
            <span>•</span>
            <span>Aba: {tab.toUpperCase()}</span>
          </div>

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

          <div style={{ marginTop: 16 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                alignItems: "center",
                color: "#888",
                fontFamily: "monospace",
                fontSize: 11,
              }}
            >
              <span>
                Desafio do mês: {monthCoreWatched}/{monthCoreCount} núcleos (
                {monthProgress}%)
              </span>
              <span>•</span>
              <span>
                {monthWatchedCount}/4 filmes vistos{" "}
                {monthCompleted ? "· CONCLUÍDO" : ""}
              </span>
              <span>•</span>
              <span>
                Extras: {monthExtraStars} estrelinha
                {monthExtraStars === 1 ? "" : "s"}
              </span>
            </div>
            <div
              style={{
                height: 6,
                marginTop: 10,
                background: "#111",
                borderRadius: 999,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${Math.max(4, monthProgress)}%`,
                  minWidth: monthProgress > 0 ? `${monthProgress}%` : "4%",
                  height: "100%",
                  background: colors.accent,
                  transition: "width 0.2s ease",
                }}
              />
            </div>
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {(["all", "nao-vistos"] as FilmFilter[]).map((value) => {
              const labelText = value === "all" ? "Todos" : "Não vistos";
              const isActive = filmFilter === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setFilmFilter(value)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 999,
                    border: isActive
                      ? `1px solid ${colors.accent}`
                      : "1px solid #2a2a2a",
                    background: isActive ? colors.tag : "#111",
                    color: isActive ? colors.accent : "#999",
                    fontFamily: "monospace",
                    fontSize: 11,
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  {labelText}
                </button>
              );
            })}
          </div>
          <div
            style={{
              color: "#7d7d7d",
              fontFamily: "monospace",
              fontSize: 12,
            }}
          >
            {monthCoreWatched}/{monthCoreCount} núcleos concluídos ·{" "}
            {monthWatchedCount}/4 filmes vistos{" "}
            {monthCompleted ? "· CONCLUÍDO" : ""} · {yearCoreWatched}/
            {yearCoreCount} no ano · Estrelas extras: {yearExtraStars}
          </div>
        </div>

        {/* ── Filmes ─────────────────────────────────────── */}
        {tab === "filmes" && (
          <div style={{ display: "grid", gap: 16 }}>
            {filmFilter === "all" && notWatched.length > 0 && (
              <div
                style={{
                  fontFamily: "monospace",
                  color: "#999",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                }}
              >
                Não vistos — {notWatched.length}
              </div>
            )}

            {(filmFilter === "all" || filmFilter === "nao-vistos") &&
              notWatched.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 7,
                  }}
                >
                  {notWatched.map(({ film, index }) =>
                    renderFilmCard(film, index),
                  )}
                </div>
              )}

            {filmFilter === "all" && watchedList.length > 0 && (
              <>
                <div
                  style={{
                    fontFamily: "monospace",
                    color: "#999",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                  }}
                >
                  Vistos — {watchedList.length}
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 7,
                  }}
                >
                  {watchedList.map(({ film, index }) =>
                    renderFilmCard(film, index),
                  )}
                </div>
              </>
            )}

            {visibleFilms.length === 0 && (
              <div
                style={{
                  padding: "18px 16px",
                  background: "#101010",
                  border: "1px solid #181818",
                  borderRadius: 3,
                  color: "#8d8d8d",
                  fontFamily: "monospace",
                  fontSize: 13,
                }}
              >
                Nenhum filme corresponde ao filtro selecionado.
              </div>
            )}
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
                      {getFilmLabel(film)}
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
