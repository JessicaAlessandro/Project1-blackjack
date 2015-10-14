- create deck —> array (of two)
- shuffle deck 
- player places a bet ==> prompt / textbox on screen 
- pop 1 card out of array for player and dealer. dealers card remains hidden
- pop second card out of array for both dealer and player
Player:
if player has 21 total from those 2 cards, they get 1.5 times their original bet
if player not, player can either stand or hit
if hit- pop another card from array
if over 21: player loses bet
if at 21, player is in the game but has no more moves
is under 21, they have the option to hit or stay
Dealer:
once player stands, dealer reveals their hidden card
if 16 or less, dealer hits
if over 21, dealer loses
is between 17 and 21 dealer does not hit
-Check for winer
if player folds, dealer wins and player loses their bet
if not, check the dealer total against the player total
if dealer wins, player loses bet
if player wins, they get 2 times their bet
if it’s a tie.. it’s a push and player does not lose or win anything
Check remaining cards
if less than a certain amount, deck is shuffled


===============================================
||  deck = array 	   		 ||  deal = button   ||
||  player = variable	   ||  hit = button 	 ||
||  dealer = variable	   ||  stand = button	 ||
||  place bet = prompt 	 ||			             ||
||  bet = variable	     ||			             ||
===============================================


Bank Roll : start with &1000
	- if winner = player —> bet + bankroll
	- if winner = dealer —> bankroll - bet
	- if  player gets blackjack —> bet x 1.5 + bankroll

shuffle is going to be a loop
 
