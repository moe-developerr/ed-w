var scrollAnimation = (function ($w) {
	var _debounceTimer;
	var $el = $('[data-aos]');
	var defaults = {
		canExecute: true,
		throttleDuration: 100,
		debounceDuration: 100
	};

	var _inView = function () {
		var st = $w.scrollTop();
		var wh = $w.innerHeight();
		var t, b;

		$.each($el, function (i, v) {
			var $el = $(v);
			t = $el.offset().top;
			b = t + $el.outerHeight();
			if(b>=st && t<=st+wh) {
				setTimeout(function () {
					$el.addClass('animate');
				}, $el.attr('data-delay'));
			}
		});
	};

	var _throttle = function () {
		if(defaults.canExecute) {
			setTimeout(function () {
				_inView();
				_throttle();
				defaults.canExecute = true;
			}, defaults.throttleDuration);
		}
		defaults.canExecute = false;
	};

	var _debounce = function () {
		clearTimeout(_debounceTimer);
		_debounceTimer = setTimeout(_inView, defaults.debounceDuration);
	};

	var init = function () {
		if (Modernizr.csstransitions) {
			$w.scroll(_throttle).scroll();
			$w.resize(_debounce);
		}
	}

	return {
		init: init
	};
})($(window));

$(function () {
	scrollAnimation.init();
});