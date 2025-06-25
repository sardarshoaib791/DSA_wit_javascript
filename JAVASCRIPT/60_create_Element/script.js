const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
// const image = document.createElement("img");
// image.src =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

// container.appendChild(image);

// const img = document.querySelector("img");

//AProach 1====>

// for (let i = 1; i <= 10; i++) {
//   const newImg = document.createElement("img");
//   const imageContainer = document.createElement("div");
//   imageContainer.classList.add("img-container");
//   const label = document.createElement("p");
//   label.innerText = i;
//   newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//   imageContainer.append(newImg, label);
//   container.appendChild(imageContainer);
// }

//Aproach 2===>
function getCharacter() {
  let val = document.getElementById("element").value;
  console.log(val); // test value in console
  if (val > 100) {
    console.log("put value b/w 1 to 100");
  } else {
    let MyHTML = ``;

    for (let i = 1; i <= val; i++) {
      MyHTML += `
    <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" />
      <p>${i}</p>
    </div>
    `;
    }

    container.innerHTML = MyHTML;
  }
}
