function showArrow(button) {

}

$(document).ready(function() {
	$('#demobutton').click(function() {
		var showcase = $('#showcase');
		if(showcase.hasClass('demomode')) {
			showcase.html('');
			showcase.removeClass('demomode');
			$(this).text('Try the Demo').removeClass('demomode');
			$('#demoarrow').stop(true, true).fadeOut();
			if (_gaq !== undefined) {
				_gaq.push(['_trackEvent', 'Demo', 'Stop']);
			}
		} else {
			$('html,body').stop().animate({'scrollTop': Math.floor(showcase.offset().top) + 1});
			showcase.html('<iframe src="https://candy-demo.openflex.net/candy/example/" scrolling="no" frameborder="0"></iframe>');
			showcase.addClass('demomode');
			$(this).text('ONLINE').addClass('demomode');
			$('#demoarrow').stop(true, true).fadeIn();
			if (_gaq !== undefined) {
				_gaq.push(['_trackEvent', 'Demo', 'Start']);
			}
		}
	});
});
