/*
tags utilizadas:

class = "ponto"
id = "pontoA1" <= A para alternativas e R para respostas e número para a opção.
data-i="A1" <= segue a lógica de cima.
onclick="pontoAlternativa('A1')"

*/

/* variáveis das alternativas e respostas:
let combinacoesCertas = [
    [aA1, rR1],
    [aA2, rR2],
    [aA3, rR3],
    [aA4, rR4],
];*/

/*
function init(){
//resumo das IDs:
A1 = false;
A2 = false;
A3 = false;
A4 = false;
R1 = false;
R2 = false;
R3 = false;
R4 = false;
}

init();

function init(){
    var A1 = document.getElementById("pontoA1");
    var A2 = document.getElementById("pontoA2");
    var A3 = document.getElementById("pontoA3");
    var R1 = document.getElementById("pontoR1");
    var R2 = document.getElementById("pontoR2");
    var R3 = document.getElementById("pontoR3");
    console.warn("Aqui foi?");

    return;
}*/

    let A = false;
    let R = false;


//Função dos botões
function pontoAlternativa(idPonto){
    let x1 = event.clientX;
    let y1 = event.clientY;
    console.log(idPonto+"; X: " + x1 + ", Y: " + y1);

    if(R===false){
        ctx.beginPath(); 
        ctx.moveTo(x1,y1);
    }else{
        ctx.lineTo(x1,y1);
        ctx.closePath();
        ctx.strokeStyle = "#E65100";
        ctx.stroke();
        console.log("Linha finalizada");
    }

    let A = true;
    return A;
}

function pontoResposta(idPonto){
    let x2 = event.clientX;
    let y2 = event.clientY;
    console.log(idPonto+"; X: " + x2 + ", Y: " + y2);

    if(A===false){
        ctx.beginPath(); 
        ctx.moveTo(x2,y2);
    }else{
        ctx.lineTo(x2,y2);
        ctx.closePath();
        ctx.strokeStyle = "#E65100";
        ctx.stroke();
        console.log("Linha finalizada");
    }

    let R = true;
    return R;
}



//verifica se as alternativas foram ligadas corretamente:
function verificaQuestao(respostaCerta){
        console.warn("Parece ok");
    
}