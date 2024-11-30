function stringRep(string1 , rep){
    let newstr=''
    let i=0
    while(i<rep){
        newstr+=string1
        i++
    }
    return newstr
}

string1="Hello World "
rep=2
let result = stringRep(string1,rep)
console.log(result)