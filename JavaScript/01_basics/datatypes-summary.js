// Primitive

//7 types:String ,Number,boolean,null undifined,symbol, BigInt

const value=100;
// const ScoreValue=100.3;
// const string="Razi";
// const isLoggedIn=false;
// const outsideTemp=null;

// const id=Symbol('123');
// const anotherId=Symbol('123');
// console.log(id===anotherId);

// const bigNumber=3834983089843898232849n;
// console.log(bigNumber);



//Reference(Non-Primitive);
// Array,Objects,Functions

// const heros=["Shaktiman","Nagraj","doga"];

// let myObj={
//     name:"Razi",
//     age:20,
// }

//  let myFunction=function(){
//     console.log("HelloWorld")
// }

// console.log(typeof heros);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive) ,Heap(Non-Primitive);

let myYoutubename="HiteshChodharydotcom";
let anotherName=myYoutubename;
anotherName="ChaiaurCode";



console.log(myYoutubename);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybl",
}
let userTwo=userOne
userTwo.email="Razi@google.com";
console.log(userOne.email);
console.log(userTwo.email);


// 🔹 Data Types

// JavaScript me mainly 2 types ke data types hote hain:

// 1. Primitive Data Types (basic values)

// Number → 10, 3.14

// String → "Razi", 'Hello'

// Boolean → true, false

// Undefined → agar variable banaya hai par value assign nahi ki

// Null → intentionally empty value

// BigInt → bade numbers ke liye

// Symbol → unique identifiers ke liye

// 2. Non-Primitive Data Types (objects)

// Object → { key: value } format me hota hai

// Array → list of items

// Function → ek block of code jo baar-baar use ho sakta hai