function SCon(str1,str2){
    let str3=''
    let i=0
    while(i<str1.length){
        str3=str3+str1[i]
        i++
    }
    let j=0
    while(j<str2.length){
        str3=str3+str2[j]
        j++
    }
    return str3     
}
let str1="abcd"
let str2="efgh"
console.log(SCon(str1,str2))