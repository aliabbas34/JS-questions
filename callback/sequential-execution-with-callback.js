// Sequential Execution with Callbacks:
// - Create a function 'series' that sequentially does the following.
    
//     1. Read the contents of `a.txt` using UTF-8 encoding.
//     2. Wait for 3 seconds.
//     3. Write the contents of `a.txt` in `b.txt`.
//     4. Remove any extra spacing from `a.txt`.
//        (refer to kirat's async 'file-cleaner' problem from week 1)
//     5. delete the contents of `a.txt`.
//     6. delete the contents of `b.txt`.

const fs=require('fs');

function series(){

    function removeExtraSpacing(fileName){
        fs.readFile(fileName,'utf-8',(err,data)=>{
            if(err) throw err;
            else{
                data=data.trim();
                let newData="";
                let spaceCount=0;
                for(let i=0;i<data.length;i++){
                    if(data[i]===' ') spaceCount++;
                    if(spaceCount<=1){
                        newData+=data[i];
                    }
                    if(data[i]!=' ') spaceCount=0;
                }
                fs.writeFile('b.txt',newData,(err)=>{
                    if(err) throw err;
                })
            }
        })
    }

    fs.readFile('a.txt','utf-8',(err,data)=>{
        if(err) throw err;
        else{
            console.log("success 1");
            setTimeout(function callback(){
                fs.writeFile('b.txt',data,(err)=>{
                    console.log("success 2");
                    if(err) throw err;
                    else{
                        console.log("success 3");
                        removeExtraSpacing('a.txt');
                        console.log("success 4");
                        fs.writeFile('a.txt','',(err)=>{
                            if(err) throw err;
                            else{
                                console.log("success 5");
                                fs.writeFile('b.txt','',(err)=>{
                                    if(err) throw err;
                                    else{
                                        console.log("success 6");
                                    }
                                })
                            }
                        });
                    }
                })
            },3000);
        }
    })
}
series();