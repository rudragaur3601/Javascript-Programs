// let randomNum=Math.random();
// if want to get random number between 1 to 6
// const min=50;
// const max=100;


// let randomNum1=Math.floor(Math.random()*(max-min))+min

// console.log(randomNum1) 


const myButton=document.getElementById("myButton")
const myLabel=document.getElementById("mylabel")
const min=1;
const max=6;
let randomNum;
myButton.onclick=function(){
    randomNum= Math.floor(Math.random()*(max-min)+min)
    myLabel.textContent=randomNum;
}