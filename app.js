const invertBtn = document.getElementById("invert-button");
const body = document.querySelector("BODY");

let isClicked = false;

invertBtn.addEventListener("click", function () {
  isClicked = !isClicked;

  if (isClicked) {
    console.log("True");
    body.style.backgroundColor = "black";
    body.style.color = "#b694d2";
  } else {
    console.log("False");
    body.style.backgroundColor = "#b694d2";
    body.style.color = "black";
  }
});

