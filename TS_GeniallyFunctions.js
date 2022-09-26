
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

Inseriur código para habilitar CORS

*/

/* Códigos iniciam aqui */

header("Content-Type: application/javascript")
header("Access-Control-Allow-Origin: https://github.com/sodre-krissie/TeleSapiens/");
header("Access-Control-Allow-Methods: GET, POST, PUT");
//jQuery.support.cors = true;

var html2canvas = document.createElement('script');
html2canvas.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.head.appendChild(html2canvas);

var FileSaver = document.createElement('script');
FileSaver.src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js";
document.head.appendChild(FileSaver);

var jQuery = document.createElement('script');
jQuery.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
document.head.appendChild(jQuery);


function takeScreenshot(){
    console.log("Botão clicado");
    html2canvas(document.body).then(canvas => {
    canvas.toBlob(function(blob) {
    window.saveAs(blob, 'my_image.png');
    console.log("Screenshot finalizado");
    });
    });
}

