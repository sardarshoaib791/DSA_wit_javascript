const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

// bubbling
//if we click on any childeren parrants and till window object will be clicked called bubling

green.addEventListener("click", () => {
  console.log("green clicked");
});
pink.addEventListener("click", () => {
  console.log("pink clicked");
});
blue.addEventListener("click", () => {
  console.log("blue clicked");
});
document.body.addEventListener("click", () => {
  console.log("body clicked");
});
document.addEventListener("click", () => {
  console.log("document clicked");
});
window.addEventListener("click", () => {
  console.log("window clicked");
});
