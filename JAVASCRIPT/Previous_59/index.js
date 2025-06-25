//data type====
// console.log(typeof null);

//Dialog boxes====
// alert("your message");
// const isConfirm = confirm("hello");
// const inPut = prompt("Enter name");
// console.log(inPut);

// String===========>>>>>>>>>>>>>>>
// let numb = 444;
// let str = `hello from string $${numb} `;
// // console.log(str);

// let x = 10;
// let y = 21;
// let randomNum = Math.floor(Math.random() * (y - x) + x);
// console.log(randomNum);

// if Else ===
// let userName = prompt("please enter your name") || "sardar";
// console.log(userName);
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 2000);
// }

//ternory opreator========>>>>>>>>>>>>>>>
// let data = 5;
// let message = data === 4 ? "56" : "4";
// console.log(message);

//memory varibale phase ===>

// let userName = "shoaib";
// let userAge = 28;
// let isGraduated = true;

///Object ===>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let name = "shoaib";
// let name2 = "shoaib";

// // name===name2  true
// console.log(name === name2);

// let obj = {};
// let obj2 = {};
// //onj ===obj2   false
// console.log(obj == obj2);

// let data = {
//   name: "shoaib",
//   lName: "hanif",
//   adress: { post: 1344, village: "tangeran" },
// };
// // data.age = 28;
// // console.log(data["age"]);

// // delete data.lName;
// console.log(data);

//   Arrays  ===========================>
// const fruits2 = ["apples", "mangdao", "bannandsaa"];
// const fruits3 = ["ana", "mgdao", "bandaa"];
// const fruits = ["apple", "mango", "bannana"];

// const arry3 = [...fruits, ...fruits2, ...fruits3];

// console.log(fruits);

/////////////////////////////////======Deep vs shallow copy =====///////////

// let data1 = {
//   name: "shoaib",
//   lName: "hanif",
//   adress: {
//     post: 111,
//     village: "tangeran",
//     city: {
//       dist: "poonch",
//       village: "tangaran",
//     },
//   },
// };

// let data2 = JSON.parse(JSON.stringify(data1));
// data2.name = "sss";
// data2.adress.city.dist = "Abbasspur";
// console.log(data1);
// console.log(data2);

/////          return Value functions ============= ///

// function addSum(a, b) {
//   //   console.log(a + b);
//   return a + b;
// }
// let result = addSum(5, 6);
// console.log(result);

////     code execution context =====================//
// console.log(religion);
// let name = "shoaib";
// let age = 27;

// debugger;

// var religion = "islam";
// // console.log(name);
// debugger;
// saySlam();
// const c = 1;
// const d = 2;
// function saySlam() {
//   let a = 1;
//   console.log("hi");
// }
// console.log("hello");

////////             Hoisting============== ////

// console.log(a);
// // console.log(b, c);
// var a = "AAA";
// let b = "BBB";
// const c = "CCC";
// console.log(b, c);

// Hi("before initilzation");
// //function declearation
// function Hi(a) {
//   console.log("hello from function", a);
// }
// Hi("after initialization");

// //function expression
// let sayHi = function () {
//   console.log("hello from function expression");
// };
// sayHi();

// //IFFE function

// (function () {
//   console.log("hello form IFFE function");
// })();

///        SCOPE  =========================================///
// const userName = "shoaib";
// let userAge = 26;
// var a = 50;

// function add() {
//   const x = 5;
//   const y = 6;
//   console.log(x + y);
//   //   console.log(userName);
// }
// function mult() {
//   const x = 5;
//   const y = 6;
//   console.log(x * y);
//   //   console.log(userName);
// }

// add();
// mult();

//////// Set time out  ===== >>>>>>

// let timer = setTimeout(`console.log("ehl")`, 1000);
// let timer2 = setTimeout(a, 1000, "arg1", "argu2", 9);
// console.log(timer); // id of setTimeout function
// // clearTimeout(timer);  // stop before time

// function a() {
//   console.log(arguments);
//   console.log("hii");
// }

// function sayHi() {
//   console.log("hii");
// }
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// // debugger;
// function respond() {
//   setTimeout(() => {
//     console.log("hello");
//   }, 1000);
// }
// // setTimeout(sayHi, 2000);
// setTimeout(sayHi, 2000);
// respond();
// // sayHi();

