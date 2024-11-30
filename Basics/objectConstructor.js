function Car(name,model,year,color){
    this.name = name,
    this.model=model,
    this.year=year,
    this.color=color
}
const car1 = new Car("ford","mustang",2023,"black");   //new keyword make a new object
console.log(car1.name)