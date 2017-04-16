<?php include 'includes/head-top.php'; ?>
<head>
	<?php include 'includes/head.php'; ?>
</head>
<body>
	<div id="site-wrapper">
		<?php include 'includes/header.php'; ?>
		<main class="main">
			<section class="section hero">
				<div class="container">
					<h1 class="hero__title">We are going to get you up to speed in no-time.</h1>
					<h3 class="hero__subtitle">We’ve created a wealth of resources for you to watch, read and share. And if there’s something that you can’t find, contact us. It’s very likely that one of our reps will have the answer.</h3>
				</div>
			</section>
			<section class="section">
				<div class="container">
					<div class="btn aside__open mp--hidden tlc--bg text--center mb--3">Documentation Menu</div>
					<aside class="aside aside--documentation">
						<div class="btn aside__close mp--hidden tlc--bg text--center mb--1">Close</div>
						<section class="section--aside">
							<h2 class="aside__title">Getting Started</h2>
							<ul class="aside__list">
								<li class="aside__item"><a href="getting-started-1" class="aside__link">General Information</a></li>
								<li class="aside__item"><a href="getting-started-2" class="aside__link">Register for a free trial</a></li>
								<li class="aside__item"><a href="getting-started-3" class="aside__link">Switch to final account</a></li>
							</ul>
						</section>
						<section class="section--aside">
							<h2 class="aside__title">Getting Started</h2>
							<ul class="aside__list">
								<li class="aside__item"><a href="getting-started-4" class="aside__link">General Information</a></li>
								<li class="aside__item"><a href="getting-started-5" class="aside__link">Register for a free trial</a></li>
								<li class="aside__item"><a href="getting-started-6" class="aside__link">Switch to final account</a></li>
							</ul>
						</section>
						<section class="section--aside">
							<h2 class="aside__title">Getting Started</h2>
							<ul class="aside__list">
								<li class="aside__item"><a href="getting-started-7" class="aside__link">General Information</a></li>
								<li class="aside__item"><a href="getting-started-8" class="aside__link">Register for a free trial</a></li>
								<li class="aside__item"><a href="getting-started-9" class="aside__link">Switch to final account</a></li>
							</ul>
						</section>
						<section class="section--aside">
							<h2 class="aside__title">Getting Started</h2>
							<ul class="aside__list">
								<li class="aside__item"><a href="getting-started-10" class="aside__link">General Information</a></li>
								<li class="aside__item"><a href="getting-started-11" class="aside__link">Register for a free trial</a></li>
								<li class="aside__item"><a href="getting-started-12" class="aside__link">Switch to final account</a></li>
							</ul>
						</section>
						<section class="section--aside">
							<h2 class="aside__title">Getting Started</h2>
							<ul class="aside__list">
								<li class="aside__item"><a href="getting-started-13" class="aside__link">General Information</a></li>
								<li class="aside__item"><a href="getting-started-14" class="aside__link">Register for a free trial</a></li>
								<li class="aside__item"><a href="getting-started-15" class="aside__link">Switch to final account</a></li>
							</ul>
						</section>
					</aside>
					<iframe src="about:blank" scrolling="no" frameborder="0" class="iframe iframe--documentation"></iframe>
				</div>
			</section>
		</main>
		<?php include 'includes/footer.php'; ?>
	</div>
	<?php include 'includes/js.php'; ?>
	<script src="dist/scripts/main.min.js"></script>
	<script>
		$(function () {
			iframe.init("getting-started");
		});
	</script>
</body>
</html>