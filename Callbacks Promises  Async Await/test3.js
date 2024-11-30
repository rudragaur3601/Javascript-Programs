const arr1=[1,[2,3],4,[5,[6,7]],8,[9,[10,11,[12,13,34]]]]
const newArr=[]
myArr=recursiveArray(arr1)

function recursiveArray(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            recursiveArray(arr[i])
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr

}
// function recursiveArray(arr){
//     const newArr=[]
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             for(let j=0;j<arr[i].length;j++){
//                 // recursiveArray(arr[i][j])
//                 newArr.push(arr[i][j])
                
//             }
            
//         }
//         else{
//             newArr.push(arr[i]) 
//         }
//     }
//     return newArr
// }
console.log(myArr)













// for (let i=0;i<arr1.length;i++){
//     if(Array.isArray(arr1[i])){
//         for(let j=0;j<arr1[i].length;j++){
//             newArr.push(arr1[i][j])
//         }
//     }
//     else{
//         newArr.push(arr1[i])
//     }
// }
// console.log(newArr)

// will only reduce to one level
// const arr2=arr1.flat();
// console.log(arr2) // [ 1, 2, 3, 4, 5, [ 6, 7 ], 8, 9, 10 ]

// const arr2=arr1.flat(Infinity)
// console.log(arr2)

