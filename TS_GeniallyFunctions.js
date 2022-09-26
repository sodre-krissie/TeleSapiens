
/*

<div class="funçao">TeleSapiens_GeniallyFunctions</div><script defer type="text/javascript" src="https://github.com/sodre-krissie/TeleSapiens/blob/main/TS_GeniallyFunctions.js"></script>

*/

module.exports = {
    async Headers(){
        return[
            {
                source: '/:path*',
                Headers: [
                    {key: 'Access-Control-Allow-Credentials', value: 'true'},
                    {key: 'Access-Control-Allow-Origins', value: '*'},
                    {key: 'Access-Control-Allow-Origins', value: 'POST, GET, PUT, OPTIONS, DELETE, PATCH'},
                    {key: 'Access-Control-Allow-Headers', value: 'Content-Type'},
                ]
            }
        ]
    }
}



var html2canvas = document.createElement('script');
html2canvas.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.head.appendChild(html2canvas);

var FileSaver = document.createElement('script');
FileSaver.src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js";
document.head.appendChild(FileSaver);


function takeScreenshot(){

    console.log("Deu certo!");
}