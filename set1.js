'use strict';
//1
// console.log('Hi, my name is Chris and I\'m 29 years old');
// //2
// let whoAmI = function  (){
//   console.log('Hi, my name is Chris and I\'m 29 years old');
// };
// whoAmI();
// //3
// let whoAmI = function (name, age) {
// 	console.log(`Hi, my name is ${name} and I'm ${age} years old`);
// }
// whoAmI('Chris', 29);
// //4
// function birthYear (name, age){
//     let yearOfBirth = 2017 - age;
//     console.log(`I was born in ${yearOfBirth}`)
// }
// let whoAmI = function (name, age) {
//   let yearOfBirth = 2017 - age;
//   console.log(`Hi, my name is ${name} and I'm ${age} years old`);
//   console.log(`I was born in ${yearOfBirth}`)
// };
// whoAmI("Jesse", 27);
//5
// let yearOfBirth = function(age) { 
//   return 2017 - age; 
// };
// let whoAmI = function (name, age) { 
//   let yob = yearOfBirth(age); 
//   console.log(`Hi, my name is ${name} and I'm ${age} years old`); 
//   console.log(`I was born in ${yob}`);
// };
// whoAmI("Jesse", 27);
//6
// function yearOfBirth(age) {
//   return 2017 - age;
// }
// let whoAmI = function(name, age){
//   try {
//     if (age <= 0){
//       throw new Error('Your age must be a positive number');
//     }
//     const yob = yearOfBirth(age);
//     console.log(`Hi, my name is ${name} and I'm ${age} years old`);
//     console.log(`I was born in ${yob}`);
//   }
//   catch (e){
//     console.log(e);
//   }
// };
// whoAmI("Jesse", -27);
//7
// function yearOfBirth(age) {
//   return 2017 - age;
// }
// let whoAmI = function(name, age){
//   try {
//     if (name || age === undefined){
//       console.error('Argument not valid');
//     }
//     const yob = yearOfBirth(age);
//     console.log(`Hi, my name is ${name} and I'm ${age} years old`);
//     console.log(`I was born in ${yob}`);
//   }
//   catch (e){
//     console.log(e);
//   }
// };
// whoAmI();

// function newFunction() {
//     return console.error;
// }
//8
