const timer = document.querySelector("#contador");
const botaoIniciar = document.querySelector("#botao-iniciar");
const botaoPausar = document.querySelector("#botao-pausar");
const botaoParar = document.querySelector("#botao-parar");
const botaoIntervalo = document.querySelector("#botao-intervalo");

let duracaoSessao = 1500;
let tempoRestanteNaSessao = 1500;
let duracaoPausaSessao = 300;

let relogioRodando = false;
let execucoes = 0;
let modo = 0;

botaoIniciar.addEventListener("click", () => {
  verificaRelogio();
  modo = 1;
});

botaoPausar.addEventListener("click", () => {
  verificaRelogio();
});

botaoParar.addEventListener("click", () => {
  verificaRelogio(true);
});

botaoIntervalo.addEventListener("click", () => {
  tempoRestanteNaSessao = duracaoPausaSessao;
  verificaRelogio();
});

const verificaRelogio = (reset) => {
  if (reset) {
    pararRelogio();
  } else {
    if (relogioRodando === true) {
      pausarRelogio();
    } else {
      iniciarRelogio();
    }
  }
};

const exibirTempoRestante = () => {
  if (tempoRestanteNaSessao >= 0) {
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
  } else {
    if (modo === 1) {
      execucoes++;
      modo = 0;
    }
    clearInterval(relogioTimer);
    pomodoros.innerText = `Pomodoros realizados:${execucoes}`;
    contador.innerText = "25:00";
    var audio = new Audio("song/pare.mp3");
    audio.play();
  }
};

function pararRelogio() {
  relogioRodando = false;
  clearInterval(relogioTimer);
  tempoRestanteNaSessao = 1500;
  contador.innerText = "25:00";
}

function pausarRelogio() {
  clearInterval(relogioTimer);
  relogioRodando = false;
}

function iniciarRelogio() {
  relogioRodando = true;
  relogioTimer = setInterval(() => {
    tempoRestanteNaSessao--;
    exibirTempoRestante();
  }, 1000);
}
