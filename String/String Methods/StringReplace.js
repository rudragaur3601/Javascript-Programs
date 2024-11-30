function sreplace(string1,tvalue,avalue){
    let nstr=''
    let i=0
    while(i<string1.length){
        if(string1.substr(i,tvalue.length)==tvalue){
            nstr+=avalue
            i=i+tvalue.length 
        }
        else {
            
            nstr += string1[i];
            i++;
        }
    }
    console.log(nstr)
}

let string1="Please visit Microsoft"
let avalue="google"
let targetValue="Microsoft"
let newString=sreplace(string1,targetValue,avalue)
console.log(newString)
