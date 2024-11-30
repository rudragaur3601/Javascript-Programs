const person1 = {
    name: "Rudra",
    lastname: "Gaur",
    sayhello: function() {
        console.log(`Hi, I am ${this.name}`);
    }
};
const person2 = {
    name: "Gautam",
    lastname: "Gaur",
    sayhello: function() {
        console.log(`Hi, I am ${this.name}`);
    }
};

person1.sayhello();  
person2.sayhello();
