function sendDificulty(){
    var selectElement = document.getElementById("game-options");
    var dificulty = selectElement.value

    switch (dificulty){
        case "facil":
            jogoAdivinhacao(6, 15, true)
        break;
        case "medio":
            jogoAdivinhacao(4, 30, true)
        break;
        case "hard":
            jogoAdivinhacao(2, 50, false)
        break;
        default:
            alert("Escolha uma dificuldade válida.")
    }
}

function jogoAdivinhacao(chances, maxNumber, showTip){
    var randomNum = Math.floor(Math.random() * (maxNumber + 1));
    for (var i = 0; i < chances; i++){
        var userAttempt = prompt('Tentativa '+(i+1)+'/'+chances+'. Digite um número entre 0 e ' + maxNumber + ": ")
    }
}


