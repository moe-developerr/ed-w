(function ($window) {
	var _defaults,
			_debounceTimer = 100,
			_debounceDuration = 100;

	var _makeElementSticky = function () {
		var $element = _defaults.element;
		var isXs = $window.width() < 767 ? true : false;

		if(isXs && !_defaults.runOnXs) {
			$element.removeClass('sticky--xs sticky--sp');
		}
		else {
			if(isXs) {
				if($window.scrollTop() < _defaults.xsThreshold) {
					$element.removeClass('sticky--xs');
				} else {
					$element.addClass('sticky--xs');
				}
			}
			else {
				if($window.scrollTop() < _defaults.spThreshold) {
					$element.removeClass('sticky--sp');
				} else {
					$element.addClass('sticky--sp');
				}
			}
		}

	};

	var _debounce = function () {
		clearTimeout(_debounceTimer);
		_debounceTimer = setTimeout(function () {
			_makeElementSticky();
		}, _debounceDuration);
	};

	var _attachListeners = function () {
		$window.scroll(_makeElementSticky);
		$window.resize(_debounce);
	};
	
	var init = function (options) {
		_defaults = $.extend({
			element: this
		}, options);
		_attachListeners();

		return this;
	};

	$.fn.sticky = init;

})($(window));


$('.header--bot').sticky({
	xsThreshold: 0,
	spThreshold: 30,
	runOnXs: false
});