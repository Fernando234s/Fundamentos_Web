function verificaVelocidade() {
    var inPermitida = document.getElementById("inPermitida");
    var inCondutor = document.getElementById("inCondutor");
    var outSituacao = document.getElementById("outSituacao");

    var permitida = Number(inPermitida.value);
    var condutor = Number(inCondutor.value);

    if(condutor <= permitida) {
        outSituacao.textContent = "Situação: Sem Multa";
    } else if (condutor <= (permitida * 1.2)){
        outSituacao.textContent = "Situação: Multa Leve";
    } else {
        outSituacao.textContent = "Situação: Multa pesada";
    }
}

var btVerifica = document.getElementById("btVerifica");
btVerifica.addEventListener("click", verificaVelocidade);
