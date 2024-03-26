let randomNumber;
let chanceRest;

function startGame() {
    let selectDificulty = document.getElementById('game-options').value;

    switch(selectDificulty) {
        case "f":
            chanceRest = 6;
            randomNumber = Math.floor(Math.random() * 16);
            break;
        case "m":
            chanceRest = 4;
            randomNumber = Math.floor(Math.random() * 31);
            break;
        case "d":
            chanceRest = 2;
            randomNumber = Math.floor(Math.random() * 51);
            break;
        default:
            alert('Escolha de dificuldade inválida.');
            return;
    }

    updateChanceDisplay();

    clearInput();

    document.getElementById('visualNum').innerText = `O número é: ???`;
}

function checkGuess() {
    let userGuess = parseInt(document.querySelector('.user-try').value);

    if (isNaN(userGuess) || userGuess < 0 || userGuess > getGuessLimit()) {
        alert(`Por favor, insira um número válido entre 0 e ${getGuessLimit()}.`);
        clearInput();
        return;
    }

    clearInput();

    if (chanceRest > 0){
        chanceRest--;

        updateChanceDisplay();

        if (userGuess === randomNumber) {
            document.getElementById('more-less').innerText = `Parabéns! Você acertou o número ${randomNumber}!`;
        } else {
            let hint = (userGuess < randomNumber) ? 'maior' : 'menor';
            document.getElementById('more-less').innerText = `Tente um número ${hint}!`;
        }
    } else {
        document.getElementById('more-less').innerText = `Game over!`;
    }
}

function getGuessLimit() {
    let selectDificulty = document.getElementById('game-options').value;
    switch(selectDificulty) {
        case "f":
            return 15;
        case "m":
            return 30;
        case "d":
            return 50;
        default:
            return 100;
    }
}

function updateChanceDisplay() {
    document.getElementById('visualChance').innerText = `Chances restantes: ${chanceRest}`;
}

function clearInput() {
    document.querySelector('.user-try').value = '';
}

document.getElementById('easy-send').addEventListener('click', checkGuess);
document.getElementById('medium-send').addEventListener('click', checkGuess);
document.getElementById('hard-send').addEventListener('click', checkGuess);

document.getElementById('easy-quit').addEventListener('click', startGame);
document.getElementById('medium-quit').addEventListener('click', startGame);
document.getElementById('hard-quit').addEventListener('click', startGame);

window.onload = startGame;

function desist(){
    let gameEasy = document.getElementById('game-easy');
    let gameMedium = document.getElementById('game-medium');
    let gameHard = document.getElementById('game-hard');

    gameEasy.style.display = "none"
    gameMedium.style.display = "none"
    gameHard.style.display = "none"
    document.querySelector('.user-try').value = '';
    
}
