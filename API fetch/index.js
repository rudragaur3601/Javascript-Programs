const URL="https://cat-fact.herokuapp.com/facts"
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn")
/*
fetch api:provides an interface for fetching resources
it uses Request and Response objects
the fetch() method is used to fetch resource(data)

let promise = fetch(url,[options])
*/

/*
fetch return 1st promise
1)response (json)
2)convert js object
json () method : return 2nd promise that resolve with 
the result of parsing theh response body text as json

input is json object , output is js object

*/



// adding eventListner to btn

// using async awaits (get request)
const getfacts=async()=>{
    console.log("getting data...")
    let response = await fetch(URL);
    // console.log(response ); //will give result in JSON format
    let data =await response.json();
    // console.log(data[0].text)
    factPara.innerText=data[0].text
}
btn.addEventListener("click",getfacts)

//using promise chaining
// function getFacts(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText=data[0].text
//     })

// }
// btn.addEventListener("click",getFacts)