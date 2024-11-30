// create an object, with name, age, height with name as parent key for the object
// create another variable and assign the older object equal to this one
// increase age of every key in the object and then print both the object
// notice something wierd ?, if yes fix it.


// { kapil: {
//     AbstractRange,
//     i

// },
// key1: {

// }
// }

const employ1={
    Rudra:{
        age:23,
        height:5
    },
    gautam:{
        age:24,
        height:5.1
    },
    ravi:{
        age:25,
        height:5.2
    } 
}
console.log("My original Employ")
console.log(employ1)
const cpyEmploy=JSON.parse(JSON.stringify(employ1))
cpyEmploy.Rudra.age=12;
cpyEmploy.gautam.age=70;
console.log("copy employ")
console.log(cpyEmploy)

// for (const [key,value] of Object.entries(employ1)){
//     console.log(`${key}:${value}`);
// }
//will print key:[object]


// const employ2={}
// for (const key in employ1){
//     if(employ1.hasOwnProperty(key)){
//         employ2[key]=employ1[key]

//     } 
// }
// employ2.Rudra.age=2345
// console.log(employ2)
// console.log(employ1)

// // console.log("og employ1")

// // assign source to target using Object.assign
// // console.log(employ1)
// // Object.assign(employ2,employ1)
// // console.log("cpy employ2")
// // console.log(employ2)


// // const employ2=structuredClone(employ1)

// const employ2={...employ1}



// // console.log(employ2)
// // employ2.Rudra.age=123
// // employ2.gautam.age=456
// // console.log(employ2.Rudra)
// // console.log(employ1.Rudra)

// // console.log(employ2.gautam)
// // console.log(employ1.gautam)



