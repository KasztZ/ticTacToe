const buttons = document.querySelectorAll('.gameLine')
let turnPlayer = document.querySelector('#turnPlayer')
let gameWinner = false
let switchMode = (`X`)
let winnerPlayer = ('')
let gameSlots = [
    document.querySelector('#topLeft'),
    document.querySelector('#topMiddle'),
    document.querySelector('#topRight'),
    document.querySelector('#middleLeft'),
    document.querySelector('#middleMiddle'),
    document.querySelector('#middleRight'),
    document.querySelector('#bottomLeft'),
    document.querySelector('#bottomMiddle'),
    document.querySelector('#bottomRight'),
]
let gameTurn = 0
const modalHowToPlay = document.querySelector('#modalHowToPlay')
const buttonHowToPlay = document.querySelector('#buttonHowToPlay')
const closeButton = document.querySelector('.closeButton')[0]

let turnHistory = [document.querySelector('#turnHistory')]
const newDiv = document.createElement('div')
const gamePlay = [
    `O jogador  jogou na casa Topo Esquerdo`,
    `O jogador  jogou na casa Topo Meio`,
    `O jogador  jogou na casa Topo Direito`,
    `O jogador  jogou na casa Meio Esquerdo`,
    `O jogador  jogou na casa Topo Meio`,
    `O jogador  jogou na casa Topo Direito`,
    `O jogador  jogou na casa Baixo Esquerdo`,
    `O jogador  jogou na casa Baixo Meio`,
    `O jogador  jogou na casa Baixo Direito`,
]

function switchPlayer () {
    if (switchMode == `X`) {
        switchMode = `O`
        turnPlayer.innerHTML = `Turno do jogador: (${switchMode})`
    } else {
        switchMode = `X`
        turnPlayer.innerHTML = `Turno do jogador: (${switchMode})`
    }
}

function checkGameWinner () {
        if (
            gameSlots[0].innerHTML && gameSlots[0].innerHTML == gameSlots[1].innerHTML && gameSlots[1].innerHTML == gameSlots[2].innerHTML|| // 1a linha 
            gameSlots[3].innerHTML && gameSlots[3].innerHTML == gameSlots[4].innerHTML && gameSlots[4].innerHTML == gameSlots[5].innerHTML|| // 2a linha
            gameSlots[6].innerHTML && gameSlots[6].innerHTML == gameSlots[7].innerHTML && gameSlots[7].innerHTML == gameSlots[8].innerHTML|| // 3a linha
            gameSlots[0].innerHTML && gameSlots[0].innerHTML == gameSlots[3].innerHTML && gameSlots[3].innerHTML == gameSlots[6].innerHTML|| // 1a coluna
            gameSlots[1].innerHTML && gameSlots[1].innerHTML == gameSlots[4].innerHTML && gameSlots[4].innerHTML == gameSlots[7].innerHTML|| // 2a coluna
            gameSlots[2].innerHTML && gameSlots[2].innerHTML == gameSlots[5].innerHTML && gameSlots[5].innerHTML == gameSlots[8].innerHTML|| // 3a coluna
            gameSlots[0].innerHTML && gameSlots[0].innerHTML == gameSlots[4].innerHTML && gameSlots[4].innerHTML == gameSlots[8].innerHTML|| // 1a diagonal
            gameSlots[2].innerHTML && gameSlots[2].innerHTML == gameSlots[4].innerHTML && gameSlots[4].innerHTML == gameSlots[6].innerHTML   // 2a diagonal
            ) {
            return true
        } else {
            return false
        }
}

buttons.forEach( (button, index) => {
    button.addEventListener('click', () => {
        button.innerHTML = switchMode
        button.disabled = true
        winnerPlayer = switchMode
        switchPlayer ()
        gameTurn += 1



        



        newDiv.appendChild = (gamePlay, index)
        document.body.insertBefore(newDiv, turnHistory)










        if (gameTurn >= 5) {
            if (checkGameWinner() == true) {
                window.alert(`O vencedor do jogo foi o jogador ${winnerPlayer}`)
                window.location.reload();
            }
        }
    })
})

buttonHowToPlay.addEventListener('click', () => {
    modalHowToPlay.style.display = "block"
    window.onclick = function(event) {
        if (event.target == modalHowToPlay) {
          modalHowToPlay.style.display = "none";
        }
    }
    closeButton.addEventListener('click', () => {
        modalHowToPlay.style.display = "none";
    })
})


/*
    window.addEventListener('click', () => {
        modalHowToPlay.style.display = "none"
    })
    

    closeButton.onclick = function () {
        modalHowToPlay.style.display = "none"
    }
*/