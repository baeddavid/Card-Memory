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

function checkForMatch() {
    if(cardsInPlay[0] === cardsInPlay[1])
        alert('You found a match!');
     else
        alert('It is not a match');
};

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
    for(let i = 0; i < card.length; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        table.appendChild(cardElement);
    }
};

createBoard();
