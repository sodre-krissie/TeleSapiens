
/*

<div class="funçao">TeleSapiens_GeniallyFunctions</div><script defer type="text/javascript" src="https://github.com/sodre-krissie/TeleSapiens/blob/main/TS_GeniallyFunctions.js"></script>


*/

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "https://github.com/sodre-krissie/TeleSapiens",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

/* Códigos iniciam aqui 

var html2canvas = document.createElement('script');
html2canvas.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.head.appendChild(html2canvas);

var FileSaver = document.createElement('script');
FileSaver.src = "https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js";
document.head.appendChild(FileSaver);

*/

document.getElementById("botao2").onclick = function takeScreenshot(){

    console.log("Deu certo!");
}