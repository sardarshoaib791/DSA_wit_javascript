// there are mainly 3 types of keybard events
//1- keyUp
//2- keyDown
//3- keyPress

const h1 = document.querySelector("h1");
const input = document.querySelector("input");

//keypress=====

// input.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });
// h1.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });    // for any element we need focus on thta like tabindex=0 on html

// window.addEventListener("keypress", (e) => {
//   console.log("code :", e.code);
//   console.log("value :", e.key);
// });

//keyUp========>

// window.addEventListener("keyup", (e) => {
//   console.log("code :", e.code);
//   console.log("value :", e.key);
// });

//keyDown========>

window.addEventListener("keydown", (e) => {
  console.log("code :", e.code);
  console.log("value :", e.key);
});
