// function getUserTextInfo() {
//     var username;
//     var userpass;

//     username = document.getElementById('userName');
//     userpass = document.getElementById('userPass');

//     alert('hah');
// }
function addcookies(username,time){   //add cookies for a user
    //time = 1 * 60 * 60 * 1000;  // 一小时超时时间
    var exp = new Date();
    exp.setTime(exp.getTime() + time);
    document.cookie = "username = " + username+';expires='+exp;
    console.log('cookies for ' + username + ' written');
}

function getCookie(username){
    let arr = document.cookie.split(';');
    for(let i = 0;i<arr.length;i++){
        let arr2 = arr[i].split('=');
        try{
            if(arr2[1] == username){
                return arr2[1];
            }
        }catch(err){
            console.log(err);
        }
    }
    return 'null';
}

function removecookie(username){
    setCookie(username,-1);
}

function removeAllCookie(){
    var arr = document.cookie.split()
}

function getUserIcon() {//登录时头像，获取username时马上显示
    //alert("the username has changed to " + $('#userName').val());
    //suppose that the icon of a existed user stores in ../imags/users/username.png
    // let username = $('#username').val();
    // let url = '../imags/users/'+username+'.png';
    // let fs = require('fs');
    // if(!fs.exists(url)){
    //     url = '../imags/usericon.png';
    // }
    // $('#usericon').src = url;
    let username = $('#userName').val();
    //console.log('changing username to '+ username);
    let url = '/imags/user/' + username + '.png';
    $('#usericon').attr('src',url);
    // console.log(url);
    // console.log($('usericon').attr('src'));
}

function signIn(){
    // delete all the cookies that have been set:
    //removeAllCookie();

    let username = $("#userName").val();
    let password = $("#userPass").val();
    if(!username || !password) return;
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
            // add coodies here:
            addcookies(username);
            //window.location.href = userhome_url;
            //console.log(getCookie(username));
        }
        else{
            alert('用户名不存在或者密码错误!');
        }
    }
}
function signUp(){
    window.location.href = './signup.html';
}
