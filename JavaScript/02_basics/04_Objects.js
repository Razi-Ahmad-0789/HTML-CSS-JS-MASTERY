
//singleton
//const tinderUser=new Object();

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="razi"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"somegamial.com",
    fullname:{
        userfullname:{
            firstName:"Razi",
            lastName:"Ahmad"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2,...obj4}
// console.log(obj3)

const users=[
    {
        id:1,
        email:"raz@gmail.com"
    },
      {
        id:1,
        email:"raz@gmail.com"
    },
     {
        id:1,
        email:"raz@gmail.com"
    },
     {
        id:1,
        email:"raz@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser))

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
//console.log(tinderUser.hasOwnProperty('isLoggedIn'))




/// json talk
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
//course.courseInstructor

const {courseInstructor:instructor}=course

console.log(instructor)

// {
//     "name":"Razi",
//     "courseName":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]