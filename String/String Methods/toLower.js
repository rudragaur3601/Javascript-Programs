function stolower(string){
    let res=''
    for(let i=0;i<string.length;i++){
        let ch=string[i]
        let chCode=ch.charCodeAt(0)
        //console.log(chCode)
        if(chCode>=65&&chCode<=90){
            chCode+=32
        }
        res+=String.fromCharCode(chCode)
    }
    return res
}


let string="HoW ArE YoU"
let lower=stolower(string)
console.log(lower)