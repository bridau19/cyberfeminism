
//// DEFINITION PAGE INTERACTION ////

var glitch = document.getElementById('glitch2');

glitch.addEventListener("click", myFunction);
function myFunction() {
  if (glitch.style.display === "none") {
   glitch.style.display = "block";
 } else {
   glitch.style.display = "none";
 }
}
