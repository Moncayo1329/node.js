// call back enssentially what it means is that we run. es decirm que cuando una funcionalidad esta completa  de ahi run the callback. 
// normally would do with add event listener on a button remember cualquier event. 

const { readFile, writeFile} = require('fs')

readFile('./content/subfolder/first.txt', 'utf8',(err,result)=>{
if(err){
    console.log(err)
    return;
}
const first = result;
readFile('./content/subfolder/second.txt','utf8', (err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const second = result
    writeFile('./content/result-sync.txt',
    `Here is the result : ${first}, ${second}`
    ,(err,result)=>{
      if(err) {
        console.log(err);
        return;
      }
      console.log(result)
    }
    )

})
})

