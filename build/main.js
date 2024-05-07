let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player = {
    name: "Player",
    chips: 145
}

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name+ ": $" + player.chips

function randomCard() {
    var rand = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
    if(rand > 10) {
        return 10
    } else if (rand === 1) {
        return 11
    } else {
        return rand
    }
}


function startGame () {
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Win! "
        hasBlackJack = true
    } else {
        message = "Lost! "
        isAlive = false
    }
    messageEl.textContent= message
    
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = randomCard();
        sum += card;
        cards.push(card)
        renderGame()
    } else {
        cards=delete(cards)
        message = "Play New Game"
        renderGame()
    }
}