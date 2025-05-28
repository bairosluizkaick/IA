const caixaPrincipal = document.querySelector(".caixaPricipal");
const caixaPerguntas = document.querySelector(".caixaPerguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixaResultado");
const textoResultado = document.querySelector(".textoResultado");
const perguntas[
   {
      enunciado: "pergunta1",
      alternativas: [
         {
            texto: "alternativa1",
            afirmacao: "afirmacao1",
         },
         {
            texto: "alternativa2",
            afirmacao: "afirmacao2",
         },
      ]
   },
   {
      enunciado: "pergunta2",
      alternativas: [
         {
            texto: "alternativa1",
            afirmacao: "afirmacao1",
         },
         {
            texto: "alternativa2",
            afirmacao: "afirmacao2",
         },
      ]
   },
   {
      enunciado: "pergunta3",
      alternativas: [
         {
            texto: "alternativa1",
            afirmacao: "afirmacao1",
         },
         {
            texto: "alternativa2",
            afirmacao: "afirmacao2",
         },
      ]
   },
]
let atual  = 0;
let perguntaAtual
function mostraPergunta() {
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   mostraAlternativas();
}
function mostraAlternativas(){

}
mostraAlternativas();