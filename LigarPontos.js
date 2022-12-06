
// let alternativasLista = ['A1', 'A2', 'A3', 'A4'];
// let respostasLista = ['R1', 'R2', 'R3', 'R4'];

let alternativasPontos = false;
let respostasPontos = false;

function check(){
    console.warn("Checado");
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
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#E65100";
        ctx.stroke(); 
        console.log("Linha finalizada");
        return check();
    }else{
        console.warn("Resposta NAO clicada");
        ctx.beginPath(); 
        ctx.moveTo(x,y);
    }

    let alternativaClicada = idPonto.toString();

    alternativasPontos = true;
    return alternativasPontos, alternativaClicada;
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
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#E65100";
        ctx.stroke();
        console.log("Linha finalizada");
        return check();
    }else{
        console.warn("Alternativa NAO clicada");
        ctx.beginPath(); 
        ctx.moveTo(x,y);
    }

    respostasPontos = true;
    return respostasPontos;
}

function verificaQuestao(respostaCorreta){
    console.warn("Resposta correta: "+ respostaCorreta);
    // console.log(alternativaClicada);
        
}