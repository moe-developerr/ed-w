var dropdown = (function () {
	var slideSpeed = 250;
	var $dropdown = $('.drop-down');
	var $downArrow = $dropdown.find('.fa-chevron-down');
	var $upArrow = $dropdown.find('.fa-chevron-up');
	var $list = $dropdown.find('.drop-down__list');
	var $btn = $dropdown.find('.drop-down__btn');
	var $link = $dropdown.find('.drop-down__link');

	var _isListVisible = function ($dropdown) {
		return $dropdown.find($list).hasClass('active');
	};

	var _showList = function ($dropdown) {
		$dropdown.find($downArrow).removeClass('active');
		$dropdown.find($upArrow).addClass('active');
		$dropdown.find($list).addClass('active').slideDown(slideSpeed);
		$dropdown.find($btn).addClass('active');
	};

	var _hideList = function ($dropdown) {
		$dropdown.find($upArrow).removeClass('active');
		$dropdown.find($downArrow).addClass('active');
		$dropdown.find($list).removeClass('active').slideUp(slideSpeed);
		$dropdown.find($btn).removeClass('active');
	};

	var _toggleList = function () {
		var $dropdown = $(this);
		_isListVisible($dropdown) ? _hideList($dropdown) : _showList($dropdown);
	};

	var _updateDropdown = function (e) {
		e.stopPropagation();
		e.preventDefault();
		var $link = $(this);
		var $dropdown = $link.closest('.drop-down');
		var $btn = $dropdown.find('.drop-down__btn');
		var text = $link.text();

		$dropdown.find('.drop-down__link').addClass('active');
		$link.removeClass('active');
		$btn.find('.drop-down__selected-item').text(text);
		_hideList($dropdown);
	};

	var _attachHandlers = function () {
		$dropdown.click(_toggleList);
		$link.click(_updateDropdown);
		$(document).click(function (e) {
			if(!$(e.target).closest('.drop-down').length) _hideList($dropdown);
		});
	};

	var init = function () {
		_attachHandlers();
	};

	return {
		init: init
	};
})();

currencyDropdown = (function () {
	var _attachHandlers = function () {
		$('.drop-down--currency .drop-down__link').click(function (e) {
			console.log('currency link clicked');
		});
	};

	var init = function () {
		_attachHandlers();
	};

	return {
		init: init
	};
})();

languageDropdown = (function () {
	var _attachHandlers = function () {
		$('.drop-down--language .drop-down__link').click(function (e) {
			console.log('language link clicked');
		});
	};

	var init = function () {
		_attachHandlers();
	};

	return {
		init: init
	};
})();


$(function () {
	dropdown.init();
	// currencyDropdown.init();
	// languageDropdown.init();
});