const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Qual das seguintes afirmações sobre a história do Corinthians está correta??",
        alternativas: [
            {
                texto: "a) O Corinthians foi fundado em 1910 por um grupo de operários na cidade de São Paulo, e seu nome foi uma homenagem ao Corinthian Football Club, um time amador inglês que excursionava pelo Brasil na época.",
                afirmacao: "O Corinthians nasceu com a essência popular, moldando sua identidade ligada ao povo."
               
            },
            {
                texto: "O Corinthians é o único clube brasileiro a conquistar o Mundial de Clubes da FIFA por duas vezes (em 2000 e 2012), sendo o primeiro a levantar a taça no formato atual da competição.",
                afirmacao: "Essa conquista dupla solidifica o Corinthians como um gigante no cenário global do futebol."
            },
        ]
    },
    {
        enunciado: "Qual das seguintes afirmações descreve corretamente um aspecto tático ou técnico importante no futebol moderno?",
        alternativas: [
            {
                texto: "O "tiki-taka", estilo de jogo imortalizado pelo Barcelona de Pep Guardiola, prioriza a posse de bola intensa, com passes curtos e rápidos, buscando desorganizar a defesa adversária e criar espaços.",
                afirmacao: "O tiki-taka revolucionou a forma de controlar o jogo e criar oportunidades no ataque."
            },
            {
                texto: "O VAR (Árbitro Assistente de Vídeo) é uma tecnologia implementada para revisar lances capitais, como gols, pênaltis e cartões vermelhos diretos, visando diminuir erros cruciais e aumentar a justiça nas partidas.
",
                afirmacao: "O VAR busca tornar o jogo mais justo, corrigindo equívocos importantes que antes passavam despercebidos."
            },
        ]
    },
    {
        enunciado: "Pergunta3",
        alternativas: [
            {
                texto: "alternativa1",
                afirmacao: "afirmacao1"
            },
            {
                texto: "alternativa2",
                afirmacao: "afirmacao2"
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
   if (atual >= perguntas.length){
      mostraResultado();
      return;
   }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    textoResultado.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
      
    }
}


function respostaSelecionada(opcaoSelecionada){
const afirmacao = opcaoSelecionada.afirmacao;
historiaFinal += afirmacao + " ";
atual++;
mostraPergunta();

}
function mostraResultado(){
   caixaPerguntas.textContent = "conclusao";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}
mostraPergunta();