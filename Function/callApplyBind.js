// with call() , an object can use a method belonging to another object
// const person={
//     fullName: function(){   // fullName is the method
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person1 = {
//     firstName:"John",   // properties
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
//   person.fullName.call(person1);

//   apply()
// const person={
//     fullName: function(){   // fullName is the method
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person1 = {
//     firstName:"John",   // properties
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
//   console.log(person.fullName.apply(person1));

  // difference
//   call () method take arguments seperately
// apply () method take arguments as an array

// const person={
//     fullName: function(city,country){   // fullName is the method
//         return this.firstName + " " + this.lastName + " " + city + " "+country;
//     }
// }
// const person1 = {
//     firstName:"John",   // properties
//     lastName: "Doe"
//   }
//   console.log(person.fullName.apply(person1,["delhi","india"]))

  const person={
    fullName: function(city,country){   // fullName is the method
        return this.firstName + " " + this.lastName + " " + city + " "+country;
    }
}
const person1 = {
    firstName:"John",   // properties
    lastName: "Doe"
  }
  console.log(person.fullName.call(person1,"delhi","india"))