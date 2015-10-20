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

function playerMove(){
  var $info = $('#info');
	console.log("The dealer is showing: " + dealerHand[0] +
    "\nYou have: " + playerHand +
    "\nPlease choose if you would like to hit or stay.")

	action = ''
	if action = hit{
		var $hitButton = $('#hit-button')
		playerHand.push(cards.pop());
	}
}

//function to declare value. If an ace, the value is one, if the card is not an ace or and integer- a face card- the value is 10
function cardValue(card){
  card = card[0];
  if (card=='Ace'){
    return 1;
  } else if (!!parseInt(card)){
    return parseInt(card);
  } else{
    return 10;
  }
}
// console.log(cardValue)

// get value of the hand
function getTotal(hand){
  sum = [0];
  for (var card = 0;card<hand.length;card++){
    sum[0] += cardWorth(hand[card]);
  }
}
// console.log(getTotal)

//dealer must hit if their total is less than 17
function dealerMustHit(){
  if (getTotal(dealerHand) < 17){
    dealerHand.push(cards.pop())
  }
}
console.log(dealerMustHit);


function findWinner(player, dealer){
  if (player > 21) {
    return "You Bust!";
  } else if (dealer > 21) {
    return "Dealer Busts!";
  } else if (player == dealer){
    return "Push!";
  } else if (player > dealer){
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

//create a function that will start the game by clicking the deal button and dealing out the shuffled cards to the players
$(function () {
	var $startGame = $('#deal-button');
	$startGame.click(function(){
		deck();
		shuffle(cards);
		deal()
		playerMove();
		cardValue();
		getTotal();
		dealerMustHit();
		findWinner();
	})
})


// Gameplan
// • MVP
// - storage for 52 cards
// - Each card has value 
// - Ace can be 1 or 11
// - Face cards are 10
// - 21 means blackjack and u win
// - dealer has to hit if total under 17
// - players can stay 
// - player can hit to get another card
// - cards are random      
// - cards are distributed into hands   
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