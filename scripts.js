//create a card
var card = function (value, name, suit){
	this.value = value;
	this.names = name;
	this.suit = suit;
}

// console.log(card);
var cards = [];
// create a function that will return an array of all 52 cards
var deck = function (){
	this.names = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
	// set the suit to it's unicode character equivialant
	this.suits = ['\u2665','\u2666','\u2660','\u2663'];    
  for( s = 0; s < this.suits.length; s++ ) {
      for( n = 0; n < this.names.length; n++ ) {
				// use an object constructor to create a new card 
          cards.push( new card( n+1, this.names[n], this.suits[s] ) );
      }
  }
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
}


// create the two players
var dealerHand = [];
var playerHand = [];

var players = [playerHand,dealerHand];

 // deal each player two cards by popping it off the deck 
var deal = function(){
	for (var p = 0;p<players.length;p++){
	  players[p].push(cards.pop());
	  players[p].push(cards.pop());
	}
	
	//show player the cars and give him/her an option to stay or hit
	//dealerHand[0] only shows one of the dealers cards
	}
}

//create a function that will start the game by clicking the deal button and dealing out the shuffled cards to the players
$(function () {
	var $startGame = $('#deal-button');
	$startGame.click(function(){
		deck();
		shuffle(cards);
		deal()
	})
})


// Gameplan
// • MVP
// - storage for 52 cards DONE
// - Each card has value 
// - Ace can be 1 or 11
// - Face cards are 10
// - 21 means blackjack and u win
// - dealer has to hit if total under 17
// - players can stay 
// - player can hit to get another card
// - cards are random      DONE
// - cards are distributed into hands   DONE
// - bust is over 21
// - draw if tied
// - buttons on click
// - some form of visual represenation of your data
// - I can play more than 1 hand without resetting the page


// • Bonuses
// - Images
// - Complex game mechanics: insurance, splitting
// - Betting
// - Super nice css and stuff


// Things to consider:
// 1. Keep it dry: 1 function does 1 thing well
// 2. Tranforms game talk into Pseudo code
// 3. If the pseudo code is not 1 function, break it down even further