////////// ===============Returning functions with closure====>>>>
// function respond() {
//   let b = 6;
//   let a = 4;
//   let c = 7;
//   function add() {
//     console.log(a + b);
//   }
//   return add;
// }
// let add1 = respond();
// console.dir(add1);

// function x() {
//   let a = 5;
//   function child() {
//     console.log(a);
//   }
//   return child;
// }
// x()();

// Arrow function Expressio=========>

// let square = (num) => num * num;

// ============== for of and for in loop=========>>>

// let fruits = ["banana", "apple", "mango", "graps"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// // example 2
// let name = "shoaib";
// for (const letter of name) {
//   console.log(letter);
// }

// let person = {
//   name: "shoaib",
//   lname: "hanif",
//   age: 28,
// };

// // for (key in person) {
// //   console.log(person[key]);
// // }
// // example 3 accecss  through for of loop ///
// let personKeys = Object.keys(person);
// let personValues = Object.values(person);

// console.log(personKeys);
// console.log(personValues);

// for (key of personKeys) {
//   console.log(person[key]);
// }

/////////////////////// ==== foreach====///

// let fruits = ["apple", "banana", "mango", "stabary"];

// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });
// no return value
//============== map, filter , reducer=========>

// let months = ["junary", "february", "March", "april", "may"];

// let capitalMonths = months.map((month) => {
//   console.log(month);
//   return month.toUpperCase();
// });
// console.log(capitalMonths);

// let filteredMonths = months.filter((month) => {
//   return month.toLocaleLowerCase().includes("m");
// });
// console.log(filteredMonths);

// let students = [
//   {
//     name: "shoaib",
//     age: 28,
//   },
//   {
//     name: "shoaib hanif",
//     age: 26,
//   },
//   {
//     name: "saad",
//     age: 19,
//   },
//   {
//     name: "ehtsham",
//     age: 20,
//   },
//   {
//     name: "sajjad",
//     age: 17,
//   },
// ];

// let adults = students.filter((student) => {
//   return student.age >= 20;
// });

// let nameSt = adults.map((student) => {
//   return student.name;
// });
// console.log(nameSt);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.reduce((accumulater, current, index) => {
//   console.log(index, accumulater, current);
//   return accumulater;
// }, "starting");

///=============== arguments ====....
// Example === 1;
// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     //arguments not work in arrow functions
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(add(1, 2, 3, 4, 5));

//Example=2

// let add = (...nums) => {
//   // rest operators
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum;
// };

// console.log(add(1, 2, 3, 4, 5));

/// Array destructing=============>>>>///

// let colors = ["A1", "B2", "C3", "D4"];

// let [i, b] = colors;

// console.log(b);

// object destructuring====>

// let adress = {
//   city: "abbaspur",
//   post: 4042,
//   distrcit: "poonch",
//   village: {
//     name: "tangaran",
//     vibe: "fresh",
//   },
// };

// let { name, vibe } = adress.village;

//===============BOM=========>
//1- loaction
// 2- history
// 3- innerHeight
// 4- innerwidth
// 5 - open("youtube.com", "name", "resizable");
// 6- close("")
// 7-moveBy() .......>

// =========> DOM Selecting============>
//....
// =========> Select Attribute vs get attributes============>
//....
// // =========> Apply dom style through javascript============>
//     const h1 = document.querySelector("h1");
//h1.style = "color:red";
//....
// =========> Access parrant siblibling DOM============>
//....
// =========> Difference B/w Element and Node============>
//....
// =========> Difference B/w Append and Appendchild DOM============>

//appendChild
// const h1 = document.querySelector("h1");
// const container = document.querySelector(".container");
// const card = document.querySelector(".card");

// for (let i = 2; i <= 10; i++) {
//   const newCard = card.cloneNode();
//   newCard.innerText = i;
//   container.appendChild(newCard);
// }
// console.log(newCard);
// console.log("done 10");

///====append
// container.append("hellow"); //can append just string or text
// container.append("hellow", h1); //can append multiple at once & return value is undefine
