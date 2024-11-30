// empty Js Object
// const person={};
// const person2=new Object() // another method to create an empty object


// // Adding property to Empty Object
// person.firstName="Rudra"
// person.age=23
// person.lastName="Gaur"
// console.log(person)

// person2.firstName="gautam"
// person2.age=20
// person2.lastName="Gaur"
// console.log(person2)


//Symbol declaration
const mySym=Symbol("key1")
const JsUser={
    name:"Rudra",
    [mySym]:"myKey1",
    age:23,
    islogged:false,
    lastLoginDays:["monday","Saturday"]
    
}
console.log(JsUser["age"])
console.log(JsUser[mySym])
// console.log(typeof (JsUser[mySym]) )

// chnage value
JsUser.name="abcd"
console.log(JsUser.name)
Object.freeze(JsUser)  // will prevent from further chnge in object
JsUser.name="xvy"
console.log(JsUser)
