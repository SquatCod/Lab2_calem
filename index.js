var http = require('http');  
var url = require('url');  
var fs = require('fs');  

var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    if (path == '/'){ 
        //readfile needs an error argument for it to work even though i never use it, 
        //otherwise readfile will not work
            fs.readFile(__dirname + (path + "index.html"), function(error, data) {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
            });  
            
        }else if (path == '/about') { 
            fs.readFile(__dirname + (path + ".html"), function(error, data) {    
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
            });  
            
        }else if (path == '/contact') {
            fs.readFile(__dirname + (path + '_me.html'), function(error, data) {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();   
            });  
            
        
        }else {
            fs.readFile(__dirname + '/404.html', function(error,data) {   
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
               
                }
        )}
});  
server.listen(5000);
console.log("server is running")  