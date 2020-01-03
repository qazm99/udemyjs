'use strict';

let a = 5;
var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};
let something;

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};
 /*onsole.log(4/0);
 console.log('string'*9);
 console.log(something);
 console.log(persone.name);
 console.log(persone["name"]);*/

 let arr = ['plum.png','orange.jpg','apple.bmp'];
 console.log(arr[1]);

 //alert("Hello");

// let answer = confirm("Are you here");
//  let answer = +prompt("Are you here", "Yes");

//  console.log(typeof(answer)+4 );
let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr++);

console.log(5%2);
console.log("2" === 2);

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);
console.log("incr: ",typeof(incr));
console.log("arr: ",typeof(arr));