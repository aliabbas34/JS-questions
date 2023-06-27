// Asynchronous Callback:
// - Write a function 'higherOrderAsync' that takes a callback function as an argument. Inside 'higherOrderAsync', call the callback function asynchronously using setTimeout after a delay of n seconds, where n is current day of the month according to UTC time (1 <= n <= 31).

function higherOrderAsync(callbackFn){
    const date=new Date();
    let n=date.getDate();
    setTimeout(callbackFn,n*1000);
}
function callbackFn(){
    console.log("hello from callback");
}
higherOrderAsync(callbackFn);