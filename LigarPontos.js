
// let alternativasPontos = ['A1', 'A2', 'A3', 'A4']
// let respostasPontos = ['R1', 'R2', 'R3', 'R4']

let alternativasPontos = false;
let respostasPontos = false;

function check(){
    console.warn("Checado");
    ctx.beginPath();
    ctx.closePath();

    alternativasPontos = false;
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


    alternativasPontos = true;
    return alternativasPontos;
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