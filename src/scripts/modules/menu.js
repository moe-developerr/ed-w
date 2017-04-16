var menu = (function () {
	var $menu = $('.menu');

	var isVisible = function () {
		return $menu.hasClass('active');
	};

	var show = function () {
		$menu.addClass('active');
		$menu.stop().slideDown(250);
	};

	var hide = function () {
		$menu.removeClass('active');
		$menu.stop().slideUp(250);
	};

	var toggle = function () {
		isVisible() ? hide() : show();
	};

	var _attachEventListeners = function () {
		$('.menu__trigger').click(toggle);
	};

	var init = function () {
		_attachEventListeners();
	};

	return {
		init: init
	};
})();

$(function () {
	menu.init();
});