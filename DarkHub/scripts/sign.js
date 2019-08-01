document.write("<script src='./jquery.js></script>");

// function getUserTextInfo() {
//     var username;
//     var userpass;

//     username = document.getElementById('userName');
//     userpass = document.getElementById('userPass');

//     alert('hah');
// }

// function getUserIcon() {//登录时头像，获取username时马上显示
    
// }

// function signIn(){
//     alert("signin");
// }
// function signup(){
//     alert("signup");
// }

function signIn(){
    let username = $("#userName").value();
    let password = $("#userPass").value();
    alert(username + ' ' + password);
}
function signUp(){
    alert("not completed.")
}