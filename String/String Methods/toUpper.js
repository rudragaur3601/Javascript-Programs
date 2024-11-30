function stoupper(string){
  let res=''
  for(let i=0;i<string.length;i++){
    let ch=string[i]
    let chCode=ch.charCodeAt(2)
    if(chCode >= 97 && chCode <= 122){
      chCode-=32
    }
    res+=String.fromCharCode(chCode) // convert code back to string
  }
  return res


}
let string="Hello World"
let upper =stoupper(string)
console.log(upper)