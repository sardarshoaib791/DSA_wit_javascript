const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
// const image = document.createElement("img");
// image.src =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

// container.appendChild(image);

// const img = document.querySelector("img");

//AProach 1====>

for (let i = 1; i <= 10; i++) {
  const newImg = document.createElement("img");
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");
  const label = document.createElement("p");
  label.innerText = i;
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  imageContainer.append(newImg, label);
  container.appendChild(imageContainer);
}

//Remove Element
// Remove dynamically

function removeElement() {
  let nthh = document.getElementById("remove_element").value;
  const rimg = document.querySelector(`body > div > div:nth-child(${nthh})`);
  rimg.remove();
}

// let nthh = 5;
// const rimg = document.querySelector(`body > div > div:nth-child(${nthh})`);
// // rimg.remove();  // Aproach 1

// // rimg.parentElement.removeChild(rimg); // aproach 2   first call parrent
// container.removeChild(rimg);
