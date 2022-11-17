
/* Copiar abaixo:

<link rel="stylesheet" href="https://bit.ly/3f2nSUc">
<div class="funçao">TeleSapiens_GeniallyFunctions</div>
<script defer type="application/javascript" src="https://bit.ly/3zhBstH"></script>


/\  Copiar até aqui e inserir na tela do Genial.ly


Códigos desenvolvidos pela TeleSapiens EdTech 
linkedIn: https://www.linkedin.com/company/telesapiens

Em caso de erro, acionar: Krissie Sodré 
ksodrE@telesapiens.com.br
linkedIn: https://www.linkedin.com/in/sodre-krissie


Agora que você está preparado, os...
Códigos iniciam a partir desse ponto */


//não trocar "var" por "const" ou "let"

var htmlToImage = document.createElement('script');
htmlToImage.src = "https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.10.8/html-to-image.js";
document.head.appendChild(htmlToImage);

var html2canvas = document.createElement('script');
html2canvas.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.head.appendChild(html2canvas);

var FileSaver = document.createElement('script');
FileSaver.src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js";
document.head.appendChild(FileSaver);

var download = document.createElement('script');
download.src = "https://cdnjs.cloudflare.com/ajax/libs/downloadjs/1.4.8/download.min.js";
document.head.appendChild(download);

var jQuery = document.createElement('script');
jQuery.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
document.head.appendChild(jQuery);


//Botão de avançar fica escondido até alguma função disparar para ele aparecer
//document.getElementById("avance").style.visibility = "hidden";

console.log("Aplicação iniciada");

//Código inserido pelo Davi
window.parent.postMessage({ 
  'func': 'callAuthModal',
}, "*" )

// Solução do Davi para acabar com o corte da tela na função de print:

var altura = 0
var largura = 0

function ajustarTela(){

  altura = window.innerWidth;
  largura = window.innerHeight;

  console.log(altura);
  console.log(largura);

}

//Função de Screenshot (printscreen)


function takeScreenshot(id_slide) {
  var element = document.getElementsByClassName(
    "genially-view-not-is-mobile"
  )[0];

    //Código inserido pelo Davi
    window.parent.postMessage({
      'func': 'takeScreenshotParent',
      'id_slide': id_slide
    }, "*")

  htmlToImage.toPng(element).then(function (blob) {
    console.log(blob);
    localStorage.setItem("user_canvas_screenshot", blob);
    
  });
}


 /*
  console.log("Screenshot iniciado");
    htmlToImage.toPng(document.body)
    .then(function () {
      console.log(blob)
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                var base64data = reader.result;
                console.log(base64data);
                localStorage.setItem('user_canvas_screenshot', base64data);
            }
    });
      console.log("Screenshot finalizado");
}
  
  
 
  html2canvas(document.body).then(canvas => {
      canvas.toBlob(function (blob) {
          console.log(blob)
          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function () {
              var base64data = reader.result;
              console.log(base64data);
              localStorage.setItem('user_canvas_screenshot', base64data);
          }
      });

      console.log("Screenshot finalizado");

  });
  */

  let tentativa = 0;
  /*var id_slide = 0;
  var descricao = "descrição de atividade";
  var resposta_correta = "0";*/


// Função de Feedback Negativo (2 tentativas)

function feedNegativo(numeroMaximoTentativa, id_slide, descricao, resposta_correta) {
  //var numeroMaximoTentativa = 2;
  tentativa++;

    //Código inserido pelo Davi
    window.parent.postMessage({
      'func': 'registerAnswer',
      'id_slide': id_slide,
      'correct': 'false',
      'descricao': descricao,
      'tentativa': tentativa,
      'max-tentativas': numeroMaximoTentativa,
      'resposta_correta': resposta_correta,
    }, "*")

    console.log('enviou para o app');
    console.log('numero da tentativa: ' + tentativa);
    console.log('id_slide: ' + id_slide);
    console.log("alternativa: "+resposta_correta);


    // Zerando as tentativas quando chega no limite:
        if (tentativa < numeroMaximoTentativa) {         
        }else{        
            tentativa=0;
        }
}


