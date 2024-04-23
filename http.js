const http = require('http')
const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('welcome to home')
    return;
   }
   if(req.url === '/about'){
    res.end('welcome to about page')
    return;
   }
   res.end('oops error')
})
server.listen(5000)