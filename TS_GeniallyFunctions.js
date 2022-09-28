
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

Códigos desenvolvidos pela TeleSapiens
Em caso de erro, acionar: ksodrE@telesapiens.com.br

*/
/*

Inserir código em Node.js (?) para habilitar CORS no Genial.ly
npm install

*/

/* Códigos iniciam aqui */


const html2canvas = document.createElement('script');
html2canvas.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.head.appendChild(html2canvas);

const FileSaver = document.createElement('script');
FileSaver.src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js";
document.head.appendChild(FileSaver);

const jQuery = document.createElement('script');
jQuery.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
document.head.appendChild(jQuery);

//Função de Screenshot (printscreen)

function takeScreenshot(){
    console.log("Botão clicado");
    html2canvas(document.body).then(canvas => {
        canvas.toBlob(function(blob) {
        window.saveAs(blob, 'TS_MinhaImagem.png');
        console.log("Screenshot finalizado");
        });
    });
}

// Função de Feedback Negativo

    var tentativa = 1;
    
function feedNegativo(){
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

function feedNegativo2(){
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

document.getElementById("avance").style.visibility = "hidden";

function opacityHideToVisible(){
    document.getElementById("avance").style.visibility = "visible";
    console.log("PARABENS, VOCE ACERTOU!")   
}