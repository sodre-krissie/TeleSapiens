
/* Copiar abaixo:

<style>
.funçao{
    background-color: #E74C3C;
    color: #ECF0F1;
}
</style>
<div class="funçao">TeleSapiens_GeniallyFunctions</div><script async type="application/javascript" src="https://github.com/sodre-krissie/TeleSapiens/blob/main/TS_GeniallyFunctions.js"></script>

//Copiar até aqui e inserir na tela do Genial.ly */

/*

Códigos desenvolvidos pela TeleSapiens EdTech 
linkedIn: https://www.linkedin.com/company/telesapiens

Em caso de erro, acionar: Krissie Sodré 
ksodrE@telesapiens.com.br
linkedIn: https://www.linkedin.com/in/sodre-krissie

*/
/*

Inserir código em Node.js (?) para habilitar CORB no Genial.ly
npm install

*/

/* Agora que você está preparado, os...
Códigos iniciam a partir desse ponto */


//não trocar "var" por "const" ou "let"
var html2canvas = document.createElement('script');
html2canvas.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.head.appendChild(html2canvas);

var FileSaver = document.createElement('script');
FileSaver.src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js";
document.head.appendChild(FileSaver);

var jQuery = document.createElement('script');
jQuery.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
document.head.appendChild(jQuery);

//Botão de avançar fica escondido até alguma função disparar para ele aparecer
//document.getElementById("avance").style.visibility = "hidden";


//Função de Screenshot (printscreen)

function takeScreenshot(){
    console.log("Botão clicado");
    html2canvas(document.body).then(canvas => {
        canvas.toBlob(function(blob) {
        window.saveAs(blob, 'TS_MinhaImagem.png');
        // Função de Avançar após Screenshot
        document.getElementById("avance").style.visibility = "visible";
        console.log("Screenshot finalizado");
        });
    });
}

// Função de Feedback Negativo (2 tentativas)

    var tentativa = 1;
    
function feedNegativo2(){
    //inserir abaixo a quantidade máxima de tentativas:
    var numeroMaximoTentativa = 2;

    if (tentativa < numeroMaximoTentativa) {
        console.log("TENTATIVA "+ tentativa+" DE "+numeroMaximoTentativa);
        alert("ESSA FOI SUA TENTATIVA "+tentativa+" DE "+numeroMaximoTentativa+".\nVOCE ERROU.\nTENTE NOVAMENTE.");
        tentativa++;
        
    }else{
        console.log("TENTATIVA "+ tentativa+" DE "+numeroMaximoTentativa);
        alert("ESSA FOI SUA TENTATIVA "+tentativa+" DE "+numeroMaximoTentativa+".\nVOCE ATINGIU O NUMERO MAXIMO DE ERROS.\nCHAME O EDUCADOR PARA AJUDA-LO.");
        tentativa++;
    }
}


// Função de Feedback Negativo (3 tentativas)

function feedNegativo3(){
    //inserir abaixo a quantidade máxima de tentativas:
    var numeroMaximoTentativa = 3;
    
    if (tentativa < numeroMaximoTentativa) {
        console.log("TENTATIVA "+ tentativa+" DE "+numeroMaximoTentativa);
        alert("ESSA FOI SUA TENTATIVA "+tentativa+" DE "+numeroMaximoTentativa+".\nVOCE ERROU.\nTENTE NOVAMENTE.");
        tentativa++;
        
    }else{
        console.log("TENTATIVA "+ tentativa+" DE "+numeroMaximoTentativa);
        alert("ESSA FOI SUA TENTATIVA "+tentativa+" DE "+numeroMaximoTentativa+".\nVOCE ATINGIU O NUMERO MAXIMO DE ERROS.\nCHAME O EDUCADOR PARA AJUDA-LO.");
        tentativa++;
    }
}


// Função de Feedback Positivo (botão de avançar aparece)

/*function opacityHideToVisible(){
    document.getElementById("avance").style.visibility = "visible";
    console.log("PARABENS, VOCE ACERTOU!");   
}*/


//Função de pares (selecionar figuras similares apaga as opções corretas na tela)

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));