// Função de Feedback Negativo (3 tentativas)
/*
//Desativada em 17/11/2022

function feedNegativo3() {
  var numeroMaximoTentativa = 3;
  tentativa++;

  //Código inserido pelo Davi
  window.parent.postMessage({
      'func': 'registerAnswer',
      'id_slide': id_slide,
      'correct': 'false',
      'descricao': descricao,
      'tentativa': tentativa,
      'max-tentativas': 3,
      'resposta_correta': resposta_correta,
  }, "*")

  console.log('enviou para o app');
  console.log('numero da tentativa: ' + tentativa);
  console.log('id_slide: ' + id_slide);
  console.log("alternativa: "+resposta_correta);

    // Zerando as tentativas quando chega no limite:
      if (tentativa < numeroMaximoTentativa) {         
      }else{        
          tentativa=0;
      }
}*/

//Função de Feedback Positivo

    function feedPositivo(resposta_correta){

      tentativa++;
      console.log("Resposta certa");
      console.log("alternativa: "+resposta_correta);

      //resetar as tentativas quando acertar:
      tentativa = 0;
/* 
      //Código inserido pelo Davi (retirado em 09/11/2022)
      window.parent.postMessage({
        'func': 'registerAnswer',
        'id_slide': id_slide,
        'descricao': descricao,
        'tentativa': tentativa        
      }, "*")

      console.log('enviou para o app');
      console.log('numero da tentativa: ' + tentativa);
      console.log('id_slide: ' + id_slide);

      
*/
    }

    /* Inserir em cada tela do genially, alterando os valores de X e Y:
    <div>Marcação de Slide</div>
    <script>
    let id_slide = X;
    let descricao = "Y";
    let resposta_correta = "resposta da atividade";
    </script>
    
    <div>Marcação Slide</div>
    <script>
    let id_slide = X;
    let descricao = "Y";
    </script>

    <div>Resposta Correta</div>
    <script>
    let resposta_correta = "resposta da atividade";
    </script>
    
    */

//Função de jogo da memória (selecionar figuras similares permanece as opções corretas na tela)
/*
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

    //Função Botão Amarelo
    function TS_botaoAmarelo(){
      context.fillStyle='rgb(255,213,0)';
      diametro = d;
      console.log("Botão amarelo acionado");
    }

    //Função Botão Azul
    function TS_botaoAzul(){
      context.fillStyle='rgb(1, 182, 237)';
      diametro = d;
      console.log("Botão azul acionado");
    }

    //Função Botão Preto
    function TS_botaoPreto(){
      context.fillStyle='rgb(0,0,0)';
      diametro = d;
      console.log("Botão preto");
    }

    //Função Botão Verde
    function TS_botaoVerde(){
      context.fillStyle='rgb(148,193,31)';
      diametro = d;
      console.log("Botão verde acionado");
    }

    //Função Botão Vermelho
    function TS_botaoVermelho(){
      context.fillStyle='rgb(255,0,0)';
      diametro = d;
      console.log("Botão vermelho acionado");
    }

    //Função Borracha
    function TS_botaoBorracha(){
      diametro = 20;
      context.fillStyle='rgb(244,244,246)';
      console.log("Botão borracha acionado");
    }
    
    //Função Limpa Tela
    function TS_limpaTela(){
      context.clearRect(0, 0, WIDTH, HEIGHT);
      console.log("Tela limpa");
    }

    //Função Marca Texto
    function TS_marcaTexto(){
      context.fillStyle='rgb(204,255,51)';
      diametro = 20;
      document.getElementById("TS_canvas").style.opacity = "0.5";
      console.log("Marca texto acionado");
    }
  
console.log("Aplicação finalizada");