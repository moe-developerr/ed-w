(function () {
	run();

	function run() {
		initSlider();
	}

	function initSlider() {
		$('.slider').royalSlider({
			imageScaleMode: 'fill',
			arrowsNavAutoHide: false
		});
	}
})();