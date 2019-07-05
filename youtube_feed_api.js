    var container = $('#ul-fbfeed');
    $(function () {

        var channels = 'https://www.googleapis.com/youtube/v3/channels';
        var key = 'AIzaSyBc1E1hH2j-DTJhbivn9qIWL6Vz_aGiRbM';
        var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
        var playlistId = 'PLLBDug18oJQiyhVZ49IPIdnq4AmOcPd64';


        $.get(channels, {
                part: 'contentDetails',
                id: ' UC4_qBUkZQBfYsJ7eNYqXaBg',
                
                key: key
            },
            function (data) {
                $.each(data.items, function (i, item) {
                    console.log(item)
                    pid = item.contentDetails.relatedPlaylists.uploads;
                    getVids(pid);

                })
            }
        )


        // Get videos
        function getVids(pid) {
            $.get(URL, {
                    part: 'snippet',
                    maxResults: 5,
                    playlistId: pid,
                    key: key
                },
                function (data) {
                  var output;
                  $.each(data.items, function(i, item){
                      console.log(item);
                      videTitle = item.snippet.title;
                      videoId = item.snippet.resourceId.videoId;
                      output = '<li><iframe src=\"//www.youtube.com/embed/'+videoId+'\"></iframe></li>';
                    
                      $('#results').append(output);
                  })
                }
            )
        }














        // var options = {
        //     part: 'snippet',
        //     key: key,
        //     maxResults: 5,
        //     playlistId: playlistId
        // }

        // loadVids();
        //       function loadVids() {
        //     $.getJSON(URL, options, function (data) {
        //         // console.log(data.items);
        //         $.each(data,function(i, index){
        //             console.log(i, index)
        //         })
        //     });
        // }


    });