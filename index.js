var Button = document.querySelectorAll(".drum");
for (let i = 0; i < Button.length; i++) {
    Button[i].addEventListener("click", clicked);
    /*instead of calling the function i.e. "clicked()" 
       we are calling it by name.*/
  }
  
//click functionality or playing drum with mouse 
 function clicked() {
  var buttonInnerHTML = this.innerHTML;             //*'this' is used to access the innerHTML of the button that is clicked.
  switch (buttonInnerHTML) {
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

//for playing the drums with keys
document.addEventListener ("keydown",keyboard);
function keyboard(event){
    var keyPressed=event.key;               //'event' is used to access the key that is pressed.
    switch (keyPressed) {
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




