const urls = 'http://localhost:8080'  // backend port
//type: 0 signup; 1 login

function post_signup(urls,password,username,callback){
  let data = {
    username  : username,
    password  : password,
    type      : 0
  }
  $.ajax({
    data:data,
    type:'POST',
    url:urls,
    dataType:'text',
    success:function(result){
      callback(true);
    },
    error:function(xhr,txtstatus,errthrow){
      callback(false);
    }
  })
}

function post_login(urls,password,username,callback){
  let data = {
    username : username,
    password : password,
    type     : 1
  }
  $.ajax({
    data:data,
    type:'POST',
    url:urls,
    dataType:'text',
    success:function(result){
      callback(true);
    },
    error:function(xhr,txtstatus,errthrow){
      callback(false);
    }
  })
  // return loginSuc;
}

function checkConfirmTrue(password,confirm){
  return password == confirm;
}

function legalInput(username,password){
  let usernameMax = 15;
  let usernameMin = 6;
  let passwordMax = 20;
  let passwordMin = 8;

  let checkinput = false;
  if(username.length > usernameMax || username.length < usernameMin){
    checkinput = false;
  }else if(password.length > passwordMax || password.length < passwordMin){
    checkinput = false;
  }else{
    checkinput = true;
  }

  return checkinput;
}

function setCookie(username,time){
  let exp = new Date();
  exp.setDate(exp.getDate() + time);
  document.cookie = 'username='+username+';path=/;expires='+exp;
}

function getCookie(){
  let arr = document.cookie.split(';');
  try{
    let arr2 = arr[0].split('=');
    return arr2[1];
  }catch(err){
    console.log(err);
  }
  return null;
}

function SignUp(){
  let username = $('#username').val();
  let password = $('#password').val();
  let confirm  = $('#confirm').val();

  if(!username || !password || !confirm){
    return;
  }
  else if(!checkConfirmTrue(password,confirm)){
    alert('Password is not the same as your confirm password');
  }
  else if(!legalInput(username,password)){
    alert('illegal username or password');
  }
  else{   //post it to url
    post_signup(urls,password,username,function(result){
      if(result){
        alert('Sign Up Successfully!');
        window.location.href = './sign';
      }else{
        alert('Failed! Please change anther username and try again.');
        $('#password').val('');
        $('#confirm').val('')
      }
    });
  }
}

function Login(){
  let username = $('#username_login').val();
  let password = $('#password_login').val();

  post_login(urls,password,username,function(result){
    if(result){
      setCookie(username,1);
      window.location.href = './index';
    }else{
      $('#password_login').val('');
    }
  });
}