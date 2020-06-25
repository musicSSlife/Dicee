// variable declarations
var randomNumber1;
var x = Math.random();
randomNumber1 = (Math.floor(x*6)) +1;

var randomNumber2;
var y = Math.random();
randomNumber2 = (Math.floor(y*6)) +1;


// Dice 1 Throw
function diceThrow1(){
  if(randomNumber1 === 1){
    document.getElementById("img1").src = "images/dice1.png";
  }
else if(randomNumber1 ===  2){
      document.getElementById("img1").src = "images/dice2.png";
  }
  else if(randomNumber1 === 3){
    document.getElementById("img1").src = "images/dice3.png";
  }
  else if(randomNumber1 === 4){
        document.getElementById("img1").src = "images/dice4.png";
  }
  else if(randomNumber1 === 5){
        document.getElementById("img1").src = "images/dice5.png";

  }
  else if(randomNumber1 === 6){
        document.getElementById("img1").src = "images/dice6.png";
  }
}


//Dice 2 throw

function diceThrow2(){
  if(randomNumber2 === 1){
    document.getElementById("img2").src = "images/dice1.png";
  }
else if(randomNumber2 ===  2){
      document.getElementById("img2").src = "images/dice2.png";
  }
  else if(randomNumber2 === 3){
    document.getElementById("img2").src = "images/dice3.png";
  }
  else if(randomNumber2 === 4){
        document.getElementById("img2").src = "images/dice4.png";
  }
  else if(randomNumber2 === 5){
        document.getElementById("img2").src = "images/dice5.png";

  }
  else if(randomNumber2 === 6){
        document.getElementById("img2").src = "images/dice6.png";
  }
}

//Declaring The Winner
function winnerDeclaration(){

if (randomNumber1 > randomNumber2){

  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "🚩Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Player 2 Wins🚩";
}

else{
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Oops ! it's a draw";
}
}




//Calling the functions

diceThrow1();
diceThrow2();
winnerDeclaration();
