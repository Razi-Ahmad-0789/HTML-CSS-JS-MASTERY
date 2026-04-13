// for(let i=0;i<10;i++){
//     const element=i;
//     if(element===7){
//         console.log("7 is the best number it's Ronaldo Jersy number and Thala also")
//     }
//     console.log(element);
// }
// console.log(element);

for(let i=1;i<=10;i++){
    //console.log(`Outer loop value:${i}`);
    for(let j=1;j<=10;j++){
      //  console.log(i+"*"+j+"="+i*j);
    }
}

let myArray=["flash","batman","superman"];
for(let i=0;i<myArray.length;i++){
    const element=myArray[i];
    // console.log(element);
}

//break and continue

for(let index=1;index<=20;index++){
    if(index==5){
        console.log(`Detected 5`)
        // break;
        continue;

    }
    console.log(`value of i is ${index}`);
}