var url = 'http://localhost:8080';

function getUserIcon(username){
  let url = '/imags/users/' + username + '.png';
  return url;
} //already defined in index.js

function post(data,url){
  $.ajax({
    data:data,
    url:url,
    type:'POST',
    dataType:'text',
    success:function(result){
      return true;
    },
    error:function(xhr,txtstatus,errthrow){
      console.log(errthrow);
      return false;
    }
  })
  return true;
}


function sendContactInfo(){
  let contactName = $('#ContactName').val();
  let contactEmail = $('#ContactEmail').val();
  let contactPhone = $('#ContactPhone').val();
  let contactMsg = $('#ContactMsg').val();

  let data = {
    Name : contactName,
    Email : contactEmail,
    Msg : contactMsg,
    Phone : contactPhone,
    type: 4
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