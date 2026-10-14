// Banco de Dados --- Aqui as perguntas vão ser salvas, junto com as alternativas. Também acontece a verficação das respostas

const perguntas = [ // Aqui usei bastante constatante como a IA pediu, já que seria uma cagada os resultados ficarem sendo reescritos

    {
        pergu: "Quais classes sociais eram as mais comuns de ter o acesso às tecnologias avançadas de sua época?",
        opcs: ["Nobreza e Aristocracia", "Forças militares", "Clero (Sacerdotes)", "Todas as anteriores"],
        resp: 3,
        dific: "Fácil"
    },
    {
        pergu: "O Que foi o mecanismo de anticítera?",
        opcs: ["Um antigo computador astronômico", "Uma máquina a vapor do século XX", "Um mecanismo de roldanas para ajudar na agricultura", "Um sistema de defesa das cidades gregas antigas"],
        resp: 0,
        dific: "Médio"
    },
    {
        pergu: "Qual dessas civilizações antigas desenvolveram a escrita e o cálculo?",
        opcs: ["Egípcios", "Mesopotâmicos", "Gregos", "Chineses"],
        resp: 1,
        dific: "Fácil"
    },
    {
        pergu: "O Que é Hardware?",
        opcs: ["A parte física das tecnologias digitais, mecanismos e computadores", "Uma área específica da computação, responsável pelo desenvolvimento de sites", "Uma empresa de comércio de tecnologias avançadas", "Um tipo de sistema de comercialização desenvolvido pelos norte-americanos"],
        resp: 0,
        dific: "Médio"
    },
    {
        pergu: "De acordo com o conteúdo do site, quais são as 4 principais frentes de impacto negativo da circulação da tecnologia?",
        opcs: ["Ambiental, Social, Político e Econômico", "Político, Geográfico, Histórico e Ambiental", "Ambiental, Social, Econômico e Cultural", "Político, Tecnológico, Cultural e Econômico"],
        resp: 2,
        dific: "Fácil"
    },
    {
        pergu: "Segundo o site, quais dessas regiões são parte da etapa do consumo de tecnologia em seu ciclo?",
        opcs: ["Chile, China e Vietnã", "Paquistão, Gana e Nigéria", "EUA, Brasil e Europa", "Malásia, Índia e Austrália"],
        resp: 2,
        dific: "Médio"
    },
    {
        pergu: "Qual desses é o passo final no ciclo da tecnologia",
        opcs: ["Consumo", "Reciclagem", "Descarte", "Distribuição"],
        resp: 1,
        dific: "Fácil"
    },
    {
        pergu: "Onde fica o maior centro de descarte tecnológico do mundo?",
        opcs: ["Gana", "Brasil", "Paquistão", "China"],
        resp: 0,
        dific: "Médio"
    },
    {
        pergu: "O Que é escambo?",
        opcs: ["Uma prática antiga que envolvia a prestação de serviços em troca de bens materiais", "Um sistema econômico derivado do socialismo do século XX", "Um sistema de comércio que cai em desuso por sua desorganização ", "Um sistema de trocas de bens onde não se usa dinheiro para medir valor, e sim outros bens"],
        resp: 3,
        dific: "Difícil"
    },
    {
        pergu: "Qual é o principal elemento químico utilizado na fabricação de semicondutores?",
        opcs: ["Silício", "Lítio", "Ferro", "Ouro"],
        resp: 0,
        dific: "Fácil"
    },
    {
        pergu: "Qual foi o principal evento que consolidou a automação dos processos de produção de bens?",
        opcs: ["Cruzadas", "Revolução Industrial", "Grandes Navegações", "Segunda Guerra Mundial"],
        resp: 1,
        dific: "Difícil"
    },
    {
        pergu: "Qual era a principal rota de comércio utilizada durante as Grandes Navegações?",
        opcs: ["Rota Marítma das Indias", "Rota das Especiarias", "Rota da Seda", "Estrada Real Persa"],
        resp: 0,
        dific: "Difícil"
    },

];

perguntas.sort(() => Math.random() - 0.5); // A função math.sort serve pra sortear as perguntas, aí eu só defini a porcentagem

// Variáveis para controle do jogo

let atual = 0;
let pontos = 0;
let tempo = 20;
let relogio;

// Controle para iniciar o quiz e carregar as pergunats

