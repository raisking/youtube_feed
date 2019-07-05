    $(function(){
    var container = $('#ul-fbfeed');
    var key = 'EAAGakFouL4YBABqZAfQLBc735891whiu0zLzhxICmH9pAavd7OUGCEfUlPGdpZBFmOPsxMOp0Au6Az2h5QncJau5yH2vstYAwsZCsHzZB3ieIk7zU413ZBvPg8LvrTGgOWfbWcc1TCFfZCpw17ZBAgYZBll3RCXxWlS3zPk4bMWLIqJu9tHZCc9ZB3';
    $.ajax({
        type: 'GET',
        url: `https://graph.facebook.com/me?fields=feed{full_picture,message,created_time,permalink_url,likes}&access_token=${key}`,
             success: function(orders){
            $.each(orders, function(index, order){ 
                var orderD = order.data;
                $.each(orderD, function(key, value){
                    // console.log(value)
                    container.append('<li><img src="' 
                    +value.full_picture+'"/><br><strong>'
                    +value.message+'</strong></br>'
                    +value.created_time+'</br>'
                    +'<a href="'+value.permalink_url+'"><strong>'
                    +value.permalink_url+'</strong></a></li><hr>')
              
                })  
            })
            console.log('success', orders);
        }
    })
})



