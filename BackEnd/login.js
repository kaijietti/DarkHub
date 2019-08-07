function login(connect,data,database,callback){
  let username = data.username;
  let password = data.password;

  var loginConfirm = function(username,password,callback){
    connect.query('select * from ' + database + ' where username = ? and password = ?',[username,password],function(err,result){
      if(err){
        console.log('cannot access mysql - login');
        callback('cannot access mysql');
      }else{
        if(result.length > 0){
          // login success
          callback(1);
        }else{
          // login failed
          callback(0);
        }
      }
    })
  }

  loginConfirm(username,password,function(result){
    callback(result);
  });
}

module.exports = {
  login
}