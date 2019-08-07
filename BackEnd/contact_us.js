function contactus(connect,data,database,callback){
  let name = data.Name;
  let phone = data.Phone;
  let email = data.Email;
  let message = data.Msg;
  connect.query('insert into ' + database + ' (name,phone,email,message) values (?,?,?,?)',[name,phone,email,message],function(err,result){
    if(err){
      console.log('cannot access mysql');
      callback('cannot access mysql');
    }else{
      console.log('Success send contact message');
      callback(1);
    }
  })
}

module.exports = {
  contactus
}