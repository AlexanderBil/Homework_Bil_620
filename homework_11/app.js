//Task_1
const http = require('http');

const os = require('os');
let sec = os.uptime();
let min = sec/60;
sec = Math.floor(sec);
min = Math.floor(min);
sec = sec%60;


http.createServer(function(request, response){
   response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
   response.write(`<div style="font-size:20px; font-weight:bold">System information</div>
   <div>Current user name: ${require("os").userInfo().username}</div>
   <div>OS type: ${require('os').type}</div>
   <div>Syster work time: ${min}.${sec} minutes</div>
   <div>Current work directory: ${require('path').dirname(require.main.filename)}<div/>
   <div>Server file name: ${require('path').basename(__filename)}</div>`);
   response.end();
}).listen(5000);


//Task_2
const message  = require('./personalmodule');
const userName = os.userInfo().username;

http.createServer(function(request, response){
   response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
   response.write(message(userName));
   response.end();
}).listen(8000);