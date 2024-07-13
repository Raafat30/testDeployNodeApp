
const http = require('http');
const server = http.createServer((req,res)=>{

  res.writeHead(200,{"Content-type":"text/plain"})
  res.end("Hello World");
})

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=> console.log("server is runing in port 3000"))


// time :01:34 m