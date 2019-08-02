// start app.js in terminal : node app.js
// it is just a test node.js for the project at 2019-08-02

var http = require('http')
var fs = require('fs')

var server = http.createServer();

const port = 4000;  

server.listen(port,function(){
    console.log('The frontend is already listening at http://localhost:' + port);
})

server.on('request',function(request,response){
    var url = request.url;

    if(url == '/'){
        fs.readFile('./logon.html','utf-8',function(err,data){
            if(err){
                console.log('error when accessing ' + url);
                response.writeHead(404,{'content-type':'text/html'});
                response.end('<h1>404-ERROR</h1>')
            }else{
                console.log('accessing ' + url);
                response.writeHead(200,{'content-type':'text/html'});
                response.end(data);
            }
        })
    }
    else if(/^\/styles\/([a-z]|[A-Z]|[0-9])+.css$/.test(url)){
        let cssname = url.substring(8);
        console.log('cssname = '+  cssname);
        fs.readFile('./styles/'+cssname,'utf-8',function(err,data){
            if(err){
                console.log('error when accessing ' + url);
                console.log(err);
                response.writeHead(404,{'content-type':'text/html'});
                response.end('<h1>404-ERROR</h1>');
            }else{
                console.log('accessing ' + url);
                response.writeHead(200,{'content-type':'text/css'});
                response.end(data);
            }
        })
    }else if(/^\/imags\/(\S)+.(\S)+$/.test(url)){
        let imgname = url.substring(7);
        fs.readFile('./imags/' + imgname,'binary',function(err,data){
            if(err){
                console.log('error shen accessing ' + url);
                response.writeHead(404,{'content-type':'text/html'});
                response.end('<h1>404-ERROR</h1>');
            }else{
                console.log('accessing ' + url);
                response.writeHead(200,{'content-type':'image/png'});
                response.write(data,'binary');
                response.end();
            }
        })
    }else if(url === '/favicon.ico'){ // do nothing.
        response.writeHead(200,{'content-type':'text/html'});
        response.end('favicon.ico');
    }
    else if(url === 'logon.html' || url === 'logon'){
        fs.readFile('./logon.html','utf-8',function(err,data){
            if(err){
                console.log('error when accessing ' + url);
                response.writeHead(404,{'content-type':'text/html'});
                response.end('<h1>404-ERROR</h1>');
            }else{
                console.log('accessing ' + url);
                response.writeHead(200,{'content-type':'text/html'});
                response.end(data);
            }
        })
    }else if(url === 'signup.html' || url == 'signup'){
        fs.readFile('./signup.html','utf-8',function(err,data){
            if(err){
                console.log('error when accessing ' + url);
                response.writeHead(404,{'content-type':'text/html'});
                response.end('<h1>404-ERROR</h1>');
            }else{
                console.log('accessing ' + url);
                response.writeHead(200,{'content-type':'text/html'});
                response.end(data);
            }
        })
    }
    else if(/^\/scripts\/(\S)+.js$/.test(url)){
        let scriptsname = url.substring(9);
        fs.readFile('./scripts/' + scriptsname,'utf-8',function(err,data){
            if(err){
                console.log('error when accessing ' + url);
                response.writeHead(404,{'content-type':'text/html'});
                response.end('<h1>404-ERROR</h1>');
            }else{
                console.log('accessing ' + url);
                response.writeHead(200,{'content-type':'text/html'});
                response.end(data);
            }
        })
    }
    // add 'else if' if more html files are added.
    else{
        console.log(url + ' ///: not completed');
        response.writeHead(502,{'content-type':'text/html'});
        response.end('not completed');
    }
})