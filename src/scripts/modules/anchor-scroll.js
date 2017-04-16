var anchorScroll = (function () {
	var $iframeContent, customOffset,
			$htmlBody = $('html, body'),
			$iframe = $('.iframe--documentation');
			
	var _animateScrollTop = function () {
		var $target = $iframeContent.find(this.hash);
		$htmlBody.animate({
			scrollTop: $target.offset().top + $iframe.offset().top + customOffset
		}, 1000);
		return false;
	};

	var init = function (offset) {
		customOffset = offset;
	  $iframeContent = $iframe.contents();
		$iframe.contents().find('a.has-hash').click(_animateScrollTop);
	};

	return {
		init: init
	};
})();