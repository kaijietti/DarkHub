function getUserIcon(username){
  let url = '/imags/users/' + username + '.png';
  return url;
} //already defined in index.js

function post(data,url){
  // $.ajax({
  //   data:data,
  //   url:url,
  //   type:'POST',
  //   success:function(result){
  //     return true;
  //   },
  //   error:function(xhr,txtstatus,errthrow){
  //     console.log(errthrow);
  //     return false;
  //   }
  // })
  return true;
}


function sendContactInfo(){
  let contactName = $('#ContactName').val();
  let contactEmail = $('#ContactEmail').val();
  let contactPhone = $('#ContactPhone').val();
  let contactMsg = $('#ContactMsg').val();

  let url = '';

  let data = {
    Name : contactName,
    Email : contactEmail,
    Msg : contactMsg,
    Phone : contactPhone
  }

  let postresult = post(data,url)

  if(postresult){
    alert('Submit successfully!')
    $('#ContactName').val('');
    $('#ContactEmail').val('');
    $('#ContactPhone').val('');
    $('#ContactMsg').val('');
  }else{
    alert('Submit Failed! Please wait for some mins and try again.')
  }

}