// let mydiv=documemt.querySelector('#div1');
// let newElement=document.createElement('span');
// newElement.textContent="My name is Rudra"
// mydiv.insertAdjacentElement('beforebegin', newElement);
// let a =document.querySelector("h1")
// a.addEventListener("click",function(){
//     a.innerHTML="bye"
//     a.style.color="Yellow"
//     a.style.backgroundColor="#000"
// })

// var bulb=document.querySelector("#bulb")
// var btn=document.querySelector("button")
// var flag=0
// btn.addEventListener("click",function(){
//     if(flag==0){
//         bulb.style.backgroundColor="yellow"
//         flag=1
//         console.log("abc")

//     }else{
//         bulb.style.backgroundColor="transparent"
//         flag=0
//         console.log("hii")
//     }
    
// })


// let username;
// document.getElementById("mySubmit").onclick=function(){
//     username=document.getElementById("myText").value;
//     // console.log(username);
//     document.getElementById("myH1").textContent=`hello ${username}`

// }
const PI= 3.145;
let radius;
let circumference;


document.getElementById("mySubmit").onclick=function(){
    radius=document.getElementById("myText").value
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("myH3").textContent=circumference+"cm"

}