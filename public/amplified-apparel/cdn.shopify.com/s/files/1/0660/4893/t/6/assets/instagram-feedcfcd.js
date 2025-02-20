var dataLimit = $('.instagram-feed').data('limit');

var feed = new Instafeed({
    get: 'user',
    userId: 1691981710,
    accessToken: '1691981710.b1cd863.1c4d5299499e466392732854131d0641',
    resolution: 'low_resolution',
    target: 'instafeed',
    limit: dataLimit ? dataLimit : 12,
    mock: true,
    success: function(data) {
      for(i=0;i<data.data.length;i++) {
        if (data.data[i].images.low_resolution.width == data.data[i].images.low_resolution.height) {
        	$('#instafeed').append(
          		'<div class="instagram-feed-image"><a href="'+ data.data[i].link +'" target="_blank"><div class="instagram-feed-info-container"><div class="instagram-feed-info"><i class="fa fa-heart" aria-hidden="true"></i><span>'+ data.data[i].likes.count +'</span></div></div><img src="'+data.data[i].images.low_resolution.url+'" /></a></div>'
        	);
        }
      }
    }
});

feed.run();