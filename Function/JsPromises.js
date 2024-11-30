// const count =true;
// let countValue=new Promise(function(resolve,reject){
//     if(count){
//         resolve("count value is present")
//     }
//     else {
//         reject("there is no count value")
//     }
// });
//  console.log(countValue);

function display(x){
    console.log(x);
}
let mpromise=new Promise(function (resol,rej){
    let x=0;
    if(x==0){
        resol("ok")
    }
    else{
        rej("error")
    }
});
mpromise.then(
    function(value){
        display(value);
    },
    function(error){
        display(error);
    }
        

);