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
const database = 'test'

// add the required js here:


// // this is the begin of the script:

var http = require('http');
var querystring = require('querystring');
var mysql = require('mysql');
var urls = require('url');

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
    // do something here:
  }
  else{ // POST request:
    var post = '';
    req.on('data',function(chunk){
      post += chunk;
    });

    req.on('end',function(){
      post = querystring.parse(post);
      switch(post.type){     // type of post:
        case 0:{
          // signup
        }
        case 1:{
          // login
        }
        case 2:{
          // fill user information
        }
        case 3:{
          // asking user information
        }
        case 4:{
          // contact us:
        }
      }
    })
  }
}).listen(port);

console.log('backend.js is listening at ' + url + ":" + port);