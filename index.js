// Detecting Button Press
var numberofButtons = document.querySelectorAll("button").length;

for (var i = 0; i < numberofButtons; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var audio = new Audio("Sounds/Carrot.wav");
    audio.play();


  });

}

//Detecting Keyboard Press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);



});

function makeSound(key) {
  if (event.keyCode === 13) {
    var carrot = new Audio("Sounds/Carrot.wav");
    carrot.play();


  }
}
