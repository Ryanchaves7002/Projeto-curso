const livrosSemelhantes = {
  "As Crônicas de Nárnia": [
      { titulo: "O Acordo com o Rei Elfo" ,autor:"R.A. Salvatore" },
      { titulo: "Eragon" ,autor:"Christopher Paolini" },
      { titulo: "Senhor dos anéis",autor:" J.R.R. Tolkien" }
  ],
  "A Revolução dos Bichos":[
    { titulo: "Os Miseráveis", autor:"Victor Hugo" },
    { titulo: "O Morro dos ventos uivantes", autor:"Emily Brontë" },
  ],
  "Duna":[
     {titulo: "Eragon",autor:"Christopher Paolini" },
     {titulo: "Senhor dos anéis",autor:" J.R.R. Tolkien"}
  ],
  "O Acordo com o Rei Elfo": [
      { titulo: "As Crônicas de Nárnia", autor:"C.S. Lewis" },
      { titulo: "Eragon",autor:"Christopher Paolini" },
      { titulo: "Senhor dos anéis" ,autor:" J.R.R. Tolkien"}
  ],
  "Eragon": [
      { titulo: "As Crônicas de Nárnia",autor:"C.S. Lewis" },
      { titulo: "O Acordo com o Rei Elfo",autor:"R.A. Salvatore" },
      { titulo: "Senhor dos anéis",autor:" J.R.R. Tolkien" }
  ],
  "Senhor dos anéis": [
      { titulo: "As Crônicas de Nárnia", autor:"C.S. Lewis" },
      { titulo: "O Acordo com o Rei Elfo" ,autor:"R.A. Salvatore" },
      { titulo: "Eragon",autor:"Christopher Paolini"}
  ],
  "O Hobbit": [
      { titulo: "As Crônicas de Nárnia",autor:"C.S. Lewis" },
      { titulo: "O Acordo com o Rei Elfo" ,autor:"R.A. Salvatore" },
      { titulo: "Eragon",autor:"Christopher Paolini" }
  ],
  "A bússola de ouro": [
      { titulo: "As Crônicas de Nárnia",autor:"C.S. Lewis" },
      { titulo: "O Acordo com o Rei Elfo" ,autor:"R.A. Salvatore" },
      { titulo: "O Hobbit",autor:" J.R.R. Tolkien" }
  ],
  "A história sem fim": [
      { titulo: "A bússola de ouro" },
      { titulo: "As Crônicas de Nárnia",autor:"C.S. Lewis" },
      { titulo: "O Hobbit" ,autor:" J.R.R. Tolkien"}
  ],
  "Os filhos de Hurin": [
      { titulo: "O Hobbit",autor:" J.R.R. Tolkien" },
      { titulo: "As Crônicas de Nárnia",autor:"C.S. Lewis" },
      { titulo: "Senhor dos anéis" ,autor:" J.R.R. Tolkien"}
  ],
  "A ilha do tesouro": [
      { titulo: "O Hobbit",autor:" J.R.R. Tolkien"},
      { titulo: "A história sem fim" ,autor:"Michael Ende" },
      { titulo: "As Crônicas de Nárnia", autor:"C.S. Lewis" }
  ],
  "Volume 19 Attack on Titan":[
    { titulo: "Volume 4 de Demon Slayer",autor:"Koyoharu Gotouge" },
    { titulo: "Volume 1 Tokyo Ghoul", autor:"Sui Ishida" },
    { titulo: "Volume 16 Dragon Ball" , autor:"Akira Toriyama"}
  ],
  "Volume 3 de Gash Bell": [
      { titulo: "Volume 4 de Demon Slayer",autor:"Koyoharu Gotouge"  },
      { titulo: "Volume 1 Tokyo Ghoul", autor:"Sui Ishida" },
      { titulo: "Volume 16 Dragon Ball", autor:"Akira Toriyama" }
  ],
  "Volume 4 de Demon Slayer": [
      { titulo: "Volume 3 de Gash Bell" , autor :"Makoto Raiku"},
      { titulo: "Volume 1 Tokyo Ghoul", autor:"Sui Ishida" },
      { titulo: "Volume 16 Dragon Ball",autor:"Akira Toriyama" }
  ],
  "Volume 1 Tokyo Ghoul": [
      { titulo: "Volume 3 de Gash Bell", autor :"Makoto Raiku" },
      { titulo: "Volume 4 de Demon Slayer",autor:"Koyoharu Gotouge"  },
      { titulo: "Volume 16 Dragon Ball",autor:"Akira Toriyama" }
  ],
  "Volume 16 Dragon Ball": [
      { titulo: "Volume 3 de Gash Bell", autor :"Makoto Raiku" },
      { titulo: "Volume 4 de Demon Slayer" ,autor:"Koyoharu Gotouge" },
      { titulo: "Volume 57 de One Piece", autor:"Eichiro Oda" }
  ],
  "Volume 1 The Ghost in the Shell": [
      { titulo: "Volume 10 Neon Genesis Evangelion" ,autor:"Yoshiyuki Sadamoto"},
      { titulo: "Volume 1 Blame!", autor:"Tsutomu Nihei" },
      { titulo: "Akira",autor:"Katsuhiro Otomo" }
  ],
  "Volume 10 Neon Genesis Evangelion": [
      { titulo: "Volume 1 The Ghost in the Shell" },
      { titulo: "Volume 1 Blame!" ,autor:"Tsutomu Nihei" },
      { titulo: "Akira" ,autor:"Katsuhiro Otomo" }
  ],
  "Volume 1 Blame!": [
      { titulo: "Volume 1 The Ghost in the Shell" },
      { titulo: "Volume 10 Neon Genesis Evangelion" , autor:"Yoshiyuki Sadamoto"},
      { titulo: "Akira",autor:"Katsuhiro Otomo" }
  ],
  "Volume 6 Horimura":[
    { titulo: "Volume 1 The Ghost in the Shell" },
    { titulo: "Volume 10 Neon Genesis Evangelion", autor:"Yoshiyuki Sadamoto" },
    { titulo: "Volume 1 Blame!" , autor:"Tsutomu Nihei"}

  ],
  "Akira": [
      { titulo: "Volume 1 The Ghost in the Shell" },
      { titulo: "Volume 10 Neon Genesis Evangelion" ,autor:"Yoshiyuki Sadamoto"},
      { titulo: "Volume 1 Blame!" , autor:"Tsutomu Nihei"}
  ],
  "Volume 57 de One Piece": [
      { titulo: "Volume 16 Dragon Ball" , autor:"Akira Toeiyama"},
      { titulo: "Volume 3 de Gash Bell", autor :"Makoto Raiku" },
      { titulo: "Volume 4 de Demon Slayer" ,autor:"Koyoharu Gotouge" }
  ],
  "Volume 1 Final Fantasy":[
    { titulo: "Volume 1 The Ghost in the Shell" },
    { titulo: "Volume 10 Neon Genesis Evangelion" ,autor:"Yoshiyuki Sadamoto"},
    { titulo: "Volume 1 Blame!" , autor:"Tsutomu Nihei"}
  ],
  "Orgulho e Preconceito": [
      { titulo: "O Morro dos Ventos Uivantes" ,autor:"Emily Brontë" },
      { titulo: "P.S. Eu Te Amo",autor:"Richard Paul Evans" },
      { titulo: "Como Eu Era Antes de Você",autor:"Jojo Moyes" }
  ],
  "O Morro dos Ventos Uivantes": [
      { titulo: "Orgulho e Preconceito", autor:"Jane Austen" },
      { titulo: "P.S. Eu Te Amo",autor:"Richard Paul Evans" },
      { titulo: "Como Eu Era Antes de Você" ,autor:"Jojo Moyes" }
  ],
  "P.S. Eu Te Amo": [
      { titulo: "Orgulho e Preconceito", autor:"Jane Austen" },
      { titulo: "Como Eu Era Antes de Você",autor:"Jojo Moyes" },
      { titulo: "Um amor para recordar",autor:"Nicholas Sparks" }
  ],
  "Como Eu Era Antes de Você": [
      { titulo: "P.S. Eu Te Amo",autor:"Richard Paul Evans" },
      { titulo: "Um Dia", autor:"David Nicholls" },
      { titulo: "O Diário de uma Paixão" ,autor:"Nicholas Sparks" }
  ],
  "Um Dia": [
      { titulo: "Como Eu Era Antes de Você", autor:"Jojo Moyes" },
      { titulo: "P.S. Eu Te Amo" , autor:"Richard Paul Evans"},
      { titulo: "O Diário de uma Paixão", autor:"Nicholas Sparks" }
  ],
  "O Amor nos Tempos de Cólera": [
      { titulo: "O Diário de uma Paixão" ,autor:"Nicholas Sparks" },
      { titulo: "Um Dia" ,autor:"David Nicholls"},
      { titulo: "Como Eu Era Antes de Você" ,autor:"Jojo Moyes" }
  ],
  "O Diário de uma Paixão": [
      {titulo: "Um amor para recordar",autor:"Nicholas Sparks" },
      { titulo: "Um Dia", autor:"David Nicholls" },
      {  titulo: "P.S. Eu Te Amo" , autor:"Richard Paul Evans"},
  ],
  "Um amor para recordar": [
      { titulo: "O Diário de uma Paixão", autor:"Nicholas Sparks" },
      { titulo: "P.S. Eu Te Amo",autor:"Richard Paul Evans" },
      { titulo: "Como Eu Era Antes de Você",autor:"Jojo Moyes" }
  ],
  "O Pintassilgo": [
      { titulo: "Orgulho e Preconceito", autor:"Jane Austen" },
      { titulo: "Como Eu Era Antes de Você" ,autor:"Jojo Moyes" },
      { titulo: "Amor Nos Tempos do Cólera",autor:"Gabriel Garcia Marques" }
  ],
  "Contos de Terror": [
      { titulo: "Estou Atrás de Você",autor:"Stephen King" },
      { titulo: "O Chamado de Cthulhu" ,autor:"H.P. Lovecraft" },
      { titulo: "Frankenstein" }
  ],
  "Estou Atrás de Você": [
      { titulo: "Contos de Terror" },
      { titulo: "Ninguem vai te ouvir gritar" },
      { titulo: "O exorcista" }
  ],
  "O Chamado de Cthulhu": [
      { titulo: "Contos de Terror" },
      { titulo: "Frankenstein" },
      { titulo: "A ilha do Dr. Moreau" }
  ],
  "Frankenstein": [
      { titulo: "O Chamado de Cthulhu" },
      { titulo: "A noite dos mortos vivos" },
      { titulo: "Contos de Terror" }
  ],
  "O exorcista": [
      { titulo: "Estou Atrás de Você" },
      { titulo: "Frankenstein" },
      { titulo: "A noite dos mortos vivos" }
  ],
  "A noite dos mortos vivos": [
      { titulo: "Frankenstein" },
      { titulo: "O exorcista" },
      { titulo: "A ilha das almas selvagens", autor:"Maurice Druon" }
  ],
  "A ilha do Dr. Moreau": [
      { titulo: "Frankenstein" },
      { titulo: "O Chamado de Cthulhu" },
      { titulo: "A tragédia de MACBETH" }
  ],
  "A tragédia de MACBETH": [
      { titulo: "Contos de Terror" },
      { titulo: "A ilha do Dr. Moreau" },
      { titulo: "Ninguem vai te ouvir gritar" }
  ],
  "Ninguem vai te ouvir gritar": [
      { titulo: "A tragédia de MACBETH" },
      { titulo: "Estou Atrás de Você" },
      { titulo: "A ilha das almas selvagens" , autor:"Maurice Druon"}
  ],
  "A ilha das almas selvagens": [
      { titulo: "A noite dos mortos vivos" },
      { titulo: "O exorcista" },
      { titulo: "Ninguem vai te ouvir gritar" }
  ],
  "Os Miseráveis": [
      { titulo: "Dom Casmurro" },
      { titulo: "Cem Anos de Solidão", autor:"Gabriel Garcia Marques" },
      { titulo: "Memórias póstumas de Brás Cubas" }
  ],
  "Dom Casmurro": [
      { titulo: "Memórias póstumas de Brás Cubas" },
      { titulo: "Os Miseráveis",autor:"Victor Hugo" },
      { titulo: "Cem Anos de Solidão" , autor:"Gabriel Garcia Marques" }
  ],
  "Memórias póstumas de Brás Cubas": [
      { titulo: "Dom Casmurro" },
      { titulo: "Os Miseráveis", autor:"Victor Hugo" },
      { titulo: "Cem Anos de Solidão", autor:"Gabriel Garcia Marques" }
  ],
  "Cem Anos de Solidão": [
      { titulo: "Os Miseráveis", autor:"Victor Hugo" },
      { titulo: "A Metamorfose",autor:"Franz Kafka" },
      { titulo: "Memórias póstumas de Brás Cubas" ,autor:"Machado de Assis" }
  ],
  "A Metamorfose": [
      { titulo: "Cem Anos de Solidão", autor:"Gabriel Garcia Marques" },
      { titulo: "O Sol é para Todos",autor:"Harper Lee" },
      { titulo: "Fahrenheit" ,autor:"Ray Bradbury" }
  ],
  "O Sol é para Todos": [
      { titulo: "A Metamorfose" ,autor:"Franz Kafka" },
      { titulo: "Fahrenheit", autor:"Ray Bradbury" },
      { titulo: "Os Miseráveis", autor:"Victor Hugo" }
  ],
  "Fahrenheit": [
      { titulo: "A Metamorfose" ,autor:"Franz Kafka" },
      { titulo: "O Sol é para Todos",autor:"Harper Lee" },
      { titulo: "Cem Anos de Solidão", autor:"Gabriel Garcia Marques" }
  ],
  "Platão:Teoria & Filosofia": [
      { titulo: "O Príncipe" , autor:"Maquiavel" },
      { titulo: "Confissões de Santo Agostinho", autor:"Santo Agostinho"},
      { titulo: "A Cidade de Deus",autor:"Santo Agostinho" }
  ],
  "O Príncipe": [
      { titulo: "Platão", autor:"Platão" },
      { titulo: "A Arte da Guerra", autor:"Sun Tzu"},
      { titulo: "A Cidade de Deus",autor:"Santo Agostinho" }
  ],
  "Bíblia Sagrada": [
      { titulo: "Cristianismo Puro e Simples" ,autor:"C.S. Lewis" },
      { titulo: "Confissões de Santo Agostinho",autor:"Santo Agostinho" },
      { titulo: "Em Seus Passos o Que Faria Jesus?", }
  ],
  "Confissões de Santo Agostinho": [
      { titulo: "Bíblia Sagrada" , autor:"Vários autores "},
      { titulo: "Cristianismo Puro e Simples" },
      { titulo: "O Conhecimento do Deus Santo" }
  ],
  "Cristianismo Puro e Simples": [
      { titulo: "Bíblia Sagrada" , autor:"Vários autores "},
      { titulo: "Confissões de Santo Agostinho",autor:"Santo Agostinho" },
      { titulo: "Cartas de um Diabo a seu Aprendiz" }
  ],
  "O Problema do Sofrimento": [
      { titulo: "Cristianismo Puro e Simples" },
      { titulo: "O Conhecimento do Deus Santo" },
      { titulo: "O Evangelho Maltrapilho" }
  ],
  "Em Seus Passos o Que Faria Jesus?": [
      { titulo: "Cristianismo Puro e Simples" },
      { titulo: "O Evangelho Maltrapilho" },
      { titulo: "Bíblia Sagrada",autor:"Vários autores " }
  ],
  "O Conhecimento do Deus Santo": [
      { titulo: "Cristianismo Puro e Simples" },
      { titulo: "O Problema do Sofrimento" },
      { titulo: "Confissões de Santo Agostinho",autor:"Santo Agostinho" }
  ],
  "O Evangelho Maltrapilho": [
      { titulo: "Cristianismo Puro e Simples" },
      { titulo: "Cartas de um Diabo a seu Aprendiz" },
      { titulo: "O Problema do Sofrimento" }
  ],
  "Cartas de um Diabo a seu Aprendiz": [
      { titulo: "Cristianismo Puro e Simples" },
      { titulo: "O Evangelho Maltrapilho" },
      { titulo: "Confissões de Santo Agostinho" ,autor:"Santo Agostinho"}
  ],
  "A Cidade de Deus": [
      { titulo: "Confissões de Santo Agostinho" },
      { titulo: "Platão",autor:"Platão"  },
      { titulo: "O Príncipe" , autor:"Maquiavel"}
  ],
  "Imitação de Cristo": [
      { titulo: "Confissões de Santo Agostinho" },
      { titulo: "Cristianismo Puro e Simples" },
      { titulo: "O Peregrino" }
  ],
  "O Peregrino": [
      { titulo: "Imitação de Cristo",autor:"Tomás de Kempis" },
      { titulo: "Cristianismo Puro e Simples" },
      { titulo: "O Evangelho Maltrapilho" }
  ],
  "Volume 1 de Final Fantasy": [
      { titulo: "Snow crash" },
      { titulo: "Fundação" },
      { titulo: "Admirável mundo novo" }
  ],
  "Snow crash": [
      { titulo: "Volume 1 de Final Fantasy" },
      { titulo: "Admirável mundo novo" },
      { titulo: "Fundação" }
  ],
  "Fundação": [
      { titulo: "Admirável mundo novo" },
      { titulo: "Snow crash" },
      { titulo: "Volume 1 de Final Fantasy" }
  ],
  "Admirável mundo novo": [
      { titulo: "Fundação" },
      { titulo: "Snow crash" },
      { titulo: "Volume 1 de Final Fantasy" }
  ],
  "Sapiens a breve história da humanidade": [
      { titulo: "Poder do hábito", autor:"Charles Duhing" }
  ],
  "Poder do hábito": [
      { titulo: "Sapiens a breve história da humanidade",autor:"Yuval Noah Harari" }
  ],
  "A Arte da Guerra": [
      { titulo: "Imperiais" ,autor:"Raphael Draccon" },
      { titulo: "O Príncipe", autor:"Maquiavel" },
      { titulo: "O tempo e o vento" , autor:"Erico Verissimo" }
  ],
  "Imperiais": [
    { titulo: "A Arte da Guerra", autor:"Sun Tzu"},
      { titulo: "O tempo e o vento" ,autor:"Erico Verissimo" },
      { titulo: "O tempo e o vento2", autor:"Erico Verissimo" }
  ],
  "O tempo e o vento": [
      { titulo: "Imperiais", autor:"Raphael Draccon" },
      { titulo: "O tempo e o vento2",autor:"Erico Verissimo" },
      { titulo: "A Arte da Guerra",autor:"Sun Tzu" }
  ],
  "O tempo e o vento2": [
      { titulo: "O tempo e o vento" ,autor:"Erico Verissimo" },
      { titulo: "Imperiais" ,autor:"Raphael Draccon" },
      { titulo: "A Arte da Guerra", autor:"Sun Tzu"}
  ],
  "Ilíada": [
      { titulo: "Odisseia" ,autor:"Homero" },
      { titulo: "Platão" ,autor:"Platão" },
      { titulo: "A Metamorfose" ,autor:"Franz Kafka" }
  ],
  "Odisseia": [
      { titulo: "Ilíada", autor:"Homero" },
      { titulo: "Platão", autor:"Platão"  },
      { titulo: "Os Miseráveis", autor:"Victor Hugo" }
  ],
  "A Chama de Ember": [
      { titulo: "O Acordo com o Rei Elfo",autor:"R.A. Salvatore"  },
      { titulo: "A história sem fim",autor:"Michael Ende" },
      { titulo: "O Hobbit",autor:" J.R.R. Tolkien" }
  ],
  "A casa dos Espiritos":[
    {titulo:"A Revolução dos Bichos", autor:"George Orwell" },
    {titulo:"O Morro dos ventos uivantes", autor:"Emily Brontë" },
  ],
  "O Pequeno Príncipe":[
    {titulo:"O Hobbit",autor:" J.R.R. Tolkien"}
  ],
  "Harry Potter e a Criança Amaldiçoada":[
    { titulo:"A ilha do Tesouro",autor:"Robert Louis Stevenson" },
  ],
  "Dom Quixote":[
    {titulo:"Harry Potter e a Criança Amaldiçoada", autor:"J.K. Rowling" },
  ],
  "Homem-Aranha: Franked Red":[
    {titulo:"Dom Quixote",autor:"Miguel de Cervantes" },
  ]
};



function verSemelhantes(titulo) {
  const semelhantes = livrosSemelhantes[titulo];

  if (!semelhantes) {
      alert("Nenhum semelhante encontrado.");
      return;
  }

  // Criar HTML com os livros semelhantes
  let resultado = `📚 Livros semelhantes a "${titulo}":\n\n`;
  semelhantes.forEach(livro => {
      resultado += `• ${livro.titulo} — ${livro.autor}\n`;
  });

  alert(resultado);
}
