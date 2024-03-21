var selectDificulty = document.getElementById('game-options');

var gameEasy = document.getElementById('game-easy');
var gameMedium = document.getElementById('game-medium');
var gameHard = document.getElementById('game-hard');

function show() {
    var dificultyChose = selectDificulty.value

    gameEasy.style.display = "none"
    gameMedium.style.display = "none"
    gameHard.style.display = "none"

    switch (dificultyChose) {
        case "f":
            var gameEasyDiv = document.getElementById('game-easy')
            gameEasyDiv.style.display = "block";
            gameEasyDiv.scrollIntoView({ behavior: 'smooth', block: 'start' })
            break;
        case "m":
            var gameMediumDiv = document.getElementById('game-medium')
            gameMediumDiv.style.display = "block";
            gameMediumDiv.scrollIntoView({ behavior: 'smooth', block: 'start' })
            break;
        case "d":
            var gameHardDiv = document.getElementById('game-hard')
            gameHardDiv.style.display = "block";
            gameHardDiv.scrollIntoView({ behavior: 'smooth', block: 'start' })
            break;
        default:
            console.log('Escolha inválida.')
    }
}

//gameEasyDiv.scrollIntoView({behavior: 'smooth', block: 'start'})
//gameMediumDiv.scrollIntoView({behavior: 'smooth', block: 'start'})
//gameHardDiv.scrollIntoView({behavior: 'smooth', block: 'start'})
