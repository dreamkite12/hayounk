const parallaxone = document.getElementById("parallax-one");
const parallaxtwo = document.getElementById("parallax-one");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallaxone.style.backgroundPositionY = offset*0.2 + "px";
  parallaxtwo.style.backgroundPositionY = offset*0.2 + "px";
})