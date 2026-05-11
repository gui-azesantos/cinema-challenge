import { Month } from "./ano1";

const ano2: Month[] = [
  {
    month: "Agosto",
    year: "2027",
    season: "inverno",
    movement: "Alfred Hitchcock",
    period: "1934–1963",
    context:
      "O mestre absoluto da linguagem cinematográfica. Hitchcock não filma histórias — filma o medo, a culpa e o desejo de quem assiste. Inventou o suspense como distinção teórica, usou o MacGuffin como motor narrativo e transformou a câmera em instrumento de manipulação psicológica pura. Os Cahiers du Cinéma o elevaram a autor máximo — e a Nouvelle Vague inteira nasceu dessa leitura.",
    directors: ["Alfred Hitchcock"],
    refs: [
      {
        label: "Wikipedia — Alfred Hitchcock",
        url: "https://en.wikipedia.org/wiki/Alfred_Hitchcock",
      },
      {
        label: "YouTube — Hitchcock/Truffaut (documentário)",
        url: "https://www.youtube.com/watch?v=b_TLkCYiIY0",
      },
      {
        label: "YouTube — Every Frame a Painting: Hitchcock",
        url: "https://www.youtube.com/watch?v=3we3_b0AF9A",
      },
    ],
    films: [
      { title: "Rebecca", director: "Hitchcock", year: 1940, type: "núcleo" },
      { title: "Sabotador", director: "Hitchcock", year: 1942, type: "núcleo" },
      {
        title: "Janela Indiscreta",
        director: "Hitchcock",
        year: 1954,
        type: "núcleo",
      },
      {
        title: "O Homem Errado",
        director: "Hitchcock",
        year: 1956,
        type: "núcleo",
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
      {
        title: "Sob o Signo de Capricórnio",
        director: "Hitchcock",
        year: 1949,
        type: "complementar",
      },
    ],
    weeks: [
      ["Rebecca", "Sabotador"],
      ["Janela Indiscreta", "O Homem Errado"],
      ["Frenzy", "Marnie"],
      ["O Caso Paradine", "Sob o Signo de Capricórnio"],
    ],
    connection:
      "→ Setembro: Kubrick — o outro mestre do controle total. Onde Hitchcock manipula pelo suspense, Kubrick manipula pela forma fria e pela desumanização.",
  },
  {
    month: "Setembro",
    year: "2027",
    season: "primavera",
    movement: "Stanley Kubrick",
    period: "1957–1999",
    context:
      "Kubrick é o diretor do controle absoluto: cada plano, cada movimento de câmera, cada nota de trilha é calculada para produzir um efeito específico no espectador. Não tem gênero fixo — passa do filme de guerra ao horror ao épico histórico com a mesma frieza analítica. A câmera não observa os personagens: os disseca.",
    directors: ["Stanley Kubrick"],
    refs: [
      {
        label: "Wikipedia — Stanley Kubrick",
        url: "https://en.wikipedia.org/wiki/Stanley_Kubrick",
      },
      {
        label: "YouTube — Stanley Kubrick: A Life in Pictures (doc)",
        url: "https://www.youtube.com/watch?v=rXA3bJIBpDE",
      },
      {
        label: "YouTube — How Kubrick Tells a Story (Nerdwriter1)",
        url: "https://www.youtube.com/watch?v=g6Gj_bgY1WY",
      },
    ],
    films: [
      {
        title: "Caminhos da Glória",
        director: "Kubrick",
        year: 1957,
        type: "núcleo",
      },
      { title: "Lolita", director: "Kubrick", year: 1962, type: "núcleo" },
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
      ["Caminhos da Glória", "Lolita"],
      ["Dr. Fantástico", "2001: Uma Odisseia no Espaço"],
      ["Laranja Mecânica", "Barry Lyndon"],
      ["O Iluminado", "De Olhos Bem Fechados"],
    ],
    connection:
      "→ Outubro: Bergman — o polo oposto de Kubrick. Onde Kubrick é frio e arquitetônico, Bergman é íntimo e teológico. Os dois são obcecados com a morte.",
  },
  {
    month: "Outubro",
    year: "2027",
    season: "primavera",
    movement: "Ingmar Bergman",
    period: "1953–2003",
    context:
      "Bergman é o cineasta que levou mais longe a pergunta sobre Deus, a morte e a incomunicabilidade humana. Sua obra é um sistema filosófico sustentado por atores extraordinários — Liv Ullmann e Max von Sydow são extensões de sua visão. O rosto humano em close é seu plano preferido: nele cabem toda angústia e toda beleza.",
    directors: ["Ingmar Bergman"],
    refs: [
      {
        label: "Wikipedia — Ingmar Bergman",
        url: "https://en.wikipedia.org/wiki/Ingmar_Bergman",
      },
      {
        label: "YouTube — Bergman's Silence of God Trilogy",
        url: "https://www.youtube.com/watch?v=Kqd_4Kw1ViM",
      },
    ],
    films: [
      {
        title: "O Sétimo Selo",
        director: "Bergman",
        year: 1957,
        type: "núcleo",
      },
      {
        title: "Como num Espelho",
        director: "Bergman",
        year: 1961,
        type: "núcleo",
      },
      { title: "O Silêncio", director: "Bergman", year: 1963, type: "núcleo" },
      {
        title: "Cenas de um Casamento",
        director: "Bergman",
        year: 1973,
        type: "núcleo",
      },
      {
        title: "A Hora do Lobo",
        director: "Bergman",
        year: 1968,
        type: "complementar",
      },
      {
        title: "A Vergonha",
        director: "Bergman",
        year: 1968,
        type: "complementar",
      },
      {
        title: "Fanny e Alexander",
        director: "Bergman",
        year: 1982,
        type: "complementar",
      },
      {
        title: "Saraband",
        director: "Bergman",
        year: 2003,
        type: "complementar",
      },
    ],
    weeks: [
      ["O Sétimo Selo", "Como num Espelho"],
      ["O Silêncio", "Cenas de um Casamento"],
      ["A Hora do Lobo", "A Vergonha"],
      ["Fanny e Alexander", "Saraband"],
    ],
    connection:
      "→ Novembro: Fellini — de Bergman ao seu oposto italiano. Onde Bergman é austeridade e angústia protestante, Fellini é excesso, carnaval e nostalgia católica.",
  },
  {
    month: "Novembro",
    year: "2027",
    season: "primavera",
    movement: "Federico Fellini",
    period: "1953–1990",
    context:
      "Fellini dissolve sistematicamente a fronteira entre memória, sonho e espetáculo. Seus filmes não têm enredo no sentido clássico — têm atmosfera, textura, rostos. 8½ é o mais auto-referencial da história do cinema: um diretor que não consegue fazer seu filme fazendo seu filme. A Dolce Vita inventou o conceito de paparazzi e definiu uma geração inteira.",
    directors: ["Federico Fellini"],
    refs: [
      {
        label: "Wikipedia — Federico Fellini",
        url: "https://en.wikipedia.org/wiki/Federico_Fellini",
      },
      {
        label: "YouTube — Fellini: I'm a Born Liar (doc)",
        url: "https://www.youtube.com/watch?v=J9_VXQP0VjQ",
      },
    ],
    films: [
      { title: "I Vitelloni", director: "Fellini", year: 1953, type: "núcleo" },
      { title: "La Strada", director: "Fellini", year: 1954, type: "núcleo" },
      {
        title: "A Dolce Vita",
        director: "Fellini",
        year: 1960,
        type: "núcleo",
      },
      {
        title: "Julieta dos Espíritos",
        director: "Fellini",
        year: 1965,
        type: "núcleo",
      },
      {
        title: "Os Palhaços",
        director: "Fellini",
        year: 1970,
        type: "complementar",
      },
      { title: "Roma", director: "Fellini", year: 1972, type: "complementar" },
      {
        title: "Casanova de Fellini",
        director: "Fellini",
        year: 1976,
        type: "complementar",
      },
      {
        title: "E la Nave Va",
        director: "Fellini",
        year: 1983,
        type: "complementar",
      },
    ],
    weeks: [
      ["I Vitelloni", "La Strada"],
      ["A Dolce Vita", "Julieta dos Espíritos"],
      ["Os Palhaços", "Roma"],
      ["Casanova de Fellini", "E la Nave Va"],
    ],
    connection:
      "→ Dezembro: Antonioni — o contemporâneo de Fellini que faz o oposto estético. Onde Fellini transborda, Antonioni esvazia.",
  },
  {
    month: "Dezembro",
    year: "2027",
    season: "verão",
    movement: "Michelangelo Antonioni",
    period: "1955–1982",
    context:
      "Antonioni é o cineasta da alienação moderna. Seus personagens não conseguem se comunicar — não por falta de palavras, mas porque a linguagem humana é insuficiente para o vazio que sentem. A Trilogia da Incomunicabilidade (A Aventura, A Noite, Eclipse) define o cinema modernista europeu.",
    directors: ["Michelangelo Antonioni"],
    refs: [
      {
        label: "Wikipedia — Michelangelo Antonioni",
        url: "https://en.wikipedia.org/wiki/Michelangelo_Antonioni",
      },
      {
        label: "YouTube — Antonioni and the Architecture of Emptiness",
        url: "https://www.youtube.com/watch?v=5oRQnJSqXeU",
      },
    ],
    films: [
      { title: "A Noite", director: "Antonioni", year: 1961, type: "núcleo" },
      {
        title: "O Deserto Vermelho",
        director: "Antonioni",
        year: 1964,
        type: "núcleo",
      },
      { title: "Blow-Up", director: "Antonioni", year: 1966, type: "núcleo" },
      {
        title: "O Passageiro",
        director: "Antonioni",
        year: 1975,
        type: "núcleo",
      },
      {
        title: "Zabriskie Point",
        director: "Antonioni",
        year: 1970,
        type: "complementar",
      },
      {
        title: "A Amiga",
        director: "Antonioni",
        year: 1955,
        type: "complementar",
      },
      {
        title: "O Grito",
        director: "Antonioni",
        year: 1957,
        type: "complementar",
      },
      {
        title: "Identificação de uma Mulher",
        director: "Antonioni",
        year: 1982,
        type: "complementar",
      },
    ],
    weeks: [
      ["A Noite", "O Deserto Vermelho"],
      ["Blow-Up", "O Passageiro"],
      ["Zabriskie Point", "O Grito"],
      ["A Amiga", "Identificação de uma Mulher"],
    ],
    connection:
      "→ Janeiro: Buñuel — o surrealista que nunca parou. O único diretor com obra-prima em quatro décadas e três países.",
  },
  {
    month: "Janeiro",
    year: "2028",
    season: "verão",
    movement: "Luis Buñuel",
    period: "1929–1977",
    context:
      "Buñuel é o grande iconoclasta do cinema. Começa com Dalí no surrealismo puro (Um Cão Andaluz, 1929), passa pelo realismo social mexicano nos anos 50 e chega à sua fase francesa mais refinada nos anos 60–70. Em todos os períodos, o alvo é o mesmo: a burguesia, a Igreja e a moral sexual.",
    directors: ["Luis Buñuel"],
    refs: [
      {
        label: "Wikipedia — Luis Buñuel",
        url: "https://en.wikipedia.org/wiki/Luis_Bu%C3%B1uel",
      },
      {
        label: "YouTube — Buñuel: The Discreet Charm of Cinema",
        url: "https://www.youtube.com/watch?v=8VgFIoV_hG8",
      },
    ],
    films: [
      {
        title: "Um Cão Andaluz",
        director: "Buñuel / Dalí",
        year: 1929,
        type: "núcleo",
      },
      {
        title: "Los Olvidados",
        director: "Buñuel",
        year: 1950,
        type: "núcleo",
      },
      { title: "Viridiana", director: "Buñuel", year: 1961, type: "núcleo" },
      {
        title: "O Anjo Exterminador",
        director: "Buñuel",
        year: 1962,
        type: "núcleo",
      },
      {
        title: "Belle de Jour",
        director: "Buñuel",
        year: 1967,
        type: "complementar",
      },
      {
        title: "O Charme Discreto da Burguesia",
        director: "Buñuel",
        year: 1972,
        type: "complementar",
      },
      {
        title: "O Fantasma da Liberdade",
        director: "Buñuel",
        year: 1974,
        type: "complementar",
      },
      {
        title: "Esse Obscuro Objeto do Desejo",
        director: "Buñuel",
        year: 1977,
        type: "complementar",
      },
    ],
    weeks: [
      ["Um Cão Andaluz", "Los Olvidados"],
      ["Viridiana", "O Anjo Exterminador"],
      ["Belle de Jour", "O Charme Discreto da Burguesia"],
      ["O Fantasma da Liberdade", "Esse Obscuro Objeto do Desejo"],
    ],
    connection:
      "→ Fevereiro: Bresson — o minimalismo absoluto. Onde Buñuel é iconoclasta e provocador, Bresson é monástico e espiritual.",
  },
  {
    month: "Fevereiro",
    year: "2028",
    season: "verão",
    movement: "Robert Bresson",
    period: "1943–1983",
    context:
      "Bresson é o cineasta mais radical da história em termos de método. Usava não-atores — chamava-os de 'modelos' — e proibia qualquer expressão dramática. O resultado é um cinema de presença pura, onde o espiritual emerge do mais banal. Tarkovsky o considerava o maior de todos os diretores. Ler Notas sobre o Cinematógrafo em paralelo é obrigatório.",
    directors: ["Robert Bresson"],
    refs: [
      {
        label: "Wikipedia — Robert Bresson",
        url: "https://en.wikipedia.org/wiki/Robert_Bresson",
      },
      {
        label: "YouTube — Robert Bresson: The Cinematographer's Style",
        url: "https://www.youtube.com/watch?v=1oiQ0KBuRes",
      },
    ],
    films: [
      {
        title: "Um Condenado à Morte Escapou",
        director: "Bresson",
        year: 1956,
        type: "núcleo",
      },
      { title: "Pickpocket", director: "Bresson", year: 1959, type: "núcleo" },
      {
        title: "Au Hasard Balthazar",
        director: "Bresson",
        year: 1966,
        type: "núcleo",
      },
      { title: "Mouchette", director: "Bresson", year: 1967, type: "núcleo" },
      {
        title: "O Diário de um Pároco de Aldeia",
        director: "Bresson",
        year: 1951,
        type: "complementar",
      },
      {
        title: "Lancelot do Lago",
        director: "Bresson",
        year: 1974,
        type: "complementar",
      },
      {
        title: "O Diabo Provavelmente",
        director: "Bresson",
        year: 1977,
        type: "complementar",
      },
      {
        title: "O Dinheiro",
        director: "Bresson",
        year: 1983,
        type: "complementar",
      },
    ],
    weeks: [
      ["Um Condenado à Morte Escapou", "Pickpocket"],
      ["Au Hasard Balthazar", "Mouchette"],
      ["O Diário de um Pároco de Aldeia", "Lancelot do Lago"],
      ["O Diabo Provavelmente", "O Dinheiro"],
    ],
    connection:
      "→ Março: Cassavetes — do cinema monástico de Bresson ao oposto americano: máxima expressão emocional, improvisação, câmera instável.",
  },
  {
    month: "Março",
    year: "2028",
    season: "outono",
    movement: "John Cassavetes",
    period: "1959–1984",
    context:
      "Cassavetes é o pai do cinema independente americano. Financiava seus filmes com o cachê de ator em Hollywood e filmava com amigos, câmera na mão, sem roteiro fixo. O resultado é cinema de uma intimidade brutal — os personagens gritam, choram, mentem e se amam com uma intensidade que o sistema nunca permitiu.",
    directors: ["John Cassavetes"],
    refs: [
      {
        label: "Wikipedia — John Cassavetes",
        url: "https://en.wikipedia.org/wiki/John_Cassavetes",
      },
      {
        label: "YouTube — Cassavetes: The Indie Pioneer",
        url: "https://www.youtube.com/watch?v=Xl4BRfQxHlo",
      },
    ],
    films: [
      { title: "Shadows", director: "Cassavetes", year: 1959, type: "núcleo" },
      { title: "Maridos", director: "Cassavetes", year: 1970, type: "núcleo" },
      {
        title: "Uma Mulher sob Influência",
        director: "Cassavetes",
        year: 1974,
        type: "núcleo",
      },
      {
        title: "A Morte de um Burocrata",
        director: "Cassavetes",
        year: 1976,
        type: "núcleo",
      },
      {
        title: "Too Late Blues",
        director: "Cassavetes",
        year: 1961,
        type: "complementar",
      },
      {
        title: "Minnie e Moskowitz",
        director: "Cassavetes",
        year: 1971,
        type: "complementar",
      },
      {
        title: "O Assassinato de um Corretor Chinês",
        director: "Cassavetes",
        year: 1976,
        type: "complementar",
      },
      {
        title: "Gloria",
        director: "Cassavetes",
        year: 1980,
        type: "complementar",
      },
    ],
    weeks: [
      ["Shadows", "Maridos"],
      ["Uma Mulher sob Influência", "A Morte de um Burocrata"],
      ["Too Late Blues", "Minnie e Moskowitz"],
      ["O Assassinato de um Corretor Chinês", "Gloria"],
    ],
    connection:
      "→ Abril: Pasolini — do cinema independente americano ao marxismo poético italiano. Pasolini usa o cinema como arma política e o corpo como linguagem.",
  },
  {
    month: "Abril",
    year: "2028",
    season: "outono",
    movement: "Pier Paolo Pasolini",
    period: "1961–1975",
    context:
      "Pasolini é o intelectual mais incendiário do cinema italiano. Marxista, homossexual, católico heterodoxo — usava essas contradições como combustível criativo. Seus filmes oscilam entre o realismo dos subúrbios romanos, a mitologia grega filmada em paisagens africanas e a provocação política extrema. Foi assassinado em 1975 em circunstâncias nunca completamente esclarecidas.",
    directors: ["Pier Paolo Pasolini"],
    refs: [
      {
        label: "Wikipedia — Pier Paolo Pasolini",
        url: "https://en.wikipedia.org/wiki/Pier_Paolo_Pasolini",
      },
      {
        label: "YouTube — Pasolini: The Poet of Contamination",
        url: "https://www.youtube.com/watch?v=d1DJBWMmQVw",
      },
    ],
    films: [
      { title: "Accattone", director: "Pasolini", year: 1961, type: "núcleo" },
      {
        title: "O Evangelho Segundo Mateus",
        director: "Pasolini",
        year: 1964,
        type: "núcleo",
      },
      { title: "Édipo Rei", director: "Pasolini", year: 1967, type: "núcleo" },
      { title: "Teorema", director: "Pasolini", year: 1968, type: "núcleo" },
      {
        title: "Medeia",
        director: "Pasolini",
        year: 1969,
        type: "complementar",
      },
      {
        title: "O Decamerão",
        director: "Pasolini",
        year: 1971,
        type: "complementar",
      },
      {
        title: "As Mil e Uma Noites",
        director: "Pasolini",
        year: 1974,
        type: "complementar",
      },
      { title: "Salò", director: "Pasolini", year: 1975, type: "complementar" },
    ],
    weeks: [
      ["Accattone", "O Evangelho Segundo Mateus"],
      ["Édipo Rei", "Teorema"],
      ["Medeia", "O Decamerão"],
      ["As Mil e Uma Noites", "Salò"],
    ],
    connection:
      "→ Maio: Truffaut — do cinema como violência política ao cinema como amor. Truffaut é o mais humanista da Nouvelle Vague.",
  },
  {
    month: "Maio",
    year: "2028",
    season: "outono",
    movement: "François Truffaut",
    period: "1959–1983",
    context:
      "Truffaut é o cineasta da ternura. Onde Godard é intelectual e combativo, Truffaut é sentimental e autobiográfico. Antoine Doinel — alter ego que aparece em cinco filmes ao longo de 20 anos — é um dos grandes personagens do cinema moderno. Truffaut amava Hitchcock, Renoir e a literatura: seus filmes são cartas de amor ao cinema e à infância.",
    directors: ["François Truffaut"],
    refs: [
      {
        label: "Wikipedia — François Truffaut",
        url: "https://en.wikipedia.org/wiki/Fran%C3%A7ois_Truffaut",
      },
      {
        label: "YouTube — Truffaut and the Cinema of Tenderness",
        url: "https://www.youtube.com/watch?v=6uxDMQf5Dso",
      },
    ],
    films: [
      {
        title: "Atirem no Pianista",
        director: "Truffaut",
        year: 1960,
        type: "núcleo",
      },
      {
        title: "Antoine e Colette",
        director: "Truffaut",
        year: 1962,
        type: "núcleo",
      },
      {
        title: "A Noiva Estava de Preto",
        director: "Truffaut",
        year: 1968,
        type: "núcleo",
      },
      {
        title: "O Quarto Verde",
        director: "Truffaut",
        year: 1978,
        type: "núcleo",
      },
      {
        title: "Beijos Proibidos",
        director: "Truffaut",
        year: 1968,
        type: "complementar",
      },
      {
        title: "Domicílio Conjugal",
        director: "Truffaut",
        year: 1970,
        type: "complementar",
      },
      {
        title: "A História de Adèle H.",
        director: "Truffaut",
        year: 1975,
        type: "complementar",
      },
      {
        title: "O Amor em Fuga",
        director: "Truffaut",
        year: 1979,
        type: "complementar",
      },
    ],
    weeks: [
      ["Atirem no Pianista", "Antoine e Colette"],
      ["A Noiva Estava de Preto", "O Quarto Verde"],
      ["Beijos Proibidos", "Domicílio Conjugal"],
      ["A História de Adèle H.", "O Amor em Fuga"],
    ],
    connection:
      "→ Junho: Varda & Akerman — as duas mulheres que redefiniriam o que o cinema pode dizer sobre existência, corpo e memória.",
  },
  {
    month: "Junho",
    year: "2028",
    season: "outono",
    movement: "Agnès Varda & Chantal Akerman",
    period: "1955–2015",
    context:
      "Dois universos distintos, uma mesma recusa: ao olhar masculino, à narrativa de causa e efeito, ao cinema como espetáculo. Varda é memória, espaço, afeto. Akerman é duração, corpo, silêncio político. Ambas influenciam todo o cinema de observação contemporâneo.",
    directors: ["Agnès Varda", "Chantal Akerman"],
    refs: [
      {
        label: "Wikipedia — Agnès Varda",
        url: "https://en.wikipedia.org/wiki/Agn%C3%A8s_Varda",
      },
      {
        label: "Wikipedia — Chantal Akerman",
        url: "https://en.wikipedia.org/wiki/Chantal_Akerman",
      },
      {
        label: "YouTube — Varda by Agnès (doc)",
        url: "https://www.youtube.com/watch?v=y3GGlXFhMT8",
      },
    ],
    films: [
      {
        title: "La Pointe Courte",
        director: "Varda",
        year: 1955,
        type: "núcleo",
      },
      {
        title: "Sem Teto Nem Lei",
        director: "Varda",
        year: 1985,
        type: "núcleo",
      },
      {
        title: "Visages Villages",
        director: "Varda / JR",
        year: 2017,
        type: "núcleo",
      },
      { title: "D'Est", director: "Akerman", year: 1993, type: "núcleo" },
      {
        title: "Jacquot de Nantes",
        director: "Varda",
        year: 1991,
        type: "complementar",
      },
      {
        title: "As Duas Faces da Faca",
        director: "Varda",
        year: 2000,
        type: "complementar",
      },
      {
        title: "Toute une Nuit",
        director: "Akerman",
        year: 1982,
        type: "complementar",
      },
      {
        title: "No Home Movie",
        director: "Akerman",
        year: 2015,
        type: "complementar",
      },
    ],
    weeks: [
      ["La Pointe Courte", "D'Est"],
      ["Sem Teto Nem Lei", "Visages Villages"],
      ["Jacquot de Nantes", "Toute une Nuit"],
      ["As Duas Faces da Faca", "No Home Movie"],
    ],
    connection:
      "→ Julho: Fassbinder — encerramento do Ano 2. O mais prolífico e perturbador dos autores europeus: 40 filmes em 13 anos.",
  },
  {
    month: "Julho",
    year: "2028",
    season: "inverno",
    movement: "Rainer Werner Fassbinder",
    period: "1969–1982",
    context:
      "Fassbinder fez 40 filmes em 13 anos antes de morrer aos 37. É o mais prolífico e o mais perturbador dos autores do Novo Cinema Alemão. Seus melodramas dissecam a hipocrisia da sociedade alemã do pós-guerra com uma crueldade que vem do amor — ele amava Douglas Sirk, Brecht e o cinema americano de gênero, e usou tudo isso contra a Alemanha.",
    directors: ["Rainer Werner Fassbinder"],
    refs: [
      {
        label: "Wikipedia — Rainer Werner Fassbinder",
        url: "https://en.wikipedia.org/wiki/Rainer_Werner_Fassbinder",
      },
      {
        label: "YouTube — Fassbinder: Love is Colder than Death (doc)",
        url: "https://www.youtube.com/watch?v=LTqfmXXbOOc",
      },
    ],
    films: [
      {
        title: "O Amor é Mais Frio que a Morte",
        director: "Fassbinder",
        year: 1969,
        type: "núcleo",
      },
      {
        title: "Katzelmacher",
        director: "Fassbinder",
        year: 1969,
        type: "núcleo",
      },
      {
        title: "As Lágrimas Amargas de Petra von Kant",
        director: "Fassbinder",
        year: 1972,
        type: "núcleo",
      },
      {
        title: "Berlin Alexanderplatz",
        director: "Fassbinder",
        year: 1980,
        type: "núcleo",
      },
      {
        title: "Lili Marleen",
        director: "Fassbinder",
        year: 1981,
        type: "complementar",
      },
      {
        title: "Lola",
        director: "Fassbinder",
        year: 1981,
        type: "complementar",
      },
      {
        title: "Veronika Voss",
        director: "Fassbinder",
        year: 1982,
        type: "complementar",
      },
      {
        title: "Querelle",
        director: "Fassbinder",
        year: 1982,
        type: "complementar",
      },
    ],
    weeks: [
      ["O Amor é Mais Frio que a Morte", "Katzelmacher"],
      ["As Lágrimas Amargas de Petra von Kant", "Berlin Alexanderplatz"],
      ["Lili Marleen", "Lola"],
      ["Veronika Voss", "Querelle"],
    ],
    connection:
      "→ Fim do Ano 2. 12 diretores, 12 meses. Próximo passo: Ano 3 com cinema asiático contemporâneo — Wong Kar-wai, Kiarostami, Park Chan-wook.",
  },
];

export default ano2;
