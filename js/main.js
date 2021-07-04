const timer = document.querySelector("#contador");
const botaoIniciar = document.querySelector("#botao-iniciar");
const botaoPausar = document.querySelector("#botao-pausar");
const botaoParar = document.querySelector("#botao-parar");

let duracaoSessao = 1500;
let tempoRestanteNaSessao = 3600;
let duracaoPausaSessao = 300;
            
let relogioRodando = false;

botaoIniciar.addEventListener("click", () => {
    iniciarRelogio();
});

botaoPausar.addEventListener("click", () => {
    iniciarRelogio();
});

botaoParar.addEventListener("click", () => {
    iniciarRelogio(true);
});

const iniciarRelogio = (reset) => {
    if (reset) {
    } else {
      if (relogioRodando === true) {
        clearInterval(relogioTimer);
        relogioRodando = false;
      } else {
        relogioRodando = true;
        relogioTimer = setInterval(() => {
          tempoRestanteNaSessao--;
          exibirTempoRestante();
        }, 1000);
      }
    }
};

const exibirTempoRestante = () => {
    const segundosRestantes = tempoRestanteNaSessao;
    let resultado = "";
    const segundos = segundosRestantes % 60;
    const minutos = parseInt(segundosRestantes / 60) % 60;
    let horas = parseInt(segundosRestantes / 3600);
  
    function adicionandoZeros(tempo) {
      return tempo < 10 ? `0${tempo}` : tempo;
    }
  
    if (horas > 0) resultado += `${horas}`;
    resultado += `${adicionandoZeros(minutos)}:${adicionandoZeros(segundos)}`;
    contador.innerText = resultado.toString();
  };