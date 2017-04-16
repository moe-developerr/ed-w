var form = (function () {
	var testElement = document.createElement('input'),
			isPlaceholderSupported = 'placeholder' in testElement;

	var triggerFocus = function ($form) {
		$inputs = $form.find('input');
		$textareas = $form.find('textarea');

		$.each($inputs, function (i, v) {
			var $input = $(v);
			$input.val($input.attr('placeholder'));
		});
		$.each($textareas, function (i, v) {
			var $textarea = $(v);
			$textarea.val($textarea.attr('placeholder'));
		});
	};

	return {
		isPlaceholderSupported: isPlaceholderSupported,
		triggerFocus: triggerFocus
	};
})();

var homepageForm = (function () {
	var $form = $('#homepage-form');
	var $personName = $('#person-name');
	var $telephone = $('#telephone');
	var $schoolName = $('#school-name');
	var $email = $('#email');
	var $processing = $('.form__reply--processing');
	var $error = $('.form__reply--error');
	var $success = $('.form__reply--success');

	var _homepageRequest = function (e) {
		e.preventDefault();
		if($form.parsley().validate()) {
			console.log('is valid');
			$.ajax({
				url: $form.attr('action'),
				method: 'post',
				data: {name: $personName.val(), telephone: $telephone.val(), schoolName: $schoolName.val(), email: $email.val()},
				beforeSend: function () {
					_cleanMessages();
					$processing.text($processing.attr('data-message'));
				},
				error: function () {
					_cleanMessages();
					$error.text($error.attr('data-message'));
				},
				success: function () {
					_cleanMessages();
					$success.text($success.attr('data-message'));
					$form.trigger('reset');
					if(!form.isPlaceholderSupported) form.triggerFocus($form);
				}
			});
		} else {
			console.log('not valid');
			$processing.text('');
			$success.text('');
		}
	};

	var _cleanMessages = function () {
		$error.text('');
		$processing.text('');
		$success.text('');
	};

	var _attachEventListeners = function () {
		$form.submit(_homepageRequest);
	};

	var init = function () {
		_attachEventListeners();
	};

	return {
		init: init
	};
})();

var contactForm = (function () {
	var $form = $('#contact-form');
	var $personName = $('#person-name');
	var $telephone = $('#telephone');
	var $schoolName = $('#school-name');
	var $email = $('#email');
	var $subject = $('#subject');
	var $newToEducallos = $('#new-to-educallos');
	var $message = $('#message');
	var $processing = $('.form__reply--processing');
	var $error = $('.form__reply--error');
	var $success = $('.form__reply--success');
	
	var _contactRequest = function (e) {
		e.preventDefault();
		if($form.parsley().validate()) {
			console.log('is valid');
			$.ajax({
				url: $form.attr('action'),
				method: 'post',
				data: {name: $personName.val(),
						 	 telephone: $telephone.val(),
						 	 schoolName: $schoolName.val(),
						 	 email: $email.val(),
						 	 subject: $subject.val(),
						 	 newToEducallos: $newToEducallos.val(),
						 	 message: $message.val()
						 	},
				beforeSend: function () {
					_cleanMessages();
					$processing.text($processing.attr('data-message'));
				},
				error: function () {
					_cleanMessages();
					$error.text($error.attr('data-message'));
				},
				success: function () {
					_cleanMessages();
					$success.text($success.attr('data-message'));
					$form.trigger('reset');
					if(!form.isPlaceholderSupported) form.triggerFocus($form);
				}
			});
		} else {
			$processing.text('');
			$success.text('');
			console.log('not valid');
		}
	};

	var _cleanMessages = function () {
		$error.text('');
		$processing.text('');
		$success.text('');
	};

	var _attachEventListeners = function () {
		$form.submit(_contactRequest);
	};

	var init = function () {
		_attachEventListeners();
	};

	return {
		init: init
	};
})();

