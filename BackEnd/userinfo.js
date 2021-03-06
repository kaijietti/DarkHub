function addInfo(connect,data,database,callback){
  let username = data.username;
  let name = data.name;
  let email = data.email;
  let phone = data.phone;
  let address = data.address;

  var checkUser = function(username,callback){
    connect.query('select * from ' + database + ' where username = ?',[username],function(err,result){
      if(err){
        console.log('cannot access mysql');
        callback('cannot access mysql');
      }else{
        if(result.length == 0){
          console.log('not exist username '+ username);
          callback('not exist username ' + username);
        }else{
          callback(1);
        }
      }
    })
  }

  checkUser(username,function(result){
    if(result === 1){
      // success
      connect.query('update ' + database + ' SET name=?,email=?,phone=?,address=? where username=?',[name,email,phone,address,username],function(err,result){
        if(err){
          console.log(err);
          console.log('update datas failed!');
          callback('update datas failed!')
        }else{
          callback(1);
        }
      })
    }else{
      callback(result);
    }
  })
}

function askInfo(connect,data,database,callback){
  let username = data.username;

  connect.query('select name,phone,address,email from ' + database + ' where username = ?',[username],function(err,result,field){
    if(err){
      console.log('cannot access mysql');
      callback('cannot access mysql',{});
    }else{
      if(result.length <= 0){
        console.log('not exists username : ' + username);
        callback('not exists username : ' + username,{})
      }else{
        let name = result[0].name;
        let phone = result[0].phone;
        let email = result[0].email;
        let address = result[0].address;

        let re = {
          name:name,
          phone:phone,
          email:email,
          address:address
        }

        callback(null,re);
      }
    }
  })
}


module.exports = {
  addInfo,
  askInfo
}