// function getUserTextInfo() {
//     var username;
//     var userpass;

//     username = document.getElementById('userName');
//     userpass = document.getElementById('userPass');

//     alert('hah');
// }

function getUserIcon() {//登录时头像，获取username时马上显示
    //alert("the username has changed to " + $('#userName').val());
    //suppose that the icon of a existed user stores in ../imags/users/username.png
    let username = $('#username').val();
    let url = '../imags/users/'+username+'.png';
    let fs = require('fs');
    if(!fs.exists(url)){
        url = '../imags/usericon.png';
    }
    $('#usericon').src = url;
}

function signIn(){
    let username = $("#userName").val();
    let password = $("#userPass").val();
    let sql_pattern = /select|update|delete|truncate|join|union|exec|insert|drop|count|’|"|;|>|<|%/i;
    if(sql_pattern.test(username) || sql_pattern.test(password)){
        alert('Wrong input cannot be accepted.');
        return;
    }else{
        alert(username + ' ' + password + 'is waiting to post.');
        let loginSuccess = true;
        // post to : ...
        /*
            //post(use ajax)
        let data = {
            username:username,
            password:password,
        }
        $.ajax({
            data:data,
            type:'POST',
            url: .... ,
            success:function(data){
                loginSuccess = true;
            },
            error:function(request){
                loginSuccess = false;
            }
        })
        */
        if(loginSuccess){
            let userhome_url = 'about:black';
            window.location.href = userhome_url;
        }
        else{
            alert('用户名不存在或者密码错误!');
        }
    }
}
function signUp(){
    window.location.href = './signup.html';
}
