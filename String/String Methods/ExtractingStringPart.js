// Slice ()
function slice1(str1,strt,end){
    if(typeof end==='undefined'){
        end=str1.length
    }
    // // for negative indexes
    if(strt<0||end<0){
        strt=str1.length+strt
        end=str1.length+end
        let nstr=''
        let i=end
        while(i<=strt){
            nstr=nstr+str1[i]
            i++
        }
        return nstr
    }
    else{
        let nstr=''
        let i=strt
        while(i<end){
            nstr=nstr+str1[i]
            i++
        }
        return nstr
    }
}
const str1="abcd,efgh,ijkl"
let strt=4
let end=7
var nstr1=slice1(str1,strt,end)
console.log(nstr1)



// substr()
function substr1(str1,start,len){
    let newstr=''
    let i=0
    while(i<len){
        newstr+=str1[start+i]
        i++
    }
    return newstr
}
const str2="abcd,efgh,ijkl"
let strt1=0
let length=8
var nstr2=substr1(str1,strt,length)
console.log(nstr2)


// ----------------------------------------------------------------
// function slice1(str1, strt, end) {
//     // Handle undefined end parameter
//     if (typeof end === 'undefined') {
//         end = str1.length;
//     }
    
//     // Handle negative indices
//     if (strt < 0) {
//         strt = str1.length + strt;
//     }
//     if (end < 0) {
//         end = str1.length + end;
//     }
    
//     // Ensure indices are within valid bounds
//     strt = Math.max(0, Math.min(str1.length, strt));
//     end = Math.max(strt, Math.min(str1.length, end));
    
//     // Extract substring
//     let nstr = '';
//     for (let i = strt; i < end; i++) {
//         nstr += str1[i];
//     }
    
//     return nstr;
// }

// const str1 = "abcd,efgh,ijkl";
// let strt = 4;
// let end = 7;
// let nstr1 = slice1(str1, strt, end);
// console.log(nstr1); // Output should be "efg"