function inicQuiz() { //Estamos adicionando uma função dessa variável que criei no button que começa o quiz
    document.getElementById("tela-inicial").style.display = "none"; // Pra usar algum elemnto de HTML, usamos esse getElemntById, e ele identifica os elementos usando o id, assim como o CSS faz com o class
    document.getElementById("tela-jogo").style.display = "block";
    carregarPergunta();
}

function carregarPergunta() {
    const p = perguntas[atual];


    // Bagulho pra atualizar os textos na tela

    document.getElementById("dific").innerText = `Dificuldade. ${p.dific}`; // Essa parte muda o que é exibido no texto de dificuldade, se no const da pergunta estiver "Fácil", vai ser exibido fácil, e assim por diante
    document.getElementById("pergu").innerText = p.pergu; // Funciona da mesma maneira, mas ele não tem um texto ao lado, só mostra a string da constante

    // Negócio pra trocar os botôes e por textos novos

    const botoes = document.querySelectorAll(".opcs .botao");
    botoes.forEach((botao, index) => {
        botao.innerText = p.opcs[index];
        botao.disabled = false; // Deixa você clicar neles, já que como a gente tinha setado que só pode clicar uma vez, isso aqui reseta o botão, e deixa você clicar uma vez nele dnv
        botao.style.backgroundColor = ""; // Limpa as cores que tinham sido aplicadas na pergunta anterior
        botao.style.color = ""; // Limpa a cor da letra branca
    });



    // Esconde aqueles avisos que apareceram na pergunta de antes   

    document.getElementById("resp").innerText = "";
    document.getElementById("avanc").style.display = "none";

    iniciarTempo();

}

// Confiuração do temporizador

function iniciarTempo() {

    tempo = 20; //  Usei a variável lá do HTML e só disse que ela vale 20, 20 segundos.
    document.getElementById("tempo").innerText = `Tempo: ${tempo}s` // Aqui mostra quanto tempo o jogador tem, mas sem descontar nada

    relogio = setInterval(() => {
        tempo--; // aqui entra a função inversa da somadora, a subtratora, subtraidora, sla, ela vai subtraindo
        document.getElementById("tempo").innerText = `Tempo: ${tempo}s`; // Nesse tem o tempo descontando
    

    if (tempo < 0) { // Um controle pra garantir que o tempo não vai ficar contando negativo
        clearInterval(relogio);
        verificar(-1) // Se o cara não responder, a resposta vai ser marcada como -1, então está errada.
        }
    }, 1000);
}

// Sistema pra alterar a cor das respostas caso esteja certo / errado
function verificar(escolha) {
    clearInterval(relogio); // Outro negócio pra fazer o relógio parar certo


    const p = perguntas[atual];
    const botoes = document.querySelectorAll(".opcs .botao");
    const resp = document.getElementById("resp");

    botoes.forEach(botao => botao.disabled = true); //Desativa todos os botôes depos de algum ser clickado

    if (escolha === p.resp) { //Estrutura pra pintar os botões de azul e vermelho dependendo da situação
    
        // Se o cara acertou
        pontos++ //adciona um ponto
        botoes[escolha].style.backgroundColor = "blue"; // Deixa o botão selecionado azul
        botoes[escolha].style.color = "white"; //Deixa o texto branco pra deixar legível
        resp.innerText = "Muito bem! Acertou essa."; //Mensagem pra mostrar que o jogador acertou
    } else {

        // Se o cara errou ou o tempo dele acabou
        if (escolha !== -1) { // Se ele errou mesmo, ou clicou errado
            botoes[escolha].style.backgroundColor = "red"; // Deixa a selecionada errada como vermelho
            botoes[escolha].style.color = "white";
        }

        // Se o tempo acabou mesmo
        botoes[p.resp].style.backgroundColor = "blue";
        botoes[p.resp].style.color = "white";

        resp.innerText = escolha === -1 ? "Tempo Esgotado!" : "Você Errou!";

    }

    // Mostra o botão pra trocar a pergunta
    document.getElementById("avanc").style.display = "block";
}

// Negócio que o botão de avançar faz funcionar

function proximaPergunta() {
    atual++; // Avança a pergunta da lista

    if(atual < perguntas.length) {
        carregarPergunta()
    } else {
        // Marca o fim 
        document.getElementById("tela-jogo").style.display = "none";
        document.getElementById("tela-final").style.display = "block";
        document.getElementById("ponts-Final").innerText = `Você acertou ${pontos} de ${perguntas.length} perguntas!`;
    }
}