var freeTrialForm = (function () {
	var $form = $('#free-trial-form');
	var $personName = $('#person-name');
	var $telephone = $('#telephone');
	var $schoolName = $('#school-name');
	var $email = $('#email');
	var $country = $('#country');
	var $processing = $('.form__reply--processing');
	var $error = $('.form__reply--error');
	var $success = $('.form__reply--success');

	var _freeTrialRequest = function (e) {
		e.preventDefault();
		if($form.parsley().validate()) {
			console.log('is valid');
			$.ajax({
				url: $form.attr('action'),
				method: 'post',
				data: {name: $personName.val(),
						 	 telephone: $telephone.val(),
						 	 schoolName: $schoolName.val(),
						 	 email: $email.val(),
						 	 country: $country.val()
						 	},
				beforeSend: function () {
					_cleanMessages();
					$processing.text($processing.attr('data-message'));
				},
				error: function () {
					_cleanMessages();
					$error.text($error.attr('data-message'));
				},
				success: function () {
					_cleanMessages();
					$success.text($success.attr('data-message'));
					$form.trigger('reset');
					if(!form.isPlaceholderSupported) form.triggerFocus($form);
				}
			});
		} else {
			$processing.text('');
			$success.text('');
			console.log('not valid');
		}
	};

	var _cleanMessages = function () {
		$error.text('');
		$processing.text('');
		$success.text('');
	};

	var _attachEventListeners = function () {
		$form.submit(_freeTrialRequest);
	};

	var init = function () {
		_attachEventListeners();
	};

	return {
		init: init
	};
})();

var addonForm = (function () {
	var $requestBtn = $('.add-on__request-btn');
	var $form = $('.add-on__form');
	var $error = $('.form__reply--error');
	var $processing = $('.form__reply--processing');
	var $success = $('.form__reply--success');

	var _request = function (e) {
		e.preventDefault();
		var $thisForm = $(this);

		if($thisForm.parsley().validate()) {
			console.log('is valid');
			$.ajax({
				url: $thisForm.attr('action'),
				method: 'post',
				data: {email: $thisForm.find('.add-on__email').val()},
				beforeSend: function () {
					_cleanMessages($thisForm);
					$thisForm.find($processing).text($thisForm.find($processing).attr('data-message'));
				},
				error: function () {
					_cleanMessages($thisForm);
					$thisForm.find($error).text($thisForm.find($error).attr('data-message'));
				},
				success: function () {
					_cleanMessages($thisForm);
					$thisForm.find($success).text($thisForm.find($success).attr('data-message'));
					$thisForm.trigger('reset');
					if(!form.isPlaceholderSupported) form.triggerFocus($form);
				}
			});
		} else {
			$thisForm.find($processing).text('');
			$thisForm.find($success).text('');
			console.log('not valid');
		}
	};

	var _cleanMessages = function ($thisForm) {
		$thisForm.find($error).text('');
		$thisForm.find($processing).text('');
		$thisForm.find($success).text('');
	};

	var _showForm = function () {
		var $btn = $(this);
		$btn.removeClass('active');
		$btn.next($form).addClass('active');
	};

	var _attachHandlers = function () {
		$requestBtn.click(_showForm);
		$form.submit(_request);
	};

	var init = function () {
		_attachHandlers();
	};

	return {
		init: init
	};
})();

var onPremisesForm = (function () {
	var slideSpeed = 250;
	var $triggerBtn = $('.on-premises-form__trigger');
	var $form = $('#on-premises-form');
	var $personName = $('#person-name');
	var $telephone = $('#telephone');
	var $schoolName = $('#school-name');
	var $email = $('#email');
	var $country = $('#country');
	var $error = $form.find('.form__reply--error');
	var $processing = $form.find('.form__reply--processing');
	var $success = $form.find('.form__reply--success');

	var _request = function (e) {
		e.preventDefault();

		if($form.parsley().validate()) {
			console.log('is valid');
			$.ajax({
				url: $form.attr('action'),
				method: 'post',
				data: {name: $personName.val(),
						 	 telephone: $telephone.val(),
						 	 schoolName: $schoolName.val(),
						 	 email: $email.val(),
						 	 country: $country.val()
						 	},
				beforeSend: function () {
					_cleanMessages();
					$processing.text($processing.attr('data-message'));
				},
				error: function () {
					_cleanMessages();
					$error.text($error.attr('data-message'));
				},
				success: function () {
					_cleanMessages();
					$success.text($success.attr('data-message'));
					$form.trigger('reset');
					if(!form.isPlaceholderSupported) form.triggerFocus($form);
				}
			});
		} else {
			$processing.text('');
			$success.text('');
			console.log('not valid');
		}
	};

	var _cleanMessages = function () {
		$error.text('');
		$processing.text('');
		$success.text('');
	};

	var _showForm = function (e) {
		e.preventDefault();
		$form.slideDown(slideSpeed);
	};

	var _attachHandlers = function () {
		$triggerBtn.click(_showForm);
		$form.submit(_request);
	};

	var init = function () {
		_attachHandlers();
	};

	return {
		init: init
	};
})();


$(function () {
	homepageForm.init();
	contactForm.init();
	freeTrialForm.init();
	addonForm.init();
	onPremisesForm.init();
});