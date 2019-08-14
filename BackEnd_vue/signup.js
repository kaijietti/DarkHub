function signup(connect,data,database,callback){
  let username = data.username;
  let password = data.password;

  var checkuser = function(username,callback){
    connect.query('select * from ' + database + ' where username = ?',[username],function(err,result){
      if(err){
        console.log('cannot access mysql');
        callback('cannot access mysql');
      }else{
        if(result.length == 0){
          console.log('username can be used ' + username);
          callback(1);
        }else{
          console.log('username already exists');
          callback('username already exists ' + username);
        }
      }
    })
  }

  checkuser(username,function(result){
    if(result === 1){
      // success checking and sign up this username:
      connect.query('insert into ' + database + ' (username,password,iconPath) values (?,?,?)',[username,password,'./store/icon/usericon.png'],function(err,result){
        if(err){
          console.log(err);
          console.log('error occur when insert into database ' + database + ' for username : ' + username);
          callback('error occur when insert into database ' + database + ' for username : ' + username);
        }else{
          console.log('success create username : ' + username);
          callback(1);
        }
      });
    }else{
      callback(result);
    }
  })
}

module.exports = {
  signup
}