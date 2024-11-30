// method Chaining = calling one method after Another in one Continous Line of Code
let username="   roHan@1344   "

// No Method Chaining
username=username.trim(); // to remove White Space we use trim method 
let letter=username.charAt(0) // will take the character at that index
letter=letter.toUpperCase() // will convert the letter to upper case
let extraPart=username.slice(1) // will slice the string after starting from fisrt Index
extraPart=extraPart.toLowerCase() // will convert The Rest of the part to lower Case
username=letter + extraPart // will concat the string
console.log(username)

// method chaining
username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
console.log(username ) 

