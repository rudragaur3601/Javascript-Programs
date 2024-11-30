// function printsum(a,b){
//     console.log(a+b)
// }

// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b)
    
// }
// // we can use arrow function as callback also
// calculator(1,2,(a,b)=>{  
//     console.log(a+b)
// })


// const hello = ()=>{
//     console.log("hello")
// }
// setTimeout(hello,2000)



function getdata(dataid , getNextdata){
    setTimeout(()=>{
        console.log("data : " , dataid)
        if(getNextdata){
            getNextdata();
        }
       
    },2000)
}
// if we have many dataid and want to print after somedelay
// call back hell

getdata(123 , ()=>{
    console.log("getting data 2 .. ")
    getdata(234 , ()=>{
        console.log("getting data 3 .. ")
        getdata(345 , ()=>{
            console.log("getting data 4 .. ")
            getdata(678)
        })
    })
})

