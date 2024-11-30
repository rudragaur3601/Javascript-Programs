// async always return a promise
// await pauses the execution of its surrounding async function until the promise is settled 
// async function hello (){
//     console.log("hello")
// }

// example 1
// function api(){
//     return new Promise((resolve,reject)=>{
//         // console.log("weather data")
//         // resolve(200);
//         setTimeout(()=>{
//             console.log("weather data")
//             resolve (200)
//         },4000)
//     })
// }
// async function getWeatherData(){
//     await api() // 1 call
//     await api()  // 2 call
// }

// example 2
function getdata(dataId){
    return new Promise((res,rej)=>
        setTimeout(()=>{
            console.log("data : ",dataId)
            res("success")
        },3000)
    )
}
// async-await
async function getAllData(){
    console.log("getting data 1..")
    await getdata(1)
    console.log("getting data 2..")
    await getdata(2)
    console.log("getting data 3..")
    await getdata(3)
}
//iife

(async function(){
    console.log("getting data 1...")
    await getdata(1)
    console.log("getting data 2...")
    await getdata(2)
    console.log("getting data 3...")
    await getdata(3)
})()

