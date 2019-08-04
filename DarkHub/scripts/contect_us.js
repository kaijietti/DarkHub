// require('index.js');

function submit(){
    let title = $('#title').val();
    let detail = $('#details').val();
    let address = $('#address').val();

    // post to url
    let url = '';

    // let data = {
    //     title:title,
    //     detail:detail,
    //     address:address
    // }

    let postSuccess = true;

    // $.ajax({
    //     data:data,
    //     type:'POST',
    //     url:url,
    //     success:function(data){
    //         postSuccess = true;
    //     },
    //     error:function(request){
    //         postSuccess = false;
    //     }
    // })

    if(postSuccess){
        alert('Submit successfully.')
    }else{
        alert('Submit failed');
    }

    $('#title').val('');
    $('#details').val('');
    $('#address').val('');
}