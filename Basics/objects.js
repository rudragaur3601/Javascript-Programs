// const person={
//     firstname:"Rudra",
//     lastname:"Gaur",
//     age:23
// };
// adding a new property
// person.weight=78;
// // Deleting a property : delete keyword delete a property from an object
// //delete person.age;
// delete person["age"];
// nested objects
// const myobj={
//     name:"Rudra",
//     age:23,
//     myCars: {
//         car1:"Ford",
//         car2:"BMW",
//         car3:"Fiat"
    
//   }
// };
// console.log(myobj);
// console.log(myobj.myCars["car1"]);
// delete myobj.myCars.car3;
// console.log(person.firstname+ " is " +person.age+" years old");
// console.log(person.weight)
// console.log(person)
// console.log(myobj.myCars.car1);
// console.log(myobj);

// --- object method ---
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
// };  // this refers to person object 
// this.firstname means the property of person
// console.log(person.fullName()); // will print John doe
// console.log(person.fullName);   // will return function defination

// adding a method to an object 
// person.name=function(){
//     return this.firstName+ " "+this.lastName;
// }
// console.log(person.name());


// --- Display javascript objects ---
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name,person.age);
// dispaly property in loop
// name is John
// age is 30
// city if New York
console.log(person)
let txt="";
for(let x in person ){
    txt=txt+x+ " is " +person[x]+" \n"; // x is in loop thatwhy we use [x]
};
console.log(txt);
// // display Object.values()
// // create an array
// const myArray=Object.values(person);
// console.log(myArray);




