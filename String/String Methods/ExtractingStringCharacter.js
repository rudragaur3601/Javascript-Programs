// CharAt() : Return Char at a specified index
function charAtst(str1,idx){
    if(idx<=0||idx>=str1.length){
        return undefined
    }
    return str1[idx]
}
function chrat(str1,idx){
    if(idx<0){
        idx=str1.length+idx
    }

    if(idx>=str1.length){
        return "error"
    }
    return str1[idx]

}

let string1="abcdefgh"
let index =-3
//let index=-3 // undefined
console.log(charAtst(string1,index))
console.log(chrat(string1,index))

// at(): return char at a specified index , also allow negative index
let ch='a'
let a=Number(ch)
console.log(a)