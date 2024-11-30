// constructor function for person Object
function person(first,last,age){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
}
// this havc no Value 
// when new object is created value of this will become the value of object
const me=new person("rudra","gaur",23)
console.log(me.firstName,me.lastName,me.age)