function addcookies(username,time){   //add cookies for a user
    //time = 1 * 60 * 60 * 1000;  // 一小时超时时间
    var exp = new Date();
    exp.setDate(exp.getDate() + time);
    document.cookie = "username = " + username+';expires='+exp+";path=/";
}

function getUserIcon(username){
    let url = '/imags/users/' + username + '.png';
    return url;
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

function login(){
    try{
        let arr = document.cookie.split(';');
        let arr2 = arr[0].split('=');
        console.log(arr2[1]);
        return arr2[1];
    }catch(err){
        console.log(err);
    }
    return '';
}

function logout(){
    //delete cookie:
    if(confirm('确认退出吗？')){
        removeAllCookie();
        window.location.href = '/';
    }
}