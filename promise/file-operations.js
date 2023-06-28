// File Operations
// Description: Implement a function that reads a file in UTF-8 encoding, applies the transform function on the file's contents, and then writes the transformed data to a new file.
// Example usage:
// ```js
// processFile('input.txt', 'output.txt', transform)
//   .then(() => console.log('File processing completed.'))
//   .catch(error => console.error('Error:', error));
// ```

const fs=require('fs');

function transform(data){
    const tr=new Promise((resolve,reject)=>{
        data=data.trim();
        let newData="";
        let spaceCount=0;
        for(let i=0;i<data.length;i++){
            if(data[i]!=' '){
                spaceCount=0;
                newData+=data[i];
            }
            else{ 
                spaceCount++;
                if(spaceCount<=1){
                    newData+=data[i];
                }
            }
        }
        if(newData) resolve(newData);
        else {
            const err=new Error('transform failed');
            reject(err);
        }
    })
    return tr;
}

function processFile(input,output,transform){

    

    function read(){
        const readpr=new Promise((resolve,reject)=>{
            fs.readFile(input,'utf-8',(err,data)=>{
                if(err){
                    reject(err);
                }
                else resolve(data);
            });
        });
        return readpr;
    }

    function write(data){
        const writepr=new Promise((resolve,reject)=>{
            fs.writeFile(output,data,(err)=>{
                if(err){
                    reject(err);
                }
                else resolve('File Processing completed');
            });
        });
        return writepr;
    }

    return new Promise((resolve,reject)=>{
    read()
    .then((data)=>transform(data))
    .then((data)=>write(data))
    .then((msg)=>resolve(msg))
    .catch((err)=>{
        reject(err);
    })
    })
}

//Test case
processFile('a.txt', 'b.txt', transform)
.then(() => console.log('File processing completed.'))
.catch(error => console.error('Error:', error));