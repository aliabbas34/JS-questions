// Array Map with Callback:
// - Implement a function 'mapArray' that takes an array and a callback function as arguments. 'mapArray' should apply the callback function to each element of the array and return a new array with the modified values.

function mapArray(callbackFn,arr){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        newArray.push(callbackFn(arr[i]));
        // arr[i]=callbackFn(arr[i]);
    }
    arr.forEach(callbackFn(n))
    return newArray;
}
let arr=[1,2,3,4,5];
function callbackFn(n){
    return n+1;
}
let ans=mapArray(callbackFn,arr);
console.log(ans);