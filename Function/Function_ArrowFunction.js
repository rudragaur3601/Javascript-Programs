// sum of a ,b 
function myfun(a,b){
   
    return a+b ;
}
let sum =myfun(2,3);
console.log(sum);

// arrow fun
let arrowsum= (a,b)=>{
    console.log(a+b);
};
console.log(arrowsum);

let hello =()=>{
    console.log("Hello")
}
hello()

// anonymous Function
// we can store the function in a variable and variable is used as function

const af= function(a,b){ return a*b}
console.log(af(2,3))

"use strict";
x=9;
