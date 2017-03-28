/*if we have a deck of cards and we want to flip cards (loop a card flipping function) until we get a 'Spade', how could we write that in JavaScript?
*/
var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';

while (currentCard !== 'Spade') {
	
  var randomNumber = 
  Math.floor(Math.random() * 4);
  
  currentCard = cards[randomNumber];
}

console.log('You found a Spade!');