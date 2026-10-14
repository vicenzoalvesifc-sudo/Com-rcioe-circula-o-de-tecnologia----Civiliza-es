
const questions = [
  {
    category: "CIRCULAÇÃO",
    question: "Um celular tem componentes fabricados em diferentes países e depois é montado em outro lugar. O que esse exemplo representa?",
    answers: [
      "Uma cadeia global de produção",
      "Uma troca sem comércio",
      "A fabricação isolada de um país",
      "O fim da logística internacional"
    ],
    correct: 0,
    explanation: "A cadeia global de produção divide etapas entre regiões. Componentes, montagem, transporte e venda podem ocorrer em países diferentes."
  },
  {
    category: "LOGÍSTICA",
    question: "Qual conjunto reúne meios que ajudam a transportar produtos tecnológicos entre países?",
    answers: [
      "Satélites, aplicativos e senhas",
      "Navios, aviões e caminhões",
      "Lojas, anúncios e avaliações",
      "Teclados, telas e baterias"
    ],
    correct: 1,
    explanation: "Navios, aviões e caminhões fazem parte da logística que movimenta componentes e aparelhos pelo mundo."
  },
  {
    category: "POVOS ANTIGOS",
    question: "Na Mesopotâmia, qual inovação ajudou a registrar informações e administrar atividades comerciais?",
    answers: [
      "A bússola magnética",
      "A máquina a vapor",
      "A escrita",
      "O telefone celular"
    ],
    correct: 2,
    explanation: "A escrita permitiu registrar mercadorias, acordos, tributos e informações, apoiando a administração e o comércio."
  },
  {
    category: "NAVEGAÇÃO",
    question: "O conhecimento da bússola, desenvolvido na China antiga, contribuiu especialmente para...",
    answers: [
      "Eliminar a necessidade de mapas",
      "Produzir microchips",
      "Substituir todas as rotas terrestres",
      "Orientar viagens e ampliar contatos entre regiões"
    ],
    correct: 3,
    explanation: "A bússola ajudou na orientação durante viagens e navegações, favorecendo deslocamentos, comércio e contato entre povos."
  },
  {
    category: "COMÉRCIO DIGITAL",
    question: "Qual alternativa é um exemplo de comércio de tecnologia que não exige a entrega de um aparelho físico?",
    answers: [
      "Assinatura de um serviço de streaming",
      "Compra de um notebook em uma loja",
      "Transporte de placas eletrônicas",
      "Importação de baterias"
    ],
    correct: 0,
    explanation: "Serviços digitais, como streaming e software, também fazem parte do comércio de tecnologia, mesmo sem o envio de um produto físico."
  },
  {
    category: "PRODUÇÃO",
    question: "Por que chips e semicondutores são tão importantes para a circulação mundial de tecnologia?",
    answers: [
      "Servem apenas para decorar aparelhos",
      "São componentes essenciais de muitos dispositivos eletrônicos",
      "Substituem todos os meios de transporte",
      "Só são usados em eletrodomésticos antigos"
    ],
    correct: 1,
    explanation: "Semicondutores estão presentes em celulares, computadores, veículos e muitos outros equipamentos. Por isso, sua produção influencia as cadeias globais."
  },
  {
    category: "IMPACTOS",
    question: "Qual é um possível efeito positivo do comércio global de tecnologia?",
    answers: [
      "Impedir a troca de conhecimento",
      "Eliminar toda desigualdade automaticamente",
      "Ampliar o acesso a produtos e conhecimentos",
      "Tornar desnecessária a manutenção"
    ],
    correct: 2,
    explanation: "A circulação tecnológica pode ampliar o acesso a ferramentas e conhecimentos, embora os benefícios não sejam distribuídos igualmente em todos os lugares."
  },
  {
    category: "IMPACTOS",
    question: "Qual situação pode ser um desafio ligado ao comércio global de tecnologia?",
    answers: [
      "Todos os produtos terem a mesma origem",
      "Não existir transporte de mercadorias",
      "Toda tecnologia ser gratuita",
      "Acesso desigual e descarte de lixo eletrônico"
    ],
    correct: 3,
    explanation: "O acesso pode ser desigual, e aparelhos descartados geram lixo eletrônico que exige coleta e tratamento adequados."
  },
  {
    category: "COSTUMES",
    question: "O escambo moderno pode ser apoiado pela internet para...",
    answers: [
      "Trocar objetos ou serviços e reduzir desperdícios",
      "Proibir trocas entre pessoas",
      "Substituir toda forma de comércio internacional",
      "Impedir a reutilização de produtos"
    ],
    correct: 0,
    explanation: "Plataformas digitais podem aproximar pessoas interessadas em trocar objetos ou serviços, economizar e prolongar a vida útil dos produtos."
  },
  {
    category: "PENSAMENTO GLOBAL",
    question: "Por que um problema em uma etapa da cadeia de chips pode afetar consumidores em vários países?",
    answers: [
      "Porque cada país fabrica tudo sozinho",
      "Porque etapas e fornecedores de vários países estão conectados",
      "Porque os aparelhos não precisam de componentes",
      "Porque o comércio só acontece dentro das cidades"
    ],
    correct: 1,
    explanation: "Quando a produção depende de fornecedores e etapas distribuídos globalmente, atrasos em uma parte podem afetar a montagem, o transporte e a disponibilidade em outros lugares."
  }
];

