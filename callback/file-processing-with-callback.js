// File Processing with Callback:
// - Write a function 'readFileCallback' that takes a filename and a callback function. 'readFileCallback' should read the contents of the file asynchronously and pass the data to the callback function.

const fs=require('fs');

function readFileCallback(filename,callback){
    //MAKE THE FILE READ PROCESS ASYNCHRONOUS.
    fs.readFile(filename,'utf8',(err,data)=>{
        if(err) console.log(err);
        else callback(data);
    })
}
function callback(data){
    console.log(data);
}
readFileCallback('a.txt',callback);