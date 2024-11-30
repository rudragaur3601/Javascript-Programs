function slen(str){
    let len=0
    let i=0
    while(str[i]!=null){
        len++;
        i++;

    }
    return len;
}


let string1="abcdefgho"
console.log(slen(string1))
