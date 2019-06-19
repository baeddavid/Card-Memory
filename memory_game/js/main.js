let card = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank:'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank:'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank:'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    },
];
let cardsInPlay = [];
let pointsArr = [0,0];

function checkForMatch() {
    if(cardsInPlay[0] === cardsInPlay[1]){
        alert('You found a match!');
        pointsArr[0]++;
        document.getElementById('counterP').innerHTML = pointsArr[0];
    }
     else{
        alert('It is not a match');
        pointsArr[1]++;
        document.getElementById('counterC').innerHTML = pointsArr[1];
    }
    winCondition();
};

function winCondition() {
    if(pointsArr[0] === 5)
        alert('Player 1 Wins!');
    else if(pointsArr[1] === 5)
        alert('Player 2 Wins!');
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsInPlay.push(card[cardId].rank);
    this.setAttribute('src', card[cardId].cardImage);
    if(cardsInPlay.length === 2) {
        checkForMatch();
    }
};

function createBoard() {
    const table = document.getElementById('game-board');
    card = sattoloCycle(card);
    for(let i = 0; i < card.length; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('class', 'reset');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        table.appendChild(cardElement);
    }
    resetBoard();
};

function helper() {
    while(cardsInPlay.length > 0)
        cardsInPlay.pop();
    card = sattoloCycle(card);
    for(let i = 0; i < card.length; i++){
        let cardElementArr = document.getElementsByClassName('reset');
        for(let i = 0; i < cardElementArr.length; i++){
            let cardElement = cardElementArr[i];
            cardElement.setAttribute('src', 'images/back.png');
        }
    }
};

function resetBoard() {
    document.getElementById("myBtn").addEventListener("click", helper);
};

// Shuffles the cards
function sattoloCycle(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

createBoard();
