var faq = (function () {
	var slideSpeed = 250;
	var $question = $('.faqs .question');

	var _isVisible = function ($thisQuestion) {
		return $thisQuestion.hasClass('active');
	};

	var _showAnswer = function ($thisQuestion) {
		_hideActiveAnswer($thisQuestion);
		$thisQuestion.addClass('active');
		$thisQuestion.next('.answer').slideDown(slideSpeed);
	};

	var _hideActiveAnswer = function ($thisQuestion) {
		$question.filter('.active').removeClass('active')
			.next('.answer').slideUp(slideSpeed);
	};

	var _hideAnswer = function ($thisQuestion) {
		$thisQuestion.removeClass('active');
		$thisQuestion.next('.answer').slideUp(slideSpeed);
	};

	var _toggleAnswer = function () {
		var $thisQuestion = $(this);
		_isVisible($thisQuestion) ? _hideAnswer($thisQuestion) : _showAnswer($thisQuestion);
	};

	var _attachHandlers = function () {
		$question.click(_toggleAnswer);
	};

	var init = function () {
		_attachHandlers();
	};

	return {
		init: init
	};
})();

$(function () {
	faq.init();
});