// Elementos do HTML
const counter = document.querySelector("#question-counter");
const scoreEl = document.querySelector("#score");
const progress = document.querySelector("#progress-fill");
const category = document.querySelector("#category-tag");
const questionText = document.querySelector("#question-text");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const encouragement = document.querySelector("#encouragement");
const quizCard = document.querySelector("#quiz-card");
const resultCard = document.querySelector("#result-card");

const letters = ["A", "B", "C", "D"];

let currentQuestion = 0;
let score = 0;
let correctCount = 0;
let answered = false;

// Exibe uma pergunta
function renderQuestion() {
  answered = false;

  const item = questions[currentQuestion];

  counter.textContent =
    `PERGUNTA ${currentQuestion + 1} DE ${questions.length}`;

  scoreEl.textContent = score;

  progress.style.width =
    `${(currentQuestion / questions.length) * 100}%`;

  category.textContent = item.category;
  questionText.textContent = item.question;

  answers.innerHTML = "";
  feedback.hidden = true;
  feedback.innerHTML = "";
  nextButton.disabled = true;

  nextButton.innerHTML =
    currentQuestion === questions.length - 1
      ? 'Ver meu resultado <span aria-hidden="true">→</span>'
      : 'Próxima pergunta <span aria-hidden="true">→</span>';

  encouragement.textContent =
    currentQuestion < 3
      ? "A aventura está só começando!"
      : "Continue assim: cada detalhe conta.";

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "answer-button";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = letters[index];

    const answerText = document.createElement("span");
    answerText.textContent = answer;

    button.appendChild(letter);
    button.appendChild(answerText);

    button.addEventListener("click", () => {
      chooseAnswer(index);
    });

    answers.appendChild(button);
  });
}

// Verifica a resposta escolhida
function chooseAnswer(index) {
  if (answered) return;

  answered = true;

  const item = questions[currentQuestion];

  const buttons = [
    ...answers.querySelectorAll("button")
  ];

  buttons.forEach((button, i) => {
    button.disabled = true;

    if (i === item.correct) {
      button.classList.add("correct");
    }
  });

  if (index === item.correct) {
    score += 10;
    correctCount++;

    feedback.innerHTML =
      `<strong>✨ Mandou bem! +10 pontos</strong>${item.explanation}`;

    encouragement.textContent =
      "Resposta certa! Bora para a próxima.";
  } else {
    buttons[index].classList.add("wrong");

    feedback.innerHTML =
      `<strong>Quase! A resposta certa era ${letters[item.correct]}.</strong>${item.explanation}`;

    encouragement.textContent =
      "Errar também faz parte de aprender.";
  }

  scoreEl.textContent = score;
  feedback.hidden = false;
  nextButton.disabled = false;

  progress.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;
}

// Avança ou mostra o resultado
nextButton.addEventListener("click", () => {
  if (!answered) return;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
});

// Exibe o resultado final
function showResult() {
  quizCard.hidden = true;
  resultCard.hidden = false;

  const percent = Math.round(
    (correctCount / questions.length) * 100
  );

  document.querySelector("#final-score").textContent = score;

  document.querySelector("#correct-count").textContent =
    `${correctCount}/${questions.length}`;

  document.querySelector("#final-percent").textContent =
    `${percent}%`;

  let title;
  let message;
  let icon;

  if (percent >= 90) {
    title = "Lenda da tecnologia!";
    message =
      "Você conectou quase todos os pontos. Seu conhecimento sobre circulação e comércio de tecnologia está afiado!";
    icon = "🏆";
  } else if (percent >= 70) {
    title = "Explorador expert!";
    message =
      "Você entende muito bem como a tecnologia viaja pelo mundo. Revise os detalhes e tente conquistar a pontuação máxima.";
    icon = "🚀";
  } else if (percent >= 40) {
    title = "Curioso em evolução!";
    message =
      "Você já tem uma boa base. Explore as páginas do Tech&History e volte para superar sua pontuação.";
    icon = "🧭";
  } else {
    title = "Sua jornada começou!";
    message =
      "Todo especialista começa aprendendo. Visite as outras páginas do site e tente o desafio novamente!";
    icon = "🌱";
  }

  document.querySelector("#result-title").textContent = title;
  document.querySelector("#result-message").textContent = message;
  document.querySelector("#result-icon").textContent = icon;

  progress.style.width = "100%";

  resultCard.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

// Reinicia o quiz
document.querySelector("#restart-button").addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  correctCount = 0;

  resultCard.hidden = true;
  quizCard.hidden = false;

  renderQuestion();

  quizCard.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Inicia o jogo
renderQuestion();