/*

<link rel="stylesheet" href="https://bit.ly/3f2nSUc">
<div class="funçao">TeleSapiens_LigarPontos</div>
<script defer type="application/javascript" src="https://msbarquitetura.com.br/LigarPontos.js" crossorigin="anonymous"></script>

*/

    // var _canvas = document.getElementById("meucanvas");
    // var ctx = _canvas.getContext("2d");

    // let WIDTH = document.documentElement.clientWidth;
    // let HEIGHT = document.documentElement.clientHeight;

    // _canvas.width = WIDTH;
    // _canvas.height = HEIGHT;

    // for (var x=0; x<=WIDTH; x=x+50){
    // ctx.moveTo(x,0);
    // ctx.lineTo(x,HEIGHT);
    // }

    // for (var y=0; y<=HEIGHT; y=y+50){
    // ctx.moveTo(0,y);
    // ctx.lineTo(WIDTH,y);
    // }
    // ctx.closePath();
    // ctx.strokeStyle = "#4FC3F7";
    // ctx.stroke();

// let alternativasLista = ['A1', 'A2', 'A3', 'A4'];
// let respostasLista = ['R1', 'R2', 'R3', 'R4'];

let alternativasPontos = false;
let respostasPontos = false;

let espessuraLinha = 10;


function check(){
    console.log("Checagem");
    ctx.beginPath();
    ctx.closePath();

    alternativasPontos = false;

    let botaoVerifica = document.getElementById("botaoVerifica");
        botaoVerifica.style.visibility = "visible";

}


function pontoAlternativa(idPonto){
    let x = event.clientX;
    let y = event.clientY;
    console.log(idPonto+"; X: " + x + ", Y: " + y);

    // Verifica qual elemento foi clicado:
    if (respostasPontos==true){
        console.log("Resposta clicada");
        ctx.lineTo(x,y);
        ctx.closePath();
        ctx.lineWidth = espessuraLinha;
        ctx.strokeStyle = "#E65100";
        ctx.stroke(); 
        console.warn("Linha finalizada");
        return check();
    }else{
        console.log("Resposta NAO clicada");
        ctx.beginPath(); 
        ctx.moveTo(x,y);
    }


        if(idPonto==='A1'){
            console.warn("Clicou em A1");
        }else if(idPonto==='A2'){
            console.warn("Clicou em A2");
        }else{(idPonto==='A3')
            console.warn("Clicou em A3");
        } 

   
    // let alternativaClicada = idPonto.toString();
    // console.log(alternativaClicada, typeof alternativaClicada);

    alternativasPontos = true;


    return {
        // alternativaClicada,
        alternativasPontos

    }
}


function pontoResposta(idPonto){
    let x = event.clientX;
    let y = event.clientY;
    console.log(idPonto+"; X: " + x + ", Y: " + y);

    // Verifica qual elemento foi clicado:
    if (alternativasPontos==true){
        console.log("Alternativa clicada");
        ctx.lineTo(x,y);
        ctx.closePath();
        ctx.lineWidth = espessuraLinha;
        ctx.strokeStyle = "#E65100";
        ctx.stroke();
        console.warn("Linha finalizada");
        return check();
    }else{
        console.log("Alternativa NAO clicada");
        ctx.beginPath(); 
        ctx.moveTo(x,y);
    }

        if(idPonto==='R1'){
            console.warn("Clicou em R1");
        }else if(idPonto==='R2'){
            console.warn("Clicou em R2");
        }else{(idPonto==='R3')
            console.warn("Clicou em R3");
        }

    respostasPontos = true;
    return respostasPontos;
}


function verificaQuestao(respostaCorreta){



    console.log(respostaCorreta);

}
