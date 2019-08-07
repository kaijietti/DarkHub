const urls = 'http://localhost:8080'

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

function getUserIcon(username){
    let url = '/imags/users/' + username + '.png';
    return url;
}

function changeInfo(){
    let username = login();
    let name = $('#name').val();
    let email = $('#mail').val();
    let phone = $('#phone').val();
    let address = $('#address').val();

    let data = {
        username:username,
        name:name,
        email:email,
        phone:phone,
        address:address,
        type:2
    }

    let changeSuc = false;

    $.ajax({
        data:data,
        type:'POST',
        url:urls,
        dataType:'text',
        success:function(result){
            changeSuc = true;
        },
        error:function(xhr,txtstatus,errthrow){
            changeSuc = false;
            console.log(errthrow);
        }
    })
    return changeSuc;
}