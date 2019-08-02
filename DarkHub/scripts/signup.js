// for signup.html.

function reset(){
    $('#userPass').val('');
    $('#userPassConfirm').val('');
}

function islegal(username,password){
    let usernamePattern = /^([a-z]|[A-Z]|[0-9])+$/
    if(!usernamePattern.test(username)){
        return false;
    }
    if(username.length > 30 || username.length < 6){
        return false;
    }
    if(password.length > 30 || password.length < 8){
        return false;
    }
    return true;
}

function signUp(){
    let username = $('#userName').val();
    let password = $('#userPass').val();
    let confirm = $('#userPassConfirm').val();
    if(!username || !password || !confirm) return;
    if(password != confirm){
        alert('两次输入的密码不正确')
        reset();
    }
    else if(!islegal(username,password)){
        alert('不符合规则的输入');
    }else{
        // post:
        /*
        
        let data = {
            username:username,
            password:password
        }

        $.ajax({
            data:data,
            type:'POST',
            url: ... ,
            success:function(data){
                alert('注册成功');
                window.location.href = './logon.html';
            },
            error:function(xhr,txtstatus,errthrow){
                reset();
                alert('注册失败!\n可能该用户名已经存在');
                console.log(errthrow);// more datas will be shown in console.
            }
        })

        //后端应该对接受的用户名和密码再进行一次规则判断
        
        */
       alert('注册成功: ' + username + ' ' + password);
    }
}