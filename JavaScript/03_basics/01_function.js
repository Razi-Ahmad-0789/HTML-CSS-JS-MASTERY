function sayMyName(){
    console.log("R");
    console.log("A")
    console.log("z")
    console.log("I")
}
// sayMyName();

// function AddTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function AddTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result;
    return number1+number2
}
// const result=AddTwoNumbers(4,5)

// console.log("Result:",result);

function loginUserMessage(username="SamBahadur"){
    if(!username){
        console.log("Please enter a username:")
    }
    return `${username} just logged in`
    
}
// console.log(loginUserMessage("Raaz"))
// console.log(loginUserMessage())

function calculateCarPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCarPrice(200,400,500,2000));

const user={
    username:"RaziAhmad",
    price:199
}

function handleObject(anyobject){
    console.log(`user is ${anyobject.username} and price is ${anyobject.price}`);
}
 //   handleObject(user);

 handleObject({
    username:"sam",
    price:399
 })

 const myNewArray=[200,400,100,600]

 function returnSecondValue(getArray){
    return getArray[1]
 }
 console.log(returnSecondValue(myNewArray))










