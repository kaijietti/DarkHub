const urls = 'http://localhost:8080'  // backend port
//type: 0 signup; 1 login

function post_signup(urls,password,username){
  let signupSuc = true;
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
      signupSuc = true;
    },
    error:function(xhr,txtstatus,errthrow){
      alert('Failed.Maybe you can choose another username and try again.');
      signupSuc = false;
    }
  })
  return signupSuc;
}

function post_login(urls,password,username){
  let loginSuc = true;
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
      loginSuc = true;
    },
    error:function(xhr,txtstatus,errthrow){
      loginSuc = false;
      alert('Failed.Wrong username or password');
    }
  })
  return loginSuc;
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
    let postresult = post_signup(urls,password,username);
    if(postresult){
      alert('Sign Up successfully.');
      window.location.href = './sign';
    }
  }
}

function Login(){
  let username = $('#username_login').val();
  let password = $('#username_login').val();

  let postresult = post_login(urls,password,username);
  
  if(postresult){
    setCookie(username,1);
    window.location.href = './index'
  }else{
    alert('Failed. Wrong username or password.')
  }
}