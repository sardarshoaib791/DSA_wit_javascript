// Enevt listner using by select Element===>

//Approach# 1
// direct define in element atributes
// Example :
// <h1 onclick= "console.log('example 1')"> Some Text <h1/>

//Aproach#2
//Example:
// const h1 = document.querySelector("h1");
// h1.style.cursor = "pointer";
// function sayHi() {
//   console.log("Clicked from function");
// }

// h1.onclick = sayHi;

// Aproach#3
//Advantages
// in this aproach no need to store function in onlick properties
// called multiple functions at once
//Example

const h1 = document.querySelector("h1");
h1.style.cursor = "pointer";

function sayHi() {
  console.log("Clicked 3rd Aproach from function");
}

h1.addEventListener("click", sayHi);
h1.addEventListener("click", function () {
  console.log("annomyus function clicked");
});

//Example for card click:
const card = document.querySelector(".card");
card.style.cursor = "pointer";

card.addEventListener("click", addCard);

// Example add card:

const container = document.querySelector(".container");
let newCard = card.cloneNode();
let i = 1;

function addCard() {
  let newCard = card.cloneNode();
  newCard.innerText = i++;
  container.appendChild(newCard);
}
