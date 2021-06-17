let cr = document.getElementById("cr");
let cl = document.getElementById("cl");

let pr = document.getElementById("prapapappo");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  cr.style.marginLeft = value + "px";
  cl.style.marginLeft = -value + "px";
});
