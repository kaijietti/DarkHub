var http = require('http');
var fs = require('fs');

const port = 4000;

var server = http.createServer();

server.listen(port,function(){
  console.log('The frontend is already listening at http://localhost:' + port);
})

var callBackError = function(url,err,response){
  console.log('error when accessing ' + url);
  response.writeHead(404,{'content-type':'text/html'});
  response.end('<h1>404-ERROR</h1>');
}

var callBackSuc = function(url,data,response){
  console.log('accessing ' + url);
  response.writeHead(200,{'content-type':'text/html'});
  response.end(data);
}

server.on('request',function(request,response){
  var url = request.url;
  if(url === '/'){
    let filePath = './sign.html';
    fs.readFile(filePath,'utf-8',function(err,data){
      if(err){
        callBackError(url,err,response);
      }else{
        callBackSuc(url,data,response);
      }
    })
  }
  else if(/^\/styles\/([a-z]|[A-Z]|[0-9])+.css$/.test(url)){
    let cssname = url.substring(8);
    fs.readFile('./styles/'+cssname,'utf-8',function(err,data){
      if(err){
        callBackError('./styles/'+cssname,err,response);
      }else{
        console.log('accessing ' + url);
        response.writeHead(200,{'content-type':'text/css'});
        response.end(data);
      }
    })
  }
  else if(/^\/imags\/users\/(\S)+.(\S)+$/.test(url)){
    let imgname = url.substring(13);
    fs.readFile('./imags/users/'+imgname,'binary',function(err,data){
      if(err){
        callBackError(url,err,response);
      }else{
        console.log('accessing ' + url);
        response.writeHead(200,{'content-type':'image/png'});
        response.write(data,'binary');
        response.end();
      }
    })
  }
  else if(/^\/imags\/(\S)+.(\S)+$/.test(url)){
    let imgname = url.substring(7);
    fs.readFile('./imags/'+imgname,'binary',function(err,data){
      if(err){
        callBackError(url,err,response);
      }else{
        console.log('accessing ' + url);
        response.writeHead(200,{'content-type':'image/png'});
        response.write(data,'binary');
        response.end();
      }
    })
  }
  else if(/^\/scripts\/([a-z]|[A-Z]|[0-9])+.js$/.test(url)){
    let jsname = url.substring(9);
    fs.readFile('./scripts/' + jsname,'utf-8',function(err,data){
      if(err){
        callBackError(url,err,response);
      }else{
        callBackSuc(url,data,response);
      }
    })
  }
  else if(url === '/favicon.ico'){
    callBackError(url,"",response);
  }
  else{
    let htmlname = url.substring(1);
    let pathname = '';

    if(htmlname.substring(htmlname.length-5) === '.html'){
      pathname = './' + htmlname;
    }else{
      pathname = './' + htmlname + '.html';
    }

    fs.readFile(pathname,'utf-8',function(err,data){
      if(err){
        callBackError(url,err,response);
      }else{
        callBackSuc(url,data,response);
      }
    })
  }
})