// const coding=["js","ruby","java","python","cpp"];

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values)


const myNums=[1,2,3,4,5,6,7,8,9,10];
// const value=myNums.filter((num)=>num>4)

// const value=myNums.filter((num)=>{
//     return num>4
// })

// const value=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         value.push(num);
//     }
// })
// console.log(value)


const books=[
    {title:'Book One',genre:'Fiction',publish:1981,
        edition:2004
    },
    {title:'Book Two',genre:'Non-Fiction',publish:1989,
        edition:2009
    },
    {title:'Book Three',genre:'History',publish:1991,
        edition:2014
    },
    {title:'Book Four',genre:'Science',publish:1998,
        edition:2000
    },
    {title:'Book Five',genre:'NOn_fiction',publish:1990,
        edition:2000
    },
    {title:'Book Six',genre:'Fiction',publish:1901,
        edition:2024
    },
    {title:'Book Seven',genre:'English',publish:1980,
        edition:2003
    },
    {title:'Book Eigth',genre:'History',publish:1811,
        edition:2005
    },
]


let userBooks=books.filter((bk)=>bk.genre==='History')
userBooks=books.filter((bk)=>{ return bk.publish>=1990
    &&bk.genre=='History'
})
console.log(userBooks)