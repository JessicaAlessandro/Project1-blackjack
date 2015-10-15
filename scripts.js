var playerHand = [];
var dealerHand = [];
var cards = [];

//create a card
var card = function (value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}
// console.log(card);

// create a function that will return an array of all 52 cards
var deck = function (){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	// set the suit to it's unicode character equivialant
	this.suits = ['\u2665','\u2666','\u2660','\u2663'];
    
    for( s = 0; s < this.suits.length; s++ ) {
        for( n = 0; n < this.names.length; n++ ) {
					// use an object constructor to create a new card 
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
    }
    // return cards;
}
// console.log(deck)

// RANDOMize the order of the cards math random
function shuffle(deck) {
  for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * deck.length);
      var temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
  }
  return deck;
}









// create a function that will deal and display the cards from the deck $('#deal-button');
$(function () {

	// grab DOM elements
	var $dealButton = $('#deal-button');

	// start game event
	deck();
	shuffle(cards);
	console.log(cards.length);
	

	// click events
	$dealButton.click(function(){
	 		console.log('clicked');
	 		var newCard1 = cards.pop();
	 		var newCard2 = cards.pop();
	 		// put card into playerhand or dealerhand
	 		// somehow . . . 
	 		console.log(newCard);
	 		console.log(cards.length);
	 		// displayPlayerCards();
	 		// displayDealerCards
	 		// checkWin();
	 });

	var displayPlayerCards = function() {
		// clear the div that contains player cards
		// render everything within the dealerhand array
		newCard1
		newCard2

		$playerHand = $(".player-cards")
		$playerCards = $('<div></div>')
		$playerCards.addClass('card');
		$playerHand.append(playerCards)
		$div.addClass('card');

		$div.html('' + newDeck[i].name + '<br>' + character + '');
		$('#container').append($div)



	}
	
	var displayDealerCards = function(){}

});
