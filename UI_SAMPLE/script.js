// Globals
var HEIGHT = 200;
var WIDTH = HEIGHT;
var HEADERHEIGHT = 40;
var FOOTERHEIGHT = 100;

$(document).ready(function() {
	/**
	 * Bring images that are smaller < width to center
	 */
	$(".col-view .iblock img").each(function() {
		if ($(this).height() < HEIGHT) {
			$(this).css('margin-top', (HEIGHT - $(this).height()) / 2);
			$(this).parent().css('background-image', 'url(' +$(this).attr('src') +')');
		}
	});

	// fix the window height
	var availHeight = screen.availHeight;
	$('section').height(availHeight);

	// Set height of preview pane
	$('.db-section, .db-section-background, .db-section-main').height($('.db-section').width());

	// Add mouseover event listener
	$(".col-view .iblock img").on('mouseover', function() {
		$('.db-section-main,.col-view-background').css('background-image', 'url(' +$(this).attr('src') +')');
		$('.db-section-background').css('background-image', 'url(' +$(this).attr('src') +')');
		if ($(this).height() < HEIGHT) {
			var ratio = $(this).height() / WIDTH;
			var ht = $('.db-section-main').height() - ratio * $('.db-section-main').width();
			$('.db-section-main').css('background-position-y', ht/2 +'px');
		} else {
			$('.db-section-main').css('background-position-y', '0px');	
		}
	});
})