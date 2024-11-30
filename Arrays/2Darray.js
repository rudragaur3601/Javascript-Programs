let fruits=["app","org","ban"];
let veg=["car","oni","pota"];
let meat=["eggs","chick"];
let groceryList=[fruits,veg,meat];
// for chnaging value at index
groceryList[0][3]="mang"
for(let list of groceryList){
    for(let food of list){
        console.log(food)
    }
    }
// console.log(groceryList)