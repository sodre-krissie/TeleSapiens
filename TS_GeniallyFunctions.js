
/*

<div class="funçao">TeleSapiens_GeniallyFunctions</div><script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js" async></script>

*/

var html2canvas = document.createElement('script');
html2canvas.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.head.appendChild(html2canvas);

var FileSaver = document.createElement('script');
FileSaver.src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js";
document.head.appendChild(FileSaver);


function takeScreenshot(){
    console.log("clique");
    html2canvas(document.body).then(canvas => {
    canvas.toBlob(function(blob) {
    window.saveAs(blob, 'my_image.png');
    console.log("Deu certo!");
    });
    });
}