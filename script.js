const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('faixa-seguinte');
const botaoVoltar = document.getElementById('faixa-anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let estatocando = 0;
let capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play(); //execução de ação
    botaoPlayPause.classList.remove('bi-play-circle-fill'); /*retirar botao deve perdar a classe quando musica tocar*/
    botaoPlayPause.classList.add('bi-pause-circle-fill');

}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill'); /*retirar botao deve perdar a classe quando musica tocar*/
    botaoPlayPause.classList.remove('bi-pause-circle-fill');

}
 
function tocarOuPausar(){
    if(estatocando === 0) {
        tocarFaixa();
        estatocando = 1;
    } else {
        pausarFaixa();
        estatocando = 0;
    }
}

function faixaSeguinte(){
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual +'.mp3'
    tocarFaixa();
    estatocando = 1;
}

function faixaAnterior() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + '.mp3'
    tocarFaixa();
    estatocando = 1;
    trocarNomeFaixa();

}

function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'capitulo ' + capituloAtual; /*concatenação*/
}

botaoPlayPause.addEventListener ('click', tocarOuPausar);/*adicione a esse botao capacidade de escutar,interações, eventos*/
botaoAvancar.addEventListener ('click', faixaSeguinte);
botaoVoltar.addEventListener ('click', faixaAnterior);
