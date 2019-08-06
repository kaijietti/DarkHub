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


function changeInfo(){
    // 注明：此处的username不能直接从前端的文本框里得到（避免恶意更改）,而应该从cookie中获得名字。
    // 如果cookie无效，则表明无效提交。

    let username = login();
    let sex = document.getElementById('sex');
    let phone = document.getElementById('phone');
    let address = document.getElementById('address');

    if(!username){
        alert('修改失败！');
        window.location.reload(true);
    }
    let data = {
        username:username,
        sex:sex,
        phone:phone,
        address:address
    }
    let url = ''
    //post:
    // $.ajax({
    //     data:data,
    //     url:url,
    //     type:'POST',
    //     success:(result)=>{
    //         alert('修改成功！');
    //     },
    //     error:(xhr,errstatus,err)=>{
    //         alert('修改失败！');
    //         console.log(err);
    //     }
    // })
    window.location.reload(true);   //F5
}

function getUserIcon(username){
    let targetFile = '../imags/users/'+username+'.png'
    let defaultFile = '../imags/usericon.png';
    let file = new File(targetFile);
    if(file.exists()){
        return targetFile;
    }else{
        return defaultFile;
    }
}