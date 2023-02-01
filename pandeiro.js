
const playingClass = 'playing';


//ativar o som

const playSound = e => {
    // fazer que a "div" seja acionada
    // a variável que vai receber o valor da tecla pressionada
    const keyCode = e.keyCode;
    // colocando o valor da tecla na variável "keyElement"
    // o "data-key" está refereciando o valor da tecla la no html
    // <div data-key="82" class="key dedo-frente">
    keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
    // controlar para o código receber na variável as teclas utilizadas
    if(!keyElement) return;
    
    // fazer que o elemento aúdio também seja acionado
    // <audio data-key="82" src="audio/dedo-frente.mp3"></audio>
    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    // função que faz o audio tocar em um determinado segundo
    audioElement.currentTime = 0;
    // função que toca o aúdio
    audioElement.play();


    //fazendo o botão aumentar de tamanho quando acionado
    //basicamente:
    //<div data-key="82" class="key dedo-frente">
    //a "div" acima tem a classe "key dedo-frente"
    //com a função abaixo ela recebe uma nova classe
    //nesse caso ela vai receber a classe que está na variável "playingClass"
    //essa classe(no CSS) da o efeito de aumentar o tamanho da figura
    keyElement.classList.add(playingClass)
}

// A função que remove os efeitos do css adicionados

const removeKeyTransition = e => {
    if(e.propertyName !== 'transform') return;

    e.target.classList.remove(playingClass);
}


const pandeiroKeys = Array.from(document.querySelectorAll('.key'));
pandeiroKeys.forEach(key => {
    key.addEventListener('transitionend',removeKeyTransition);
})

// chamando o efeito keydown("acionando o teclado")
// ele é disparado quando uma tecla é presionada
window.addEventListener('keydown',playSound);

