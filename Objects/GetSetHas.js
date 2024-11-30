// Map=object that holds key-value pair
const store = new Map([
    ["t-shirts",20],
    ["shorts",30],
    ["socks",25],
]);
//store is a map object
let shop=0;
// shop+=store.get("t-shirts");
shop+=store.get("shocks");
console.log(shop)

//to add a method to cart
// store.set("hat",40);
// console.log(store)
// store.delete("hat");
// console.log(store.size)
// console.log(store.has("socks"))  // this will return true or false
// store.forEach((value,key)=>console.log(`${key} ${value}`)) // will iterate through each pair of map and display]


// console.log(store)