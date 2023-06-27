// Array Filter with Callback:
// - Write a function 'filterArray' that takes an array and a callback function as arguments. 'filterArray' should filter the elements of the array based on the condition specified by the callback function and return a new array with the filtered elements.

function filterArray(arr,callback){
    let newArray=arr.filter(element=>callback(element));
    return newArray;
}
let arr=[1,10,23,4,8,6,9,0];
function callback(n){
    if(n<6) return true;
}
let ans=filterArray(arr,callback);
console.log(ans);