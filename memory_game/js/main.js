let card = ['queen','queen','king','king'];
let cardsInPlay = [];

function checkForMatch() {
    if(cardsInPlay[0] === cardsInPlay[1])
        console.log('You found a match!');
     else
        console.log('It is not a match');
};

function flipCard(cardID) {
    console.log('user flipped ' + card[cardID]);
    cardsInPlay.push(card[cardID]);
    if(cardsInPlay.length === 2) {
        checkForMatch();
    }
};

flipCard(0);
flipCard(2);
