// hello();
// goodbye();

// function hello(){
//     setTimeout(function(){
//         console.log("Hello")
//     },5000)
//     // console.log("Hello")
// }
// function goodbye(){
//     console.log("goodbye")
// }

// using callback function
// hello(goodbye()); // will invoke goodbye first

// function hello(callback){
//     setTimeout(function(){
//         console.log("Hello")
//         callback()   
//     }, 3000);
    
// }
// function goodbye(){
//     console.log("goodbye")
// }

// hello(goodbye);


// Sum of 2 number using call back
// function sum(callback,a,b){
//     let result =a+b;
//     callback(result)
// }
// function display(output){
//     console.log(output)
// }

// sum(display,5,2)
 
// nrml method
// let total=sum(2,3)
// displayConsole(total)
// function sum(x,y){
//     let result =x+y;
//     return result
// }
function displayConsole(output){
    console.log(output)
}

// callback method
sum(3,4,displayConsole);
function sum(x,y,callback){
    let result =x+y
    callback(result)
}