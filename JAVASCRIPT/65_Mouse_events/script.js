const h1 = document.querySelector("h1");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 0;

// click event

// card.addEventListener("click", (e) => {
// console.log(e)
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// dblclick event

// card.addEventListener("dblclick", (e) => {
// console.log(e)
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// mousedown event

// card.addEventListener("mousedown", (e) => {
// console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// // mouseUp event

// card.addEventListener("mouseup", (e) => {
// console.log(e)
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// // mouseenter event

// card.addEventListener("mouseenter", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// // mouseleave event

// card.addEventListener("mouseleave", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// // mousemove event

// card.addEventListener("mousemove", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// mouseout event

// card.addEventListener("mouseout", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// mouseover event
//Also fired on children element

// card.addEventListener("mouseover", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// // mouseenter event
// // not fire on children

// card.addEventListener("mouseenter", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// // wheel event

// card.addEventListener("wheel", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// // scroll event
// not a mouse event

// document.addEventListener("scroll", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// touchstart event
// for mobile devices

// document.addEventListener("touchstart", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// // touchend event
// // for mobile devices

// document.addEventListener("touchend", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// // touchmove event
// // for mobile devices

// document.addEventListener("touchmove", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// drag event =========== important

// for use this first make element dragbale=true like h1
// for both devices

// h1.addEventListener("drag", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

//dragleave

// h1.addEventListener("dragleave", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// dragend;

// h1.addEventListener("dragend", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// dragstart;

// h1.addEventListener("dragstart", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// pointermove;
//both for touch and desktop devices

// card.addEventListener("pointermove", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// pointerenter;
//both for touch and desktop devices

card.addEventListener("pointerenter", (e) => {
  console.log(e);
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});
