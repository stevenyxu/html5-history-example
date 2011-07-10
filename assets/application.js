$(function(){
	var replacePage = function(url) {
		$.ajax({
			url: url,
			type: 'get',
			dataType: 'html',
			success: function(data){
				var dom = $(data);
				var title = dom.filter('title').text();
				var html = dom.filter('.container').html();
				$('title').text(title);
				$('.container').html(html);
			}
		});
	}

	$('a').live('click', function(e){
		history.pushState(null, null, this.href);
		replacePage(this.href);
		e.preventDefault();
	});

	$(window).bind('popstate', function(){
		replacePage(location.pathname);
	});
});
