let min=1;
let max=10;
let randomNumber=Math.floor(Math.random()*(max-min)+min)
console.log(randomNumber)
let loopex=true;
while(loopex){
    let userInput=window.prompt("Enter A guess ")
    if(userInput>randomNumber){
        window.alert("far")
    }
    else if(userInput<randomNumber){
        window.alert("near")
    }
    else{
        window.alert(`you won ${randomNumber} is the Number`)
        loopex=false
    }
}