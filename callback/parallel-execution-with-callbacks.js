// Parallel Execution with Callbacks:
// - Implement a function 'parallelFileOperation' that returns an array of size 2 with the first index containing the contents of the file 'a.txt' in UTF-8 encoding. If `a.txt` doesn't exist, then throw an error. The second element of the array contains 1 if the text `Hello!` is successfully written to the file `b.txt` and 0 if the write operation fails.

const fs=require('fs');

function parallelFileOperation(readFile,writeFile){
    let ansArr=[];
    fs.readFile(readFile,'utf-8',(err,data)=>{
        if(err){
            throw new Error('File does not exist');
        }
        else{
            ansArr[0]=data;
            fs.writeFile(writeFile,'Hello!',(err)=>{
                if(err){
                    ansArr[1]=0;
                }
                else{
                    ansArr[1]=1;
                    console.log(ansArr);
                    return ansArr;
                }
            });
        }
    });
}

parallelFileOperation('a.txt','b.txt');