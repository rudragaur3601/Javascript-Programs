// resolve means your task is completed , promise is completed
// reject means promise will be fullfill  but it will error
// promise has 3 state : 
// pending : the result is undefined
// resolved: fullfilled resolve(result)
// rejected: the result is an error object  reject(error)

// resolve and reject are callback provide by js

//suppose getdata is an api which will return a promise
// this will give a promise that after 5 sec you will get your data
// create
// function getdata(dataid , getNextdata){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data : " , dataid)
//             // when data is printed resolve the promise 
//             resolve("success")
//             if(getNextdata){
//                 getNextdata();
//             }
           
//         },5000)
         
//     })
    
// }


//how to use promise
// .then()  promise.then for resolve(fullfilled)
// .catch() promise .catch for reject
// function returning a promise 
// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         if(false){
//             resolve("123")

//         }
//         else{
//             reject(" there is an error")

//         }
//         // console.log("I am Promise")
        
        
    
//     })
// }
// // calling the function
// let promise=getPromise();
// //when promise resolve print fulfilled
// promise.then((res)=>{
//     console.log("Promise fulfilled",res)
// }
// )
// promise.catch((err)=>{
//     console.error("rejected : ",err)
// })



// Promise chain
// function asyncfunc1(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("data1")
//             res("success")
//         },4000)

//     })
// }
// function asyncfunc2(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("data2")
//             res("success")
//         },4000)

//     })
// }
// // calling async function 
// console.log("fetching data 1....")
// // let p1=asyncfunc1();
// asyncfunc1().then((res)=>{
//     // console.log(res);
//     console.log("fetching data 2....")
//     asyncfunc2().then((res)=>{
//     // console.log(res)
// })
// })

// p1.catch((res)=>{
//     console.log
// })


// ex 2
// promise chain
function getdata(dataId){
    return new Promise((res,rej)=>
        setTimeout(()=>{
            console.log("data : ",dataId)
            res("success")
        },3000)
    )
}
// calling
// method 1
console.log('gettin data 1 ...')
getdata(1)
    .then(()=>{ 
        console.log('getting data 2 ...')
        return getdata(2);
    })
    .then(()=>{
        console.log('getting data 3 ...')
        return getdata(3);
    })
    .then((res)=>{
        
        console.log(res)
    })
// method 2
