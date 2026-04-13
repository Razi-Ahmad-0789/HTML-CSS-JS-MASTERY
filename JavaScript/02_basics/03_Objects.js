//Singleton

//Object create
//Literals


const mySym=Symbol("key1")


const jsUser={
    name:"Razi",
    "full name":"Razi Ahmad",
    [mySym]:"myKey1",
    age:20,
    location:"Bhopal",
    email:"raziahmad0789@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser.mySym)

// jsUser.email="raziahmad00789@gamil.com",
// Object.freeze(jsUser)
// jsUser.email="raziahmad000789@gmail.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello js user")
}
jsUser.greetingTwo=function(){
    console.log(`Hello Js user,${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())