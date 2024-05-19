var Button = document.querySelectorAll(".drum");
for (let i = 0; i < Button.length; i++) {
  Button[i].addEventListener("click", clicked);
  /*instead of calling the function i.e. "clicked()" 
       we are calling it by name.*/
}

//click functionality or playing drum with mouse
function clicked() {
  var buttonInnerHTML = this.innerHTML; //*'this' is used to access the innerHTML of the button that is clicked.
  playSound(buttonInnerHTML);
  animation(buttonInnerHTML);
}

//for playing the drums with keys
document.addEventListener("keydown", keyboard);
function keyboard(event) {
  var keyPressed = event.key; //'event' is used to access the key that is pressed.
  playSound(keyPressed);
  animation(keyPressed);
}

function playSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "w":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "d":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      break;
  }
}

// Function to add and remove animation class
function animation(key) {
  var activeButton = document.querySelector("." + key);
  // ! Why the if Condition is Needed:
  // !Safety Check: When you call document.querySelector("." + key), it attempts to select an element with the class name that matches the key. If no such element exists, document.querySelector returns null.
  // !Preventing Errors: If you try to call methods like classList.add or classList.remove on null, it will result in an error and your script will stop running. The if condition prevents this by ensuring that activeButton is not null before proceeding.
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed"); // Correct removal of the class
    }, 100); // Delay for the animation
  }
}
