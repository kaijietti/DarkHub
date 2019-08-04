function addcookies(username,time){   //add cookies for a user

    var exp = new Date();
    exp.setDate(exp.getDate() + time);
    document.cookie = "username = " + username+';expires='+exp+";path=/";
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
    return null;
}

function removecookie(username){
    addcookies(username,-1);
}

function removeAllCookie(){
    addcookies('fail',-1);
}

function getLoginedCookie(){
    let arr = document.cookie.split(';');
    try{
        let arr2 = arr[0].split('=');
        if((typeof arr2[1]) === undefined){
            console.log(arr2[1]);
            return null;
        }
        return arr2[1];
    }catch(err){
        console.log(err);
    }
    return null;
}


function getUserIcon() {//登录时头像，获取username时马上显示
    let username = $('#userName').val();
    //console.log('changing username to '+ username);
    let url = '/imags/user/' + username + '.png';
    $('#usericon').attr('src',url);
}

function signIn(){

    let username = $("#userName").val();
    let password = $("#userPass").val();
    if(!username || !password) return;
    let sql_pattern = /select|update|delete|truncate|join|union|exec|insert|drop|count|’|"|;|>|<|%/i;
    if(sql_pattern.test(username) || sql_pattern.test(password)){
        alert('Wrong input cannot be accepted.');
        return;
    }else{
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
            let userhome_url = './index.html';
            // add coodies here:
            addcookies(username,1);
            window.location.href = userhome_url;
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
