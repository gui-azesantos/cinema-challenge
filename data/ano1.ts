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
  {
    month: "Maio",
    year: "2026",
    season: "outono",
    movement: "Expressionismo Alemão",
    period: "1919–1933",
    context:
      "Ponto de partida de tudo. Nascido do trauma pós-WWI e da República de Weimar, o Expressionismo rejeita a representação realista em favor da exteriorização da psique. Cenários distorcidos, iluminação de alto contraste, sombras impossíveis. É o cinema do medo e da culpa — e o vocabulário visual que os emigrados alemães levarão para Hollywood nos anos 40, onde nasce o Film Noir.",
    directors: ["F.W. Murnau", "Fritz Lang", "Robert Wiene", "G.W. Pabst"],
    refs: [
      {
        label: "Wikipedia — German Expressionist Cinema",
        url: "https://en.wikipedia.org/wiki/German_expressionist_cinema",
      },
      {
        label: "YouTube — German Expressionism Explained",
        url: "https://www.youtube.com/watch?v=2A_nNuqsGMI",
      },
    ],
    films: [
      {
        title: "O Gabinete do Dr. Caligari",
        director: "Robert Wiene",
        year: 1920,
        type: "núcleo",
      },
      {
        title: "Nosferatu",
        director: "F.W. Murnau",
        year: 1922,
        type: "núcleo",
      },
      {
        title: "Metrópolis",
        director: "Fritz Lang",
        year: 1927,
        type: "núcleo",
      },
      {
        title: "M – O Vampiro de Düsseldorf",
        director: "Fritz Lang",
        year: 1931,
        type: "núcleo",
      },
      {
        title: "Fausto",
        director: "F.W. Murnau",
        year: 1926,
        type: "complementar",
      },
      {
        title: "O Último Homem",
        director: "F.W. Murnau",
        year: 1924,
        type: "complementar",
      },
      {
        title: "As Mãos de Orlac",
        director: "Robert Wiene",
        year: 1924,
        type: "complementar",
      },
      {
        title: "A Caixa de Pandora",
        director: "G.W. Pabst",
        year: 1929,
        type: "complementar",
      },
    ],
    weeks: [
      ["O Gabinete do Dr. Caligari", "Nosferatu"],
      ["Metrópolis", "M – O Vampiro de Düsseldorf"],
      ["Fausto", "O Último Homem"],
      ["As Mãos de Orlac", "A Caixa de Pandora"],
    ],
    connection:
      "→ Junho: em paralelo ao Expressionismo, a URSS constrói outra revolução — a montagem como teoria do pensamento.",
  },
  {
    month: "Junho",
    year: "2026",
    season: "outono",
    movement: "Cinema Soviético",
    period: "1924–1935",
    context:
      "A URSS revoluciona a linguagem com a teoria da montagem. Eisenstein propõe que dois planos justapostos geram um terceiro significado — cinema como pensamento puro. Vertov radicaliza: sem atores, sem ficção, só o olho mecânico sobre a vida. Compactado ao essencial — você vai precisar desse vocabulário para entender Tarkovsky e o debate que ele trava contra Eisenstein.",
    directors: [
      "Sergei Eisenstein",
      "Dziga Vertov",
      "Vsevolod Pudovkin",
      "Alexander Dovzhenko",
    ],
    refs: [
      {
        label: "Wikipedia — Soviet Montage Theory",
        url: "https://en.wikipedia.org/wiki/Soviet_montage_theory",
      },
      {
        label: "YouTube — Every Frame a Painting: Soviet Montage",
        url: "https://www.youtube.com/watch?v=OMp2hOTTCl4",
      },
    ],
    films: [
      {
        title: "O Encouraçado Potemkin",
        director: "Eisenstein",
        year: 1925,
        type: "núcleo",
      },
      { title: "A Greve", director: "Eisenstein", year: 1925, type: "núcleo" },
      {
        title: "O Homem com a Câmera",
        director: "Dziga Vertov",
        year: 1929,
        type: "núcleo",
      },
      {
        title: "A Mãe",
        director: "Vsevolod Pudovkin",
        year: 1926,
        type: "núcleo",
      },
      {
        title: "Outubro",
        director: "Eisenstein",
        year: 1928,
        type: "complementar",
      },
      {
        title: "Ivan, o Terrível – Parte I",
        director: "Eisenstein",
        year: 1944,
        type: "complementar",
      },
      {
        title: "A Terra",
        director: "Dovzhenko",
        year: 1930,
        type: "complementar",
      },
      {
        title: "Entusiasmo",
        director: "Vertov",
        year: 1931,
        type: "complementar",
      },
    ],
    weeks: [
      ["O Encouraçado Potemkin", "A Greve"],
      ["O Homem com a Câmera", "A Mãe"],
      ["Outubro", "A Terra"],
      ["Ivan, o Terrível – Parte I", "Entusiasmo"],
    ],
    connection:
      "→ Julho: Hollywood Clássico — os emigrados expressionistas chegam à América e constroem a linguagem narrativa dominante do século XX.",
  },
  {
    month: "Julho",
    year: "2026",
    season: "inverno",
    movement: "Hollywood Clássico",
    period: "1930–1955",
    context:
      "A linguagem narrativa que o mundo inteiro absorveu como padrão: montagem invisível, raccord perfeito, personagem como motor da história. Welles subverte tudo isso em Cidadão Kane — mas de dentro do sistema. Ford constrói mitos americanos; Hawks define ritmo e gênero.",
    directors: [
      "Orson Welles",
      "John Ford",
      "Howard Hawks",
      "William Wyler",
      "Billy Wilder",
    ],
    refs: [
      {
        label: "Wikipedia — Classical Hollywood Cinema",
        url: "https://en.wikipedia.org/wiki/Classical_Hollywood_cinema",
      },
      {
        label: "YouTube — How Orson Welles Changed Cinema",
        url: "https://www.youtube.com/watch?v=8ToUSgWHBFo",
      },
    ],
    films: [
      {
        title: "A Marca da Maldade",
        director: "Orson Welles",
        year: 1958,
        type: "núcleo",
      },
      {
        title: "Rio Vermelho",
        director: "Howard Hawks",
        year: 1948,
        type: "núcleo",
      },
      {
        title: "Rastros de Ódio",
        director: "John Ford",
        year: 1956,
        type: "núcleo",
      },
      {
        title: "Os Melhores Anos de Nossas Vidas",
        director: "William Wyler",
        year: 1946,
        type: "núcleo",
      },
      {
        title: "No Desfiladeiro da Morte",
        director: "John Ford",
        year: 1946,
        type: "complementar",
      },
      {
        title: "A Malvada",
        director: "Joseph L. Mankiewicz",
        year: 1950,
        type: "complementar",
      },
      {
        title: "Quanto Mais Quente Melhor",
        director: "Billy Wilder",
        year: 1959,
        type: "complementar",
      },
      {
        title: "O Pecado Mora ao Lado",
        director: "Billy Wilder",
        year: 1955,
        type: "complementar",
      },
    ],
    weeks: [
      ["A Marca da Maldade", "Rio Vermelho"],
      ["Rastros de Ódio", "Os Melhores Anos de Nossas Vidas"],
      ["No Desfiladeiro da Morte", "A Malvada"],
      ["Quanto Mais Quente Melhor", "O Pecado Mora ao Lado"],
    ],
    connection:
      "→ Agosto: Film Noir — a sombra do Hollywood Clássico. Os emigrados expressionistas reimportam a gramática do medo alemão para as ruas americanas.",
  },
  {
    month: "Agosto",
    year: "2026",
    season: "inverno",
    movement: "Film Noir",
    period: "1941–1958",
    context:
      "O Film Noir não é um gênero — é um estilo, um estado de espírito. Emigrados alemães fogem do nazismo e chegam a Hollywood carregando o Expressionismo: Fritz Lang, Billy Wilder, Robert Siodmak. O resultado é único: a fatalidade e as sombras de Weimar aplicadas ao submundo americano. Protagonistas condenados, femmes fatales, narração em voz off, iluminação de veneziana.",
    directors: [
      "Billy Wilder",
      "Fritz Lang",
      "Robert Siodmak",
      "Otto Preminger",
      "Edgar G. Ulmer",
    ],
    refs: [
      {
        label: "Wikipedia — Film Noir",
        url: "https://en.wikipedia.org/wiki/Film_noir",
      },
      {
        label: "YouTube — What Makes a Movie Noir? (Nerdwriter1)",
        url: "https://www.youtube.com/watch?v=Q4yoJNqJzPs",
      },
      {
        label: "YouTube — Film Noir: Every Frame a Painting",
        url: "https://www.youtube.com/watch?v=4oGMJAHwJdM",
      },
    ],
    films: [
      {
        title: "Pacto de Sangue",
        director: "Billy Wilder",
        year: 1944,
        type: "núcleo",
      },
      {
        title: "A Mulher do Quadro",
        director: "Fritz Lang",
        year: 1944,
        type: "núcleo",
      },
      {
        title: "Os Assassinos",
        director: "Robert Siodmak",
        year: 1946,
        type: "núcleo",
      },
      {
        title: "Laura",
        director: "Otto Preminger",
        year: 1944,
        type: "núcleo",
      },
      {
        title: "A Morte Num Beijo",
        director: "Robert Aldrich",
        year: 1955,
        type: "complementar",
      },
      {
        title: "Detour",
        director: "Edgar G. Ulmer",
        year: 1945,
        type: "complementar",
      },
      {
        title: "Aos Olhos do Crime",
        director: "Fritz Lang",
        year: 1945,
        type: "complementar",
      },
      {
        title: "O Estranho",
        director: "Orson Welles",
        year: 1946,
        type: "complementar",
      },
    ],
    weeks: [
      ["Pacto de Sangue", "Laura"],
      ["A Mulher do Quadro", "Os Assassinos"],
      ["A Morte Num Beijo", "Detour"],
      ["Aos Olhos do Crime", "O Estranho"],
    ],
    connection:
      "→ Setembro: Neorrealismo Italiano — a reação europeia ao cinema de estúdio. Câmera na rua, escombros reais, dignidade dos pobres.",
  },
  {
    month: "Setembro",
    year: "2026",
    season: "primavera",
    movement: "Neorrealismo Italiano",
    period: "1943–1952",
    context:
      "Da ruína moral da Itália pós-WWII emerge um cinema de câmera na rua, atores não-profissionais e dignidade dos pobres. Uma reação direta ao cinema de estúdio: nada de cenários, nada de glamour. Rossellini filma entre escombros reais; De Sica encontra poesia no cotidiano operário. É a semente direta da Nouvelle Vague e do Cinema Novo Brasileiro.",
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
      "→ Outubro: Cinema Japonês Clássico — nos anos 50, Kurosawa e Ozu constroem um padrão de precisão formal em paralelo ao Neorrealismo.",
  },
  {
    month: "Outubro",
    year: "2026",
    season: "primavera",
    movement: "Cinema Japonês Clássico",
    period: "1948–1965",
    context:
      "Kurosawa e Ozu são antípodas perfeitos: um épico, dinâmico, shakespeariano; o outro contemplativo, doméstico, minimalista. Ozu inventou o plano-almofada e nunca moveu a câmera acima do nível do tatame. Mizoguchi completa o tríptico com sua câmera flutuante e seus retratos de mulheres.",
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
        label: "Wikipedia — Yasujiro Ozu",
        url: "https://en.wikipedia.org/wiki/Yasujir%C5%8D_Ozu",
      },
      {
        label: "YouTube — Ozu and the Grammar of Cinema (kogonada)",
        url: "https://www.youtube.com/watch?v=muBObMvQHrU",
      },
    ],
    films: [
      { title: "Viagem a Tóquio", director: "Ozu", year: 1953, type: "núcleo" },
      { title: "Ikiru", director: "Kurosawa", year: 1952, type: "núcleo" },
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
    connection:
      "→ Novembro: Politique des Auteurs — os Cahiers du Cinéma teorizam o cinema de autor e preparam o terreno intelectual para a Nouvelle Vague.",
  },
  {
    month: "Novembro",
    year: "2026",
    season: "primavera",
    movement: "Teoria do Autor — Cahiers du Cinéma",
    period: "1954–1959",
    context:
      "Antes de fazerem filmes, Godard, Truffaut, Chabrol, Rivette e Rohmer eram críticos. Na revista Cahiers du Cinéma, desenvolvem a politique des auteurs: a ideia de que o diretor é o autor do filme, como um romancista. Eles elevam Hitchcock, Hawks e Nicholas Ray à categoria de gênios. Esse mês inclui os filmes que eles estudavam — os objetos que definiram o movimento.",
    directors: [
      "Alfred Hitchcock",
      "Nicholas Ray",
      "Vincente Minnelli",
      "Douglas Sirk",
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
      {
        label: "YouTube — Hitchcock/Truffaut (documentário completo)",
        url: "https://www.youtube.com/watch?v=b_TLkCYiIY0",
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
    connection:
      "→ Dezembro: Nouvelle Vague — os críticos dos Cahiers pegam câmeras e vão para a rua. Tudo que você viu este mês é o que eles amavam e queriam transformar.",
  },
  {
    month: "Dezembro",
    year: "2026",
    season: "verão",
    movement: "Nouvelle Vague Francesa",
    period: "1958–1968",
    context:
      "A Nouvelle Vague explode. Os críticos dos Cahiers vão para a rua com câmeras leves, filme de baixo custo e atores não-convencionais. Câmera na mão, jump cuts, personagens que olham para a câmera, locações reais. Foco nos autores além de Godard: Truffaut, Chabrol, Rivette, Rohmer e Varda — cada um com uma voz completamente distinta.",
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
    connection:
      "→ Janeiro: Nouvelle Vague Japonesa — em paralelo à francesa, o Japão tem sua própria explosão de jovens diretores radicais no final dos anos 50.",
  },
  {
    month: "Janeiro",
    year: "2027",
    season: "verão",
    movement: "Nouvelle Vague Japonesa",
    period: "1959–1970",
    context:
      "Contemporânea à Nouvelle Vague francesa, a japonesa é ainda mais raivosa politicamente. Oshima, Imamura e Yoshida reagem contra o Japão da reconstrução, a memória da guerra e a moral burguesa. Onde Ozu era contemplação, Oshima é confronto. Culpa pós-Hiroshima, americanização forçada, repressão sexual.",
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
      {
        label: "Wikipedia — Nagisa Oshima",
        url: "https://en.wikipedia.org/wiki/Nagisa_%C5%8Oshima",
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
        year: 1960,
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
    connection:
      "→ Fevereiro: Godard fase inicial — agora que você conhece a Nouvelle Vague como movimento coletivo, é hora de mergulhar no autor mais radical dela.",
  },
  {
    month: "Fevereiro",
    year: "2027",
    season: "verão",
    movement: "Jean-Luc Godard — Fase Inicial",
    period: "1960–1964",
    context:
      "Godard merece um mês inteiro — separado do movimento coletivo. Sua fase inicial é onde ele inventa a linguagem: jump cuts, referências literárias na tela, personagens que falam ao espectador, trilha sonora que interrompe. Cada filme desse período é um manifesto diferente sobre o que o cinema pode ser.",
    directors: ["Jean-Luc Godard"],
    refs: [
      {
        label: "Wikipedia — Jean-Luc Godard",
        url: "https://en.wikipedia.org/wiki/Jean-Luc_Godard",
      },
      {
        label: "YouTube — Godard: The Image, the Word and the Sound",
        url: "https://www.youtube.com/watch?v=RO3g3PBWpIg",
      },
    ],
    films: [
      { title: "Vivre sa Vie", director: "Godard", year: 1962, type: "núcleo" },
      {
        title: "Banda à Parte",
        director: "Godard",
        year: 1964,
        type: "núcleo",
      },
      { title: "O Desprezo", director: "Godard", year: 1963, type: "núcleo" },
      { title: "Alphaville", director: "Godard", year: 1965, type: "núcleo" },
      {
        title: "Uma Mulher é uma Mulher",
        director: "Godard",
        year: 1961,
        type: "complementar",
      },
      {
        title: "Os Carabineiros",
        director: "Godard",
        year: 1963,
        type: "complementar",
      },
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
    ],
    weeks: [
      ["Vivre sa Vie", "O Desprezo"],
      ["Banda à Parte", "Alphaville"],
      ["Uma Mulher é uma Mulher", "Os Carabineiros"],
      ["Masculin Féminin", "A Chinesa"],
    ],
    connection:
      "→ Março: Cinema Novo Brasileiro — Glauber Rocha lê o Neorrealismo e a Nouvelle Vague pelo Brasil colonial.",
  },
  {
    month: "Março",
    year: "2027",
    season: "outono",
    movement: "Cinema Novo Brasileiro",
    period: "1960–1972",
    context:
      "Glauber Rocha cunha a estética da fome: uma câmera na mão e uma ideia na cabeça. O Cinema Novo é a resposta brasileira ao Neorrealismo e à Nouvelle Vague — mas com urgência política, misticismo nordestino e violência colonial. Agora que você conhece os movimentos que ele absorveu e subverteu, esses filmes ganham toda a sua dimensão.",
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
      {
        label: "YouTube — Glauber Rocha e a Estética da Fome",
        url: "https://www.youtube.com/watch?v=46CV_TzPOiI",
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
    connection:
      "→ Abril: Novo Cinema Alemão — nos anos 60, a Alemanha Ocidental tem sua própria Nouvelle Vague, liderada por Fassbinder, Herzog e Wenders.",
  },
  {
    month: "Abril",
    year: "2027",
    season: "outono",
    movement: "Novo Cinema Alemão",
    period: "1962–1982",
    context:
      "Em 1962, 26 cineastas alemães assinam o Manifesto de Oberhausen: 'O velho cinema está morto.' Fassbinder é o mais prolífico e perturbador — melodramas que dissecam a hipocrisia da sociedade alemã do pós-guerra. Herzog vai para os extremos: o impossível como método. Wenders faz road movies filosóficos sobre identidade e cultura americana.",
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
      {
        label: "YouTube — New German Cinema: Fassbinder, Herzog, Wenders",
        url: "https://www.youtube.com/watch?v=5hO6RCkFuEI",
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
    connection:
      "→ Maio: Tarkovsky — o russo que constrói em paralelo um sistema filosófico próprio sobre o tempo e a memória.",
  },
  {
    month: "Maio",
    year: "2027",
    season: "outono",
    movement: "Andrei Tarkovsky",
    period: "1962–1986",
    context:
      "Tarkovsky é um sistema filosófico coeso. Para ele, cinema é escultura do tempo — duração pura, não choque de planos. Em Esculpir o Tempo, escreve diretamente contra Eisenstein — que você viu em junho de 2025. Agora, depois de um ano inteiro de contexto, esses filmes têm camadas impossíveis de acessar sem o percurso que você fez.",
    directors: ["Andrei Tarkovsky"],
    refs: [
      {
        label: "Wikipedia — Andrei Tarkovsky",
        url: "https://en.wikipedia.org/wiki/Andrei_Tarkovsky",
      },
      {
        label: "YouTube — Tarkovsky: Sculpting Time (Kogonada)",
        url: "https://www.youtube.com/watch?v=3UOkpwMzFW8",
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
      { title: "O Espelho", director: "Tarkovsky", year: 1975, type: "núcleo" },
      { title: "Stalker", director: "Tarkovsky", year: 1979, type: "núcleo" },
      { title: "Nostalgia", director: "Tarkovsky", year: 1983, type: "núcleo" },
      {
        title: "O Sacrifício",
        director: "Tarkovsky",
        year: 1986,
        type: "núcleo",
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
      ["Solaris", "O Espelho"],
      ["Stalker", "Nostalgia"],
      ["O Sacrifício", "Tempo de Viagem (doc)"],
    ],
    connection:
      "→ Junho: Godard fase política — pós-1968, ele abandona a narrativa e faz cinema de confronto puro.",
  },
  {
    month: "Junho",
    year: "2027",
    season: "outono",
    movement: "Jean-Luc Godard — Fase Política",
    period: "1965–1972",
    context:
      "Pós-Maio de 1968, Godard dissolve o próprio nome no coletivo Dziga Vertov Group e faz cinema de confronto puro: sem narrativa, sem personagens, sem prazer estético. É cinema como panfleto, como análise marxista, como arma. Weekend (1967) é o filme-fronteira — depois dele, nada é igual.",
    directors: ["Jean-Luc Godard", "Jean-Pierre Gorin"],
    refs: [
      {
        label: "Wikipedia — Dziga Vertov Group",
        url: "https://en.wikipedia.org/wiki/Dziga_Vertov_Group",
      },
      {
        label: "YouTube — Godard's Political Cinema",
        url: "https://www.youtube.com/watch?v=2jlGjGBpNkM",
      },
    ],
    films: [
      { title: "Weekend", director: "Godard", year: 1967, type: "núcleo" },
      {
        title: "2 ou 3 Coisas que Eu Sei Dela",
        director: "Godard",
        year: 1967,
        type: "núcleo",
      },
      {
        title: "Vento do Leste",
        director: "Godard / Gorin",
        year: 1970,
        type: "núcleo",
      },
      {
        title: "Tudo Vai Bem",
        director: "Godard / Gorin",
        year: 1972,
        type: "núcleo",
      },
      {
        title: "A Chinesa",
        director: "Godard",
        year: 1967,
        type: "complementar",
      },
      {
        title: "Um Filme Como os Outros",
        director: "Godard",
        year: 1968,
        type: "complementar",
      },
      {
        title: "British Sounds",
        director: "Godard / Gorin",
        year: 1969,
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
      ["Weekend", "2 ou 3 Coisas que Eu Sei Dela"],
      ["Vento do Leste", "Tudo Vai Bem"],
      ["A Chinesa", "Um Filme Como os Outros"],
      ["British Sounds", "Número Dois"],
    ],
    connection:
      "→ Julho: New Hollywood — a geração americana que bebeu de Godard e do Neorrealismo e reinventou Hollywood a partir de 1967.",
  },
  {
    month: "Julho",
    year: "2027",
    season: "inverno",
    movement: "New Hollywood",
    period: "1967–1980",
    context:
      "Hollywood entra em colapso criativo no final dos anos 60 e uma geração que cresceu com Godard, o Neorrealismo e o Cinema Japonês reinventa o sistema por dentro: Scorsese, Coppola, Cassavetes, Altman. Filmes com personagens moralmente ambíguos, finais não-resolvidos e câmera documental. É a Nouvelle Vague em inglês.",
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
      {
        label: "YouTube — New Hollywood: The Last Great Era of American Film",
        url: "https://www.youtube.com/watch?v=A42ELMFKrFk",
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
    connection:
      "→ Fim do Ano 1. 15 movimentos, 15 meses. Da Alemanha de 1919 ao Hollywood de 1980 — um século de cinema com linha contínua.",
  },
];

export default ano1;
