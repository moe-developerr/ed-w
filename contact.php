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
					<h1 class="hero__title">We’d love to hear from you.</h1>
					<h3 class="hero__subtitle">We’ve created a wealth of resources for you to watch, read and share. And if there’s something that you can’t find, contact us. It’s very likely that one of our reps will have the answer.</h3>
				</div>
			</section>
			<section class="section">
				<div class="container">
					<form action="ajax/submit.php" method="post" class="form form--dark clearfix" id="contact-form" data-parsley-errors-container=".form__reply--error">
						<div class="col-mp--6 col-mp--pr-1">
							<input type="text" class="form__input form__input--full" id="person-name" placeholder="Full Name" data-parsley-required data-parsley-required-message="Full Name is required">
							<input type="tel" class="form__input form__input--full" id="telephone" placeholder="Phone Number" data-parsley-required data-parsley-required-message="Phone Number is required">
							<input type="text" class="form__input form__input--full" id="school-name" placeholder="School / College Name" data-parsley-required data-parsley-required-message="School / College Name is required">
							<input type="email" data-parsley-type="email" class="form__input form__input--full" id="email" placeholder="Work Email Address" data-parsley-required data-parsley-required-message="Work Email address is required">
							<select name="" class="form__input form__input--full" id="subject" required data-parsley-required-message="Subject is required">
								<option disabled selected>Subject</option>
								<option value="Sales">Sales</option>
								<option value="User Interface">User Interface</option>
							</select>
							<div class="form__input form__input--full">
								I am new to Educallos
								<input type="checkbox" name="" id="new-to-educallos" class="form__checkbox display--none">
								<label class="checkbox pull--right" for="new-to-educallos">
									<div class="checkbox__filling"></div>
								</label>
							</div>
						</div>
						<div class="col-mp--6 col-mp--pl-1">
							<textarea name="" cols="30" rows="10" class="form__input form__input--full form__textarea" id="message" placeholder="Message" data-parsley-required data-parsley-required-message="Message is required"></textarea>
							<button type="submit" class="form__submit">
								<span class="form__submit-text">Start your 30 Days Free Trial</span>
								<span class="form__submit-text fz-smallest">No Credit card required</span>
							</button>
							<div class="form__reply form__reply--error" data-message="Error occured while submitting"></div>
							<div class="form__reply form__reply--processing" data-message="Processing Your Request"></div>
							<div class="form__reply form__reply--success" data-message="Thank you!"></div>
						</div>
					</form>
				</div>
			</section>
			<section class="section text--center">
				<div class="container">
					<h1 class="section__title">Meanwhile, you can check Our <span class="tlc--c">Documentation</span> and <span class="tlc--c">FAQs</span></h1>
					<h3 class="section__subtitle">In a world where kids grow up online, it was only a matter of time for their schools to bring their yearbooks to the web.</h3>
					<p>Educallos is a fully online, multimedia yearbook designed to encapsulate a full school journey for a lifetime; to keep their memories fresh and vivid, and the record of them permanent. With photos, videos, interactive walls and so many other options Educallos is the yearbook for the social age.</p>
					<div class="highlights">
						<a href="documentation.php" class="highlight">
							<span class="highlight__icon icon icon-seo-icons-03"></span>
							<div>Check our documentation</div>
						</a>
						<a href="pricing.php" class="highlight">
							<span class="highlight__icon icon icon-seo-icons-03"></span>
							<div>Frequently Asked Questions</div>
						</a>
					</div>
				</div>
			</section>
		</main>
		<?php include 'includes/footer.php'; ?>
	</div>
	<?php include 'includes/js.php'; ?>
	<script src="dist/scripts/main.min.js"></script>
</body>
</html>