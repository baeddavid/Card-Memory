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
    }
];
let cardsInPlay = [];

function checkForMatch() {
    if(cardsInPlay[0] === cardsInPlay[1])
        console.log('You found a match!');
     else
        console.log('It is not a match');
};

function flipCard(cardID) {
    console.log('user flipped ' + card[cardID].rank);
    console.log(card[cardID].cardImage);
    console.log(card[cardID].suit);
    cardsInPlay.push(card[cardID].rank);
    if(cardsInPlay.length === 2) {
        checkForMatch();
    }
};

flipCard(0);
flipCard(2);
