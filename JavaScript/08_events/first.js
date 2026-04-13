// function handleClick(){
//     const element=document.getElementById("first");
//     element.textContent="Winter is Coming"
// }

const element=document.getElementById("first");
// element.onclick=function handleClick(){
//     // element.textContent="Winter is coming";
//     element.style.backgroundColor="red";
// }

// element.onclick=function handleClick(){
//     element.textContent="I am the best person";
// }
//  element.addEventListener('click',()=>{
//     element.textContent="Winter is Coming";
//  })

//  element.addEventListener('click',()=>{
//     element.style.backgroundColor="red";
//  })
 
//   const child1=document.getElementById("child1");
//   child1.addEventListener('click',()=>{
//     child1.textContent="I am the best";
//   })
 
// const parent=document.getElementById("parent");
// console.log(parent.children)
// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent="i am Clicked"
//     })
// }

const grandparent=document.getElementById("grandparent");
grandparent.addEventListener('click',()=>{
    console.log("grandParent is Clicked")
},false)

const parent=document.getElementById("parent");
parent.addEventListener('click',()=>{
    console.log("Parent is Clicked")
},false)


const child=document.getElementById("child");
parent.addEventListener('click',()=>{
    console.log("child is clicked")
},false)

//false-> Capture phase = on hai ya off hai