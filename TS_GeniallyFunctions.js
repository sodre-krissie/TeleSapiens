
/*

<div class="funçao">TeleSapiens_GeniallyFunctions</div><script defer type="text/javascript" src="https://github.com/sodre-krissie/TeleSapiens/blob/main/TS_GeniallyFunctions.js"></script>


*/

function handleOptions(request) {
    if (request.headers.get("Origin") !== null &&
        request.headers.get("Access-Control-Request-Method") !== null &&
        request.headers.get("Access-Control-Request-Headers") !== null) {
      // Handle CORS pre-flight request.
      return new Response(null, {
        headers: corsHeaders
      })
    } else {
      // Handle standard OPTIONS request.
      return new Response(null, {
        headers: {
          "Allow": "GET, OPTIONS",
        }
      })
    }
  }

    /* Códigos iniciam aqui 

var html2canvas = document.createElement('script');
html2canvas.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.head.appendChild(html2canvas);

var FileSaver = document.createElement('script');
FileSaver.src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js";
document.head.appendChild(FileSaver);

*/

function takeScreenshot(){

    console.log("Deu certo!");
}