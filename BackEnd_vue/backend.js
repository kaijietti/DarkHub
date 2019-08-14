// this is the backend of the project::
// settings:

/// listening url:
const url = 'http://172.0.0.1'
/// listening port:
const port = 8080;

/// database port:
const databasePort = '3306';  //3306 is the default port of MYSQL;
/// database host:
const databaseHost = 'localhost'; // default
/// database username:
const databaseUsername = 'root';
/// database password:
const databasePassword = 'OPENtextfile+123';
/// database's name:
const database = 'test';

/// tablename:
const main = 'main';
const contact = 'contact';

// add the required js here:
var signup = require('./signup.js').signup;
var login = require('./login.js').login;
var askinfo = require('./userinfo.js').askInfo;
var addinfo = require('./userinfo.js').addInfo;
var contactus = require('./contact_us.js').contactus;

// // this is the begin of the script:

var http = require('http');
var querystring = require('querystring');
var mysql = require('mysql');
var urls = require('url');
var fs = require('fs');

// connnect to the database:
var connectsql = mysql.createConnection({
  host        :       databaseHost,
  user        :       databaseUsername,
  password    :       databasePassword,
  database    :       database,
  port        :       databasePort,
})

connectsql.connect();

http.createServer(function(req,res){
  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader("Access-Control-Allow-Methods","GET,POST");
  if(req.method.toLowerCase() == 'get') //GET request:
  {
    var params = urls.parse(req.url, true).query;
    if(params.type === 1){ // asking icon
      connectsql.query('select iconPath from main where username = ?', [params.username],function(err,result){
        if(err){
          res.writeHead(401,{'content-type':'text/plain'});
          res.end('401');
        } else {
          let iconPath = result[0];
          fs.readFile(iconPath,'binary',function(err,data){
            if(err){
              res.writeHead(404,{'content-type':'text/plain'});
              res.end();
            }
            else{
              res.writeHead(200,{'content-type':'image/png'});
              res.write(data,'binary');
              res.end();
            }
          })
        }
      })
    }else{
      res.writeHead(403,{'content-type':'text/plain'});
      res.end();
    }
  }
  else{ // POST request:
    var post = '';
    req.on('data',function(chunk){
      post += chunk;
    });
    req.on('end',function(){
      post = '[' + post + ']';
      post = JSON.parse(post)[0];
      if(post.type == 0){     // type of post:
        // signup
        signup(connectsql,post,main,function(result){
          if(result === 1){
            // success:
            res.writeHead(200,{'content-type':'text/html'});
            res.end('<h1>Success!</h1>');
            return;
          }else{
            // error occur:
            res.writeHead(403,{'content-type':'text/plain'});
            res.end(result);
            return;
          }
        })
      }else if(post.type == 1){
        // login
        login(connectsql,post,main,function(result){
          if(result === 0){
            res.writeHead(403,{'content-type':'text/plain'});
            res.end('Wrong username or password');
            return;
          }else if(result === 1){
            res.writeHead(200,{'content-type':'text/plain'});
            res.end('Success login');
            return;
          }else{
            res.writeHead(403,{'content-type':'text/plain'});
            res.end(result);
            return;
          }
        })
      }
       else if(post.type == 2){
        // fill user information
        addinfo(connectsql,post,main,function(result){
          if(result === 1){
            res.writeHead(200,{'content-type':'text/plain'});
            res.end('Success post infomation.');
            return;
          }else{
            res.writeHead(403,{'content-type':'text/plain'});
            res.end(result);
            return;
          }
        })
      }
      else if(post.type == 3){
        // asking user information
        askinfo(connectsql,post,main,function(err,result){
          if(err){
            console.log(err);
            res.writeHead(403,{'content-type':'text/plain'});
            res.end(err);
          }else{
            res.writeHead(200,{'content-type':'text/json'});
            res.end(querystring.stringify(result));
          }
        })
      }
      else if(post.type == 4){
        // contact us:
        contactus(connectsql,post,contact,function(result){
          if(result === 1){
            // success:
            console.log('send message');
            res.writeHead(200,{'content-type':'text/plain'});
            res.end('Success send message');
          }else{
            res.writeHead(403,{'content-type':'text/plain'});
            res.end('Send message failed!');
          }
        })
      }
      else{
        res.writeHead(401,{'content-type':'text/plain'});
        res.end('not completed!');
      }
    })
  }
}).listen(port);

console.log('backend.js is listening at ' + url + ":" + port);