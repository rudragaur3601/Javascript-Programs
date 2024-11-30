// object constructor Function
function Person(first,last,age,eye){
    this.firstname=first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.height=5
//The JavaScript prototype property also allows you to add new methods to objects constructors
const myfather=new Person("Rudra","Gaur",23,"black")
console.log(Person);
console.log(myfather.height);