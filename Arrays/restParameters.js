// rest - if we want to accept infinite number of parameters
// pack argument into an array
let a=10; 
let b=11; 
let c=12; 
let d=13;
console.log(sum(a,b,c));
function sum(...numbers){
    let total=0
    for(let number of numbers){
        total+=number
    }
    return total
    
} 

