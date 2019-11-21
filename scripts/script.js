const burger = document.querySelector(".burger");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const navLinks = document.querySelector(".nav-links");
const navLinksTags = navLinks.querySelectorAll("a");


burger.addEventListener("click", function(){

    line1.classList.toggle("line1-active");
    line2.classList.toggle("line2-active");
    line3.classList.toggle("line3-active");
    navLinks.classList.toggle("nav-links-active");
    toggleStyle(navLinks, "display", "flex");
});

function toggleStyle(element, property, value) {
    if (element.style[property] !== value) {  
      element.style[property] = value;
    } else {
      element.style[property] = "none";
    }
  }


function hearDragRace(){
  let audio = new Audio("audio/dragrace.mp3");
  audio.play;
}
