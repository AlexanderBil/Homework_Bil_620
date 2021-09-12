const http = require('http');
const fs = require('fs');
let static = require('node-static');
let file = new static.Server('.', {
  cache: 0
})
let date = new Date();
    fs.writeFile('data.txt', `<p>${date.toString().slice(0, 33)}</p>`, (err) => {
        if(err) throw err;        
    })

http.createServer(function(request, response){

  if(request.url == '/data.txt'){
        file.serve(request, response);        
  }
      else{
    file.serve(request, response);
  }

 }).listen(8080);
 console.log('http://localhost:8080');
 








