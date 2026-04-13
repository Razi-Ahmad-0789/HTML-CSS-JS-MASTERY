let myDate=new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())

let myCreateDate=new Date(2025,9,20);
console.log(myCreateDate);
console.log(myCreateDate.toDateString())

// let myCreateDate=new Date(2025,9,5,10,59);
// console.log(myCreateDate.toLocaleString())

// let myCreateDate=new Date("2025-09-05");
// console.log(myCreateDate.toLocaleString())

// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})