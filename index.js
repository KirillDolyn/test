var header = document.querySelector("header");
var elem = document.querySelector("h1");
var elem2 = document.querySelector(".por");

elem.addEventListener("click", (e) => {
  elem.removeChild(e.target);
});

elem2.addEventListener("click", (e) => {
  elem2.removeChild(e.target);
});
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    header.remove(event.target);
  }
});
