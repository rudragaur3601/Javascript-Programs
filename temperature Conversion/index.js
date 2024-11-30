const textBox=document.getElementById("textBox")
const tofah=document.getElementById("tofah")
const tocel=document.getElementById("tocel")
const result=document.getElementById("result")
let temp;


function convert(){
    if(tofah.checked){
        temp=Number(textBox.value);
        temp=temp * 9 / 5 +32;
        result.textContent=temp+" F"
         
    }
    else if(tocel.checked){
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp+" C"
        
    }
    else{
        result.textContent="select a unit"
    }

} 