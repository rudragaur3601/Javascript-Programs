// string slice() process of creating a subString from a portion of another String
// string.slice(start,end)
const fullName="Rohan paul"
let fname=fullName.slice(0,3);
let lname=fullName.slice(6);

let newString=fullName.slice(0,fullName.indexOf(" "))
console.log(fname)
console.log(lname)
console.log(newString)


const email="rohan@123"
let username=email.slice(0,email.indexOf("@"))
let extension=email.slice(email.indexOf("@"))
console.log(username)
console.log(extension)