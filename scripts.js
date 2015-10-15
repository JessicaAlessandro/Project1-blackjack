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
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];
    
    for( s = 0; s < this.suits.length; s++ ) {
        for( n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
    }

    return cards;
}

var newDeck = new deck();

// console.log(newDeck);


window.onload= function (e){
	//loop through each card
	for(var i=0; i < newDeck.length; i++){
		//create div for cards
		var $div = $('<div></div>')
		$div.addClass('card');
			// console.log($div)

		//set the suit to it's unicode character equivialant, and add css element to add color red to hearts and diamonds
		if(newDeck[i].suit == 'Hearts'){
			$div.css('color', 'red')
			var character = "\u2665";
		} else if (newDeck[i].suit == 'Diamonds'){
			$div.css('color', 'red')
			var character = "\u2666";
		}else if (newDeck[i].suit == 'Spades'){
			var character = "\u2660";
		} else{
			var character = "\u2663"
		}

		//add text to new div that will have the name and the suit on unicode
		$div.html('' + newDeck[i].name + '<br>' + character + '');
		$('#container').append($div)
	}
}

// RANDOMize the order of the cards usinf sort and math random

newDeck.sort(function() { return 0.5 - Math.random() }); 

