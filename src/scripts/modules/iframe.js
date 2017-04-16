var iframe = (function ($window) {
	var debounceTimer;
	var debounceTime = 100;
	var $aside = $('.aside');
	var $links = $aside.find('.aside__link');
	var $iframe = $('.iframe--documentation');

	var ready = function () {
		updateIframeHeight();
		_addImageLoadEvent();
	};

	var _linkClickHandler = function (e) {
		var $link = $(this);
		e.preventDefault();
		_updateURL($link);
		_loadIframe();
		_setActiveLink();
	};

	var _loadIframe = function () {
		document.querySelectorAll(".iframe--documentation")[0].contentWindow.location.replace('docs/' + location.href.split('/').pop() + '.php'); 
		_close();
	};

	var _updateURL = function ($link) {
		if(Modernizr.history) {
			history.pushState(null, null, 'docs/' + $link.attr('href'));
		} else {
			location.href = 'docs/' + $link.attr('href');
		}
	};

	var _setActiveLink = function () {
		$links.removeClass('active');
		$links.filter('[href="' + location.href.split('/').pop() + '"]').addClass('active');
	};

	var updateIframeHeight = function () {
		$iframe.height($iframe.contents().find('body').height());
	};

	var _addImageLoadEvent = function () {
		$images = $iframe.contents().find('img');
		if($images.length) {
			$.each($images, function (i, image) {
				$(image).on('load', updateIframeHeight);
			});
		}
	};

	var _urlFound = function (url) {
		var index = 0;
		$.each($links, function (i, v) {
			if(url == $(v).attr('href') && url !== '') {
				index = i;
				return false;
			}
		});

		return index;
	};

	var _triggerLink = function (index) {
		$links.eq(index).click();
	};

	var _debounce = function () {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(updateIframeHeight, debounceTime);
	};

	var _open = function () {
		$aside.addClass('active');
	};

	var _close = function () {
		$aside.removeClass('active');
	};

	var _attachEventListeners = function () {
		$links.click(_linkClickHandler); 
		$('.aside__open').click(_open);
		$('.aside__close').click(_close);
		$window.resize(_debounce);
		window.addEventListener('popstate', function() {
		  _setActiveLink();
			_loadIframe();
		});
	};

	var init = function (url) {
		_attachEventListeners();
		_triggerLink(_urlFound(url));
	};

	return  {
		init: init,
		ready: ready,
		updateIframeHeight: updateIframeHeight
	};
})($(window));