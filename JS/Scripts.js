const kluis = document.querySelector(".kluis");
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
kluis.addEventListener("click", Clicked);
const trybutton = document.querySelector(".try");
const numbers = document.querySelectorAll(".code");
trybutton.addEventListener("click", Clickedtry);
const startbutton = document.querySelector(".startbutton");
startbutton.addEventListener("click", Clickedstart);
const start = document.querySelector(".start");
const game = document.querySelector(".game");
function Clicked(){
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    for(let i = 0; i<numbers.length; i++){
        numbers[i].reset;
    }
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      for(let i = 0; i<numbers.length; i++){
        numbers[i].reset;
    }
    }
  }


function Clickedtry(){
    for(let i = 0; i<numbers.length; i++){
        console.log(numbers[i].value);
    }
}

function Clickedstart(){
    start.style.display = "none";
    game.style.display = "block";
}