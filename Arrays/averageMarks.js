let marks=[5,5,5,5,5];
let avg=0;
let sum=0;
for(let mark of marks){
    sum=sum+mark;
}
avg=sum/(marks.length);
console.log(avg);