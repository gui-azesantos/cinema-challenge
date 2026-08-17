export type Film = {
  title: string;
  director: string;
  year: number;
  type: "núcleo" | "complementar";
};

export type Ref = {
  label: string;
  url: string;
};

export type Month = {
  month: string;
  year: string;
  season: "outono" | "inverno" | "primavera" | "verão";
  movement: string;
  period: string;
  context: string;
  directors: string[];
  refs: Ref[];
  films: Film[];
  weeks: string[][];
  connection: string;
};

const ano1: Month[] = [
  // 1. Ago '26 — Neorrealismo Italiano
  {
    month: "Agosto",
    year: "2026",
    season: "inverno",
    movement: "Neorrealismo Italiano",
    period: "1943–1952",
    context:
      "Da ruína moral da Itália pós-WWII emerge um cinema de câmera na rua, atores não-profissionais e dignidade dos pobres. Rossellini filma entre escombros reais; De Sica encontra poesia no cotidiano operário. É a semente direta da Nouvelle Vague e do Cinema Novo Brasileiro.",
    directors: [
      "Roberto Rossellini",
      "Vittorio De Sica",
      "Luchino Visconti",
      "Giuseppe De Santis",
    ],
    refs: [
      {
        label: "Wikipedia — Italian Neorealism",
        url: "https://en.wikipedia.org/wiki/Italian_neorealism",
      },
      {
        label: "YouTube — Italian Neorealism Explained",
        url: "https://www.youtube.com/watch?v=uyWBCVR3tBM",
      },
    ],
    films: [
      {
        title: "Roma, Cidade Aberta",
        director: "Rossellini",
        year: 1945,
        type: "núcleo",
      },
      { title: "Paisà", director: "Rossellini", year: 1946, type: "núcleo" },
      { title: "Umberto D.", director: "De Sica", year: 1952, type: "núcleo" },
      {
        title: "La Terra Trema",
        director: "Visconti",
        year: 1948,
        type: "núcleo",
      },
      {
        title: "Ossessione",
        director: "Visconti",
        year: 1943,
        type: "complementar",
      },
      {
        title: "Germania Anno Zero",
        director: "Rossellini",
        year: 1948,
        type: "complementar",
      },
      {
        title: "Arroz Amargo",
        director: "Giuseppe De Santis",
        year: 1949,
        type: "complementar",
      },
      {
        title: "Milagre em Milão",
        director: "De Sica",
        year: 1951,
        type: "complementar",
      },
    ],
    weeks: [
      ["Roma, Cidade Aberta", "Paisà"],
      ["Umberto D.", "La Terra Trema"],
      ["Ossessione", "Germania Anno Zero"],
      ["Arroz Amargo", "Milagre em Milão"],
    ],
    connection:
      "→ Setembro '26: Cinema Clássico Japonês — Kurosawa, Ozu e Mizoguchi.",
  },

  // 2. Set '26 — Cinema Clássico Japonês
  {
    month: "Setembro",
    year: "2026",
    season: "primavera",
    movement: "Cinema Japonês Clássico",
    period: "1948–1965",
    context:
      "Kurosawa e Ozu são antípodas: um épico dinâmico, outro contemplativo e minimalista. Mizoguchi completa o trio com sua câmera flutuante e retratos intensos de personagens femininas.",
    directors: [
      "Akira Kurosawa",
      "Yasujiro Ozu",
      "Kenji Mizoguchi",
      "Mikio Naruse",
    ],
    refs: [
      {
        label: "Wikipedia — Akira Kurosawa",
        url: "https://en.wikipedia.org/wiki/Akira_Kurosawa",
      },
      {
        label: "YouTube — Ozu and the Grammar of Cinema (kogonada)",
        url: "https://www.youtube.com/watch?v=muBObMvQHrU",
      },
    ],
    films: [
      {
        title: "Viagem a Tóquio",
        director: "Yasujiro Ozu",
        year: 1953,
        type: "núcleo",
      },
      {
        title: "Ikiru",
        director: "Akira Kurosawa",
        year: 1952,
        type: "núcleo",
      },
      {
        title: "Os Sete Samurais",
        director: "Kurosawa",
        year: 1954,
        type: "núcleo",
      },
      {
        title: "Contos da Lua Vaga",
        director: "Mizoguchi",
        year: 1953,
        type: "núcleo",
      },
      {
        title: "Primavera Tardia",
        director: "Ozu",
        year: 1949,
        type: "complementar",
      },
      {
        title: "O Fim do Verão",
        director: "Ozu",
        year: 1961,
        type: "complementar",
      },
      {
        title: "Yojimbo",
        director: "Kurosawa",
        year: 1961,
        type: "complementar",
      },
      {
        title: "Mulher na Neblina",
        director: "Naruse",
        year: 1960,
        type: "complementar",
      },
    ],
    weeks: [
      ["Viagem a Tóquio", "Ikiru"],
      ["Os Sete Samurais", "Contos da Lua Vaga"],
      ["Primavera Tardia", "O Fim do Verão"],
      ["Yojimbo", "Mulher na Neblina"],
    ],
    connection: "→ Outubro '26: Teoria dos Autores (Cahiers du Cinéma).",
  },

  // 3. Out '26 — Teoria dos Autores / Cahiers
  {
    month: "Outubro",
    year: "2026",
    season: "primavera",
    movement: "Teoria do Autor — Cahiers du Cinéma",
    period: "1954–1959",
    context:
      "Os críticos dos Cahiers (Truffaut, Godard et al.) transformam-se em cineastas e formulam a 'politique des auteurs': o diretor como autor. Esse mês introduz o repertório que alimentará a Nouvelle Vague.",
    directors: [
      "Alfred Hitchcock",
      "Nicholas Ray",
      "Douglas Sirk",
      "Vincente Minnelli",
    ],
    refs: [
      {
        label: "Wikipedia — Cahiers du Cinéma",
        url: "https://en.wikipedia.org/wiki/Cahiers_du_cin%C3%A9ma",
      },
      {
        label: "Wikipedia — Auteur Theory",
        url: "https://en.wikipedia.org/wiki/Auteur_theory",
      },
    ],
    films: [
      {
        title: "Intriga Internacional",
        director: "Hitchcock",
        year: 1959,
        type: "núcleo",
      },
      { title: "Rope", director: "Hitchcock", year: 1948, type: "núcleo" },
      {
        title: "A Sombra de uma Dúvida",
        director: "Hitchcock",
        year: 1943,
        type: "núcleo",
      },
      {
        title: "Juventude Transviada",
        director: "Nicholas Ray",
        year: 1955,
        type: "núcleo",
      },
      {
        title: "Os Pássaros",
        director: "Hitchcock",
        year: 1963,
        type: "complementar",
      },
      {
        title: "Tudo que o Céu Permite",
        director: "Douglas Sirk",
        year: 1955,
        type: "complementar",
      },
      {
        title: "Um Americano em Paris",
        director: "Vincente Minnelli",
        year: 1951,
        type: "complementar",
      },
      {
        title: "Johnny Guitar",
        director: "Nicholas Ray",
        year: 1954,
        type: "complementar",
      },
    ],
    weeks: [
      ["Intriga Internacional", "Rope"],
      ["A Sombra de uma Dúvida", "Juventude Transviada"],
      ["Tudo que o Céu Permite", "Johnny Guitar"],
      ["Os Pássaros", "Um Americano em Paris"],
    ],
    connection: "→ Novembro '26: Nouvelle Vague Francesa.",
  },

  // 4. Nov '26 — Nouvelle Vague Francesa
  {
    month: "Novembro",
    year: "2026",
    season: "primavera",
    movement: "Nouvelle Vague Francesa",
    period: "1958–1968",
    context:
      "A explosão dos jovens cineastas: câmeras leves, jump cuts, atores não convencionais e uma ética de invenção estética. Godard, Truffaut, Varda e os demais reformulam o cinema europeu.",
    directors: [
      "François Truffaut",
      "Claude Chabrol",
      "Jacques Rivette",
      "Éric Rohmer",
      "Agnès Varda",
    ],
    refs: [
      {
        label: "Wikipedia — French New Wave",
        url: "https://en.wikipedia.org/wiki/French_New_Wave",
      },
      {
        label: "YouTube — The French New Wave Explained",
        url: "https://www.youtube.com/watch?v=bFjFnTxITGc",
      },
    ],
    films: [
      {
        title: "Jules e Jim",
        director: "Truffaut",
        year: 1962,
        type: "núcleo",
      },
      { title: "Le Bonheur", director: "Varda", year: 1965, type: "núcleo" },
      {
        title: "A Noite Americana",
        director: "Truffaut",
        year: 1973,
        type: "núcleo",
      },
      {
        title: "A Colecionadora",
        director: "Rohmer",
        year: 1967,
        type: "núcleo",
      },
      {
        title: "Le Beau Serge",
        director: "Chabrol",
        year: 1958,
        type: "complementar",
      },
      {
        title: "Paris Pertence a Nós",
        director: "Rivette",
        year: 1961,
        type: "complementar",
      },
      {
        title: "Sans Soleil",
        director: "Chris Marker",
        year: 1983,
        type: "complementar",
      },
      {
        title: "Uma Mulher é uma Mulher",
        director: "Godard",
        year: 1961,
        type: "complementar",
      },
    ],
    weeks: [
      ["Jules e Jim", "Le Bonheur"],
      ["A Noite Americana", "A Colecionadora"],
      ["Le Beau Serge", "Uma Mulher é uma Mulher"],
      ["Paris Pertence a Nós", "Sans Soleil"],
    ],
    connection: "→ Dezembro '26: Nouvelle Vague Japonesa.",
  },

  // 5. Dez '26 — Nouvelle Vague Japonesa (Nuberu Bagu)
  {
    month: "Dezembro",
    year: "2026",
    season: "verão",
    movement: "Nouvelle Vague Japonesa",
    period: "1959–1970",
    context:
      "O Japão também produz suas rupturas: Oshima, Imamura e Yoshida desafiam a ordem conservadora com filmes politicamente contundentes e formalmente radicais.",
    directors: [
      "Nagisa Oshima",
      "Shohei Imamura",
      "Yoshishige Yoshida",
      "Hiroshi Teshigahara",
    ],
    refs: [
      {
        label: "Wikipedia — Japanese New Wave",
        url: "https://en.wikipedia.org/wiki/Japanese_New_Wave",
      },
    ],
    films: [
      {
        title: "Contos Cruéis da Juventude",
        director: "Nagisa Oshima",
        year: 1960,
        type: "núcleo",
      },
      {
        title: "A Mulher dos Dunas",
        director: "Hiroshi Teshigahara",
        year: 1964,
        type: "núcleo",
      },
      {
        title: "Morte por Enforcamento",
        director: "Nagisa Oshima",
        year: 1968,
        type: "núcleo",
      },
      {
        title: "O Inseto Assassino",
        director: "Shohei Imamura",
        year: 1963,
        type: "núcleo",
      },
      {
        title: "Violência às 11h",
        director: "Nagisa Oshima",
        year: 1966,
        type: "complementar",
      },
      {
        title: "O Porco e o Couraçado",
        director: "Shohei Imamura",
        year: 1961,
        type: "complementar",
      },
      {
        title: "Eros + Massacre",
        director: "Yoshishige Yoshida",
        year: 1969,
        type: "complementar",
      },
      {
        title: "Mapa contra o Jovem Assassino",
        director: "Nagisa Oshima",
        year: 1964,
        type: "complementar",
      },
    ],
    weeks: [
      ["Contos Cruéis da Juventude", "A Mulher dos Dunas"],
      ["Morte por Enforcamento", "O Inseto Assassino"],
      ["Violência às 11h", "O Porco e o Couraçado"],
      ["Eros + Massacre", "Mapa contra o Jovem Assassino"],
    ],
    connection: "→ Janeiro '27: Cinema Novo Brasileiro.",
  },

  // 6. Jan '27 — Cinema Novo Brasileiro
  {
    month: "Janeiro",
    year: "2027",
    season: "verão",
    movement: "Cinema Novo Brasileiro",
    period: "1960–1972",
    context:
      "Glauber Rocha e seus contemporâneos trazem urgência política e estética ao cinema brasileiro: a estética da fome, câmera na mão e denúncia social.",
    directors: [
      "Glauber Rocha",
      "Nelson Pereira dos Santos",
      "Ruy Guerra",
      "Joaquim Pedro de Andrade",
    ],
    refs: [
      {
        label: "Wikipedia — Cinema Novo",
        url: "https://en.wikipedia.org/wiki/Cinema_Novo",
      },
    ],
    films: [
      {
        title: "Barravento",
        director: "Glauber Rocha",
        year: 1962,
        type: "núcleo",
      },
      {
        title: "Terra em Transe",
        director: "Glauber Rocha",
        year: 1967,
        type: "núcleo",
      },
      {
        title: "Vidas Secas",
        director: "Nelson Pereira dos Santos",
        year: 1963,
        type: "núcleo",
      },
      {
        title: "O Dragão da Maldade contra o Santo Guerreiro",
        director: "Glauber Rocha",
        year: 1969,
        type: "núcleo",
      },
      {
        title: "Os Fuzis",
        director: "Ruy Guerra",
        year: 1964,
        type: "complementar",
      },
      {
        title: "Macunaíma",
        director: "Joaquim Pedro de Andrade",
        year: 1969,
        type: "complementar",
      },
      {
        title: "São Paulo S/A",
        director: "Luís Sérgio Person",
        year: 1965,
        type: "complementar",
      },
      {
        title: "Rio, 40 Graus",
        director: "Nelson Pereira dos Santos",
        year: 1955,
        type: "complementar",
      },
    ],
    weeks: [
      ["Barravento", "Vidas Secas"],
      ["Terra em Transe", "O Dragão da Maldade contra o Santo Guerreiro"],
      ["Os Fuzis", "São Paulo S/A"],
      ["Macunaíma", "Rio, 40 Graus"],
    ],
    connection: "→ Fevereiro '27: Novo Cinema Alemão.",
  },

  // 7. Fev '27 — Novo Cinema Alemão
  {
    month: "Fevereiro",
    year: "2027",
    season: "verão",
    movement: "Novo Cinema Alemão",
    period: "1962–1982",
    context:
      "O manifesto de Oberhausen e a geração que seguiu: Fassbinder, Herzog e Wenders reinventam a narrativa e a forma na Alemanha pós-guerra.",
    directors: [
      "Rainer Werner Fassbinder",
      "Werner Herzog",
      "Wim Wenders",
      "Volker Schlöndorff",
    ],
    refs: [
      {
        label: "Wikipedia — New German Cinema",
        url: "https://en.wikipedia.org/wiki/New_German_Cinema",
      },
    ],
    films: [
      {
        title: "Ali: Medo Devora a Alma",
        director: "Fassbinder",
        year: 1974,
        type: "núcleo",
      },
      {
        title: "Aguirre, a Cólera de Deus",
        director: "Herzog",
        year: 1972,
        type: "núcleo",
      },
      {
        title: "No Decurso do Tempo",
        director: "Wenders",
        year: 1976,
        type: "núcleo",
      },
      {
        title: "O Tambor",
        director: "Volker Schlöndorff",
        year: 1979,
        type: "núcleo",
      },
      {
        title: "O Casamento de Maria Braun",
        director: "Fassbinder",
        year: 1979,
        type: "complementar",
      },
      {
        title: "Fitzcarraldo",
        director: "Herzog",
        year: 1982,
        type: "complementar",
      },
      {
        title: "Paris, Texas",
        director: "Wenders",
        year: 1984,
        type: "complementar",
      },
      {
        title: "Nosferatu — O Vampiro da Noite",
        director: "Herzog",
        year: 1979,
        type: "complementar",
      },
    ],
    weeks: [
      ["Ali: Medo Devora a Alma", "Aguirre, a Cólera de Deus"],
      ["No Decurso do Tempo", "O Tambor"],
      ["O Casamento de Maria Braun", "Fitzcarraldo"],
      ["Paris, Texas", "Nosferatu — O Vampiro da Noite"],
    ],
    connection: "→ Março '27: New Hollywood.",
  },

  // 8. Mar '27 — New Hollywood
  {
    month: "Março",
    year: "2027",
    season: "outono",
    movement: "New Hollywood",
    period: "1967–1980",
    context:
      "A revolução dos jovens cineastas americanos que combinam contracultura e forma cinematográfica: Scorsese, Coppola, Cassavetes e Altman.",
    directors: [
      "Martin Scorsese",
      "Francis Ford Coppola",
      "John Cassavetes",
      "Robert Altman",
      "Michael Cimino",
    ],
    refs: [
      {
        label: "Wikipedia — New Hollywood",
        url: "https://en.wikipedia.org/wiki/New_Hollywood",
      },
    ],
    films: [
      {
        title: "A Conversação",
        director: "Coppola",
        year: 1974,
        type: "núcleo",
      },
      {
        title: "Touro Indomável",
        director: "Martin Scorsese",
        year: 1980,
        type: "núcleo",
      },
      { title: "Faces", director: "Cassavetes", year: 1968, type: "núcleo" },
      { title: "Nashville", director: "Altman", year: 1975, type: "núcleo" },
      {
        title: "Apocalypse Now",
        director: "Coppola",
        year: 1979,
        type: "complementar",
      },
      {
        title: "O Franco-Atirador",
        director: "Michael Cimino",
        year: 1978,
        type: "complementar",
      },
      {
        title: "Bonnie e Clyde",
        director: "Arthur Penn",
        year: 1967,
        type: "complementar",
      },
      {
        title: "McCabe & Mrs. Miller",
        director: "Altman",
        year: 1971,
        type: "complementar",
      },
    ],
    weeks: [
      ["A Conversação", "Touro Indomável"],
      ["Faces", "Nashville"],
      ["Apocalypse Now", "O Franco-Atirador"],
      ["Bonnie e Clyde", "McCabe & Mrs. Miller"],
    ],
    connection: "→ Abril '27: Cinema Indiano.",
  },

  // 9. Abr '27 — Cinema Indiano (Parallel Cinema / Golden Age)
  {
    month: "Abril",
    year: "2027",
    season: "outono",
    movement: "Cinema Indiano (Parallel Cinema / Golden Age)",
    period: "1950s–1970s",
    context:
      "Do melodrama de Bollywood às vozes cruas do Parallel Cinema (Satyajit Ray, Ritwik Ghatak), o cinema indiano oferece narrativas ricas, realismo social e estética própria.",
    directors: ["Satyajit Ray", "Ritwik Ghatak", "Mrinal Sen", "Guru Dutt"],
    refs: [
      {
        label: "Wikipedia — Indian Parallel Cinema",
        url: "https://en.wikipedia.org/wiki/Indian_new_wave_(cinema)",
      },
    ],
    films: [
      {
        title: "A Canção da Estrada (Pather Panchali)",
        director: "Satyajit Ray",
        year: 1955,
        type: "núcleo",
      },
      {
        title: "Sahib Bibi Aur Ghulam",
        director: "Bimal Roy",
        year: 1962,
        type: "núcleo",
      },
      { title: "Pyaasa", director: "Guru Dutt", year: 1957, type: "núcleo" },
      {
        title: "Meghe Dhaka Tara",
        director: "Ritwik Ghatak",
        year: 1960,
        type: "núcleo",
      },
      {
        title: "Charulata",
        director: "Satyajit Ray",
        year: 1964,
        type: "complementar",
      },
      {
        title: "The Music Room",
        director: "Satyajit Ray",
        year: 1958,
        type: "complementar",
      },
      {
        title: "Bhuvan Shome",
        director: "Mrinal Sen",
        year: 1969,
        type: "complementar",
      },
      {
        title: "Guide",
        director: "V. Shantaram",
        year: 1965,
        type: "complementar",
      },
    ],
    weeks: [
      ["A Canção da Estrada (Pather Panchali)", "Sahib Bibi Aur Ghulam"],
      ["Pyaasa", "Meghe Dhaka Tara"],
      ["Charulata", "The Music Room"],
      ["Bhuvan Shome", "Guide"],
    ],
    connection: "→ Maio '27: Cinema Iraniano.",
  },

  // 10. Mai '27 — Cinema Iraniano (Nova Onda Iraniana)
  {
    month: "Maio",
    year: "2027",
    season: "outono",
    movement: "Cinema Iraniano (Nova Onda Iraniana)",
    period: "1969–1980s",
    context:
      "A Nova Onda Iraniana traz formalismo poético e subtexto social: Kiarostami, Foroughi e Makhmalbaf usam estilos austeros para contar histórias intimistas e políticas.",
    directors: [
      "Abbas Kiarostami",
      "Mohsen Makhmalbaf",
      "Bahram Beyzai",
      "Forough Farrokhzad",
    ],
    refs: [
      {
        label: "Wikipedia — Iranian New Wave",
        url: "https://en.wikipedia.org/wiki/Iranian_new_wave",
      },
    ],
    films: [
      {
        title: "Através das Oliveiras",
        director: "Abbas Kiarostami",
        year: 1994,
        type: "núcleo",
      },
      {
        title: "Where Is the Friend's House?",
        director: "Abbas Kiarostami",
        year: 1987,
        type: "núcleo",
      },
      {
        title: "O Círculo",
        director: "Jafar Panahi",
        year: 2000,
        type: "núcleo",
      },
      {
        title: "A Pedra da Criança",
        director: "Mohsen Makhmalbaf",
        year: 1999,
        type: "complementar",
      },
      {
        title: "The Cow",
        director: "Dariush Mehrjui",
        year: 1969,
        type: "complementar",
      },
      {
        title: "The House is Black",
        director: "Forough Farrokhzad",
        year: 1963,
        type: "complementar",
      },
      {
        title: "Close-Up",
        director: "Abbas Kiarostami",
        year: 1990,
        type: "complementar",
      },
      {
        title: "A Taste of Cherry",
        director: "Abbas Kiarostami",
        year: 1997,
        type: "complementar",
      },
    ],
    weeks: [
      ["Através das Oliveiras", "Where Is the Friend's House?"],
      ["The Cow", "The House is Black"],
      ["Close-Up", "A Pedra da Criança"],
      ["A Taste of Cherry", "O Círculo"],
    ],
    connection: "→ Junho '27: Foco em Diretor: Alfred Hitchcock.",
  },

  // 11. Jun '27 — Foco em Diretor: Alfred Hitchcock
  {
    month: "Junho",
    year: "2027",
    season: "outono",
    movement: "Alfred Hitchcock",
    period: "1934–1963",
    context:
      "O mestre do suspense: câmera como manipulação psicológica, uso do MacGuffin e construção metódica do medo.",
    directors: ["Alfred Hitchcock"],
    refs: [
      {
        label: "Wikipedia — Alfred Hitchcock",
        url: "https://en.wikipedia.org/wiki/Alfred_Hitchcock",
      },
    ],
    films: [
      { title: "Rebecca", director: "Hitchcock", year: 1940, type: "núcleo" },
      {
        title: "Janela Indiscreta",
        director: "Hitchcock",
        year: 1954,
        type: "núcleo",
      },
      {
        title: "Intriga Internacional",
        director: "Hitchcock",
        year: 1959,
        type: "núcleo",
      },
      {
        title: "A Sombra de uma Dúvida",
        director: "Hitchcock",
        year: 1943,
        type: "núcleo",
      },
      {
        title: "Os Pássaros",
        director: "Hitchcock",
        year: 1963,
        type: "complementar",
      },
      {
        title: "Frenzy",
        director: "Hitchcock",
        year: 1972,
        type: "complementar",
      },
      {
        title: "Marnie",
        director: "Hitchcock",
        year: 1964,
        type: "complementar",
      },
      {
        title: "O Caso Paradine",
        director: "Hitchcock",
        year: 1947,
        type: "complementar",
      },
    ],
    weeks: [
      ["Rebecca", "Janela Indiscreta"],
      ["Intriga Internacional", "A Sombra de uma Dúvida"],
      ["Os Pássaros", "Frenzy"],
      ["Marnie", "O Caso Paradine"],
    ],
    connection: "→ Julho '27: Foco em Diretor: Jean-Luc Godard.",
  },

  // 12. Jul '27 — Foco em Diretor: Jean-Luc Godard
  {
    month: "Julho",
    year: "2027",
    season: "inverno",
    movement: "Jean-Luc Godard",
    period: "1960s–1970s",
    context:
      "Um dos autores mais radicais do século XX: jump cuts, metalinguagem e revolução formal constante.",
    directors: ["Jean-Luc Godard"],
    refs: [
      {
        label: "Wikipedia — Jean-Luc Godard",
        url: "https://en.wikipedia.org/wiki/Jean-Luc_Godard",
      },
    ],
    films: [
      { title: "Vivre sa Vie", director: "Godard", year: 1962, type: "núcleo" },
      { title: "O Desprezo", director: "Godard", year: 1963, type: "núcleo" },
      {
        title: "Banda à Parte",
        director: "Godard",
        year: 1964,
        type: "núcleo",
      },
      { title: "Alphaville", director: "Godard", year: 1965, type: "núcleo" },
      {
        title: "Masculin Féminin",
        director: "Godard",
        year: 1966,
        type: "complementar",
      },
      {
        title: "A Chinesa",
        director: "Godard",
        year: 1967,
        type: "complementar",
      },
      {
        title: "Weekend",
        director: "Godard",
        year: 1967,
        type: "complementar",
      },
      {
        title: "Número Dois",
        director: "Godard",
        year: 1975,
        type: "complementar",
      },
    ],
    weeks: [
      ["Vivre sa Vie", "O Desprezo"],
      ["Banda à Parte", "Alphaville"],
      ["Masculin Féminin", "A Chinesa"],
      ["Weekend", "Número Dois"],
    ],
    connection: "→ Agosto '27: Foco em Diretor: Andrei Tarkovsky.",
  },

  // 13. Ago '27 — Foco em Diretor: Andrei Tarkovsky
  {
    month: "Agosto",
    year: "2027",
    season: "inverno",
    movement: "Andrei Tarkovsky",
    period: "1962–1986",
    context:
      "Escultura do tempo: planos longos, metáforas religiosas e memória como matéria cinematográfica.",
    directors: ["Andrei Tarkovsky"],
    refs: [
      {
        label: "Wikipedia — Andrei Tarkovsky",
        url: "https://en.wikipedia.org/wiki/Andrei_Tarkovsky",
      },
    ],
    films: [
      {
        title: "A Infância de Ivan",
        director: "Tarkovsky",
        year: 1962,
        type: "núcleo",
      },
      {
        title: "Andrei Rublev",
        director: "Tarkovsky",
        year: 1966,
        type: "núcleo",
      },
      { title: "Solaris", director: "Tarkovsky", year: 1972, type: "núcleo" },
      {
        title: "O Sacrifício",
        director: "Tarkovsky",
        year: 1986,
        type: "núcleo",
      },
      {
        title: "Stalker",
        director: "Tarkovsky",
        year: 1979,
        type: "complementar",
      },
      {
        title: "O Espelho",
        director: "Tarkovsky",
        year: 1975,
        type: "complementar",
      },
      {
        title: "Nostalgia",
        director: "Tarkovsky",
        year: 1983,
        type: "complementar",
      },
      {
        title: "Tempo de Viagem (doc)",
        director: "Tarkovsky / Tonino Guerra",
        year: 1983,
        type: "complementar",
      },
    ],
    weeks: [
      ["A Infância de Ivan", "Andrei Rublev"],
      ["Solaris", "O Sacrifício"],
      ["Stalker", "Nostalgia"],
      ["O Espelho", "Tempo de Viagem (doc)"],
    ],
    connection: "→ Setembro '27: Foco em Diretor: Stanley Kubrick.",
  },

  // 14. Set '27 — Foco em Diretor: Stanley Kubrick
  {
    month: "Setembro",
    year: "2027",
    season: "primavera",
    movement: "Stanley Kubrick",
    period: "1957–1999",
    context:
      "Controle absoluto da forma: cada elemento de mise-en-scène a serviço de um projeto estético frio e perturbador.",
    directors: ["Stanley Kubrick"],
    refs: [
      {
        label: "Wikipedia — Stanley Kubrick",
        url: "https://en.wikipedia.org/wiki/Stanley_Kubrick",
      },
    ],
    films: [
      {
        title: "Caminhos da Glória",
        director: "Kubrick",
        year: 1957,
        type: "núcleo",
      },
      {
        title: "Dr. Fantástico",
        director: "Kubrick",
        year: 1964,
        type: "núcleo",
      },
      {
        title: "2001: Uma Odisseia no Espaço",
        director: "Kubrick",
        year: 1968,
        type: "núcleo",
      },
      {
        title: "Laranja Mecânica",
        director: "Kubrick",
        year: 1971,
        type: "núcleo",
      },
      {
        title: "Lolita",
        director: "Kubrick",
        year: 1962,
        type: "complementar",
      },
      {
        title: "Barry Lyndon",
        director: "Kubrick",
        year: 1975,
        type: "complementar",
      },
      {
        title: "O Iluminado",
        director: "Kubrick",
        year: 1980,
        type: "complementar",
      },
      {
        title: "De Olhos Bem Fechados",
        director: "Kubrick",
        year: 1999,
        type: "complementar",
      },
    ],
    weeks: [
      ["Caminhos da Glória", "Dr. Fantástico"],
      ["2001: Uma Odisseia no Espaço", "Laranja Mecânica"],
      ["Lolita", "Barry Lyndon"],
      ["O Iluminado", "De Olhos Bem Fechados"],
    ],
    connection: "→ Fim do Ciclo: 14 meses. Boa jornada.",
  },
];

export default ano1;
