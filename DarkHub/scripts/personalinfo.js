const urls = 'http://localhost:8080'

function login(){
    try{
        let arr = document.cookie.split(';');
        let arr2 = arr[0].split('=');
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

function changeInfo(callback){
    let username = login();
    let name = $('#name').val();
    let email = $('#email').val();
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

function getUserInfo(){
    let username = login();
    let data = {
        username : username,
        type     : 3
    }

    $.ajax({
        data:data,
        type:'POST',
        url:urls,
        dataType:'text',
        success:function(result){
            // data format here:
            var reg1 = new RegExp('&','g');
            var reg2 = new RegExp('=','g');

            result = '{"' + result + '"}';
            
            result = result.replace(reg1,'","').replace(reg2,'":"');
            var parse_result = JSON.parse(result);
            $('#name').val(parse_result.name);
            $('#phone').val(parse_result.phone);
            $('#email').val(parse_result.email);
            $('#address').val(parse_result.address);

        },
        error:function(xhr,txtstatus,errthrow){
            console.log(errthrow);
        }
    })
}