const {readFile, writeFile} = require('fs')

// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')
// console.log(first,second)


//it will create a file and add that content in that text file.
// const writeFirstFile = writeFileSync('./content/result-sync.txt',`hello i am writing a text file from ${first} and ${second} `)


//async-example

// readFile('./content/first.txt','utf8',(err,result)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   const first = result;
//   readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     const second = result;
//     writeFile('./content/result-sync.txt',`here is the result ${first} and ${second}`,
//     (err,result)=>{
//      if(err){
//         console.log(err)
//         return
//      }
//      console.log(result)
//     }
// )
//   })
// })


//sync-example:::
