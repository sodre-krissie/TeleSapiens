
/* Copiar abaixo:

<link rel="stylesheet" href="https://msbarquitetura.com.br/TS_style.css">
<div class="funçao">TeleSapiens_GeniallyFunctions</div>
<script async type="application/javascript" src="https://www.msbarquitetura.com.br/TS_GeniallyFunctions.js"></script>


/\  Copiar até aqui e inserir na tela do Genial.ly


Códigos desenvolvidos pela TeleSapiens EdTech 
linkedIn: https://www.linkedin.com/company/telesapiens

Em caso de erro, acionar: Krissie Sodré 
ksodrE@telesapiens.com.br
linkedIn: https://www.linkedin.com/in/sodre-krissie


Agora que você está preparado, os...
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

console.log("Aplicação iniciada");

//Função de Screenshot (printscreen)

function takeScreenshot(){
    console.log("Screenshot iniciado");
    html2canvas(document.body).then(canvas => {
        canvas.toBlob(function(blob) {
        window.saveAs(blob, 'TS_MinhaImagem.png');
        // Função de Avançar após Screenshot
        //document.getElementById("avance").style.visibility = "visible";
        console.log("Screenshot finalizado");
        });
    });
    window.parent.postMessage({ 
			'func': 'takeScreenshotParent',
			'id_slide': '1'
		}, "*" ) 
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

// Função de desenho livre

let canvas = document.getElementById("TS_canvas");
let context = canvas.getContext('2d');

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

let d = 8;
let diametro = d;

  function drawPoint(context, x, y) {
    console.log(`x: ${x}, y: ${y}`)
    context.beginPath();		  
    context.arc(x, y, diametro, 0, 2 * Math.PI, false);
    context.closePath();
    context.fill();
  }

  let isHold = false

  document.getElementById("TS_canvas").onmousedown = function(){
    isHold = true
  }
  document.getElementById("TS_canvas").onmouseup = function(){
    isHold = false
  }

  document.getElementById("TS_canvas").onmousemove = function (event) {
    if(isHold == false) {
      return null
    }
  drawPoint(context, event.clientX, event.clientY)
  }

    //Função Botão Vermelho
    function TS_botaoVermelho(){
      context.fillStyle='rgb(255,0,0)';
      diametro = d;
      console.log("Botão vermelho acionado");
    }

    //Função Botão Azul
    document.getElementById('btnBlue').onclick=function botaoAzul(){
        context.fillStyle='rgb(1, 182, 237)';
  diametro = d;
        console.log("Botão azul");
    }
    //Função Botão Amarelo
    document.getElementById('btnYellow').onclick=function botaoAmarelo(){
        context.fillStyle='rgb(255,213,0)';
  diametro = d;
        console.log("Botão amarelo");
    }
    //Função Botão Verde
    document.getElementById('btnGreen').onclick=function botaoVerde(){
        context.fillStyle='rgb(148,193,31)';
  diametro = d;
        console.log("Botão verde");
    }
    //Função Borracha
    document.getElementById('btnErase').onclick=function botaoBorracha(){
        context.clearRect(0, 0, WIDTH, HEIGHT);
        console.log("Botão borracha");
    }
    //Função Botão Preto
    document.getElementById('btnBlack').onclick=function botaoPreto(){
        context.fillStyle='rgb(0,0,0)';
  diametro = d;
        console.log("Botão preto");
    }

/*

//Função de jogo da memória (selecionar figuras similares permanece as opções corretas na tela)

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

*/