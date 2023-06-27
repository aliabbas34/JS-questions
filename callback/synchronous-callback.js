// Synchronous Callback:
// - Write a function 'higherOrder' that takes a callback function as an argument. Inside 'higherOrder', call the callback function synchronously.

function callbackFn(){
    console.log("hello form callback");
}
function highOrder(callbackFn){
    callbackFn();
}
highOrder(callbackFn);
