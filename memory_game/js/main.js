let card = ['queen','queen','king','king'];
let cardsInPlay = [];

let cardOne = card[0];
let cardTwo = card[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log('User flipped ' + cardsInPlay[0]);
console.log('User flipped ' + cardsInPlay[1]);

if(cardsInPlay.length === 2) {
    if(cardsInPlay[0] === cardsInPlay[1])
        alert('You found a match!');
     else
        alert('It is not a match');
}
