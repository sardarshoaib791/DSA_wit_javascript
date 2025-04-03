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

console.log(a);
// console.log(b, c);
var a = "AAA";
let b = "BBB";
const c = "CCC";
console.log(b, c);

Hi("before initilzation");
//function declearation
function Hi(a) {
  console.log("hello from function", a);
}
Hi("after initialization");

//function expression
let sayHi = function () {
  console.log("hello from function expression");
};
sayHi();

//IFFE function

(function () {
  console.log("hello form IFFE function");
})();
