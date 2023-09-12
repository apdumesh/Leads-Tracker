

let player ={
    name: "Umesh",
    chips: 500,
}


let cards = [] // array - ordered list of item
let sum = 0
let hasBlackJack = false
let message = ""
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playersEl = document.getElementById("player-el")
playersEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randonNumber = Math.floor(Math.random() * 13) + 1
    if (randonNumber === 1) {
        return 11
    }
    else if (randonNumber > 10) {
        return 10
    }
    else {
        return randonNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

 function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
 }

 function newCard() {
   if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
   }
 }