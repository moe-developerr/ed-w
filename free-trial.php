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
					<section class="hero__form-section">
						<h1 class="hero__title">An innovative solution to modernize your school legacy</h1>
						<h3 class="hero__subtitle">Discover how you can archive and commemorate an enriching journey for a lifetime.</h3>
						<form action="ajax/submit.php" method="post" id="free-trial-form" class="form form--hero" data-parsley-errors-container=".form__reply--error">
							<input type="text" class="form__input form__input--full" id="person-name" placeholder="Full Name" data-parsley-required data-parsley-required-message="Full Name is required">
							<input type="tel" class="form__input  form__input--full" id="telephone" placeholder="Phone Number" data-parsley-required data-parsley-required-message="Phone Number is required">
							<input type="text" class="form__input  form__input--full" id="school-name" placeholder="School / College Name" data-parsley-required data-parsley-required-message="School / College Name is required">
							<input type="email" data-parsley-type="email" class="form__input  form__input--full" id="email" placeholder="Work Email Address" data-parsley-required data-parsley-required-message="Work Email Address is required">
							<select name="" class="form__input form__input--full" id="country" data-parsley-required data-parsley-required-message="Country is required">
								<option value="" disabled selected>Country</option>
								<option value="Lebanon">Lebanon</option>
								<option value="KSA">KSA</option>
								<option value="Dubai">Dubai</option>
							</select>
							<button type="submit" class="form__submit">
								<span class="form__submit-text">Start your 30 Days Free Trial</span>
								<span class="form__submit-text fz--smallest">No Credit card required</span>
							</button>
							<div class="form__reply form__reply--error" data-message="Error occured while submitting"></div>
							<div class="form__reply form__reply--processing" data-message="Processing Your Request"></div>
							<div class="form__reply form__reply--success" data-message="Thank you!"></div>
						</form>
						<span class="form__tip">Have an account, <a href="#" class="link--tlc">Sign in here</a></span>
					</section>
				</div>
			</section>
			<section class="section text--center">
				<div class="container">
					<h1 class="section__title">How to switch from trial to a <span class="tlc--c">Real Account</span></h1>
					<h3 class="section__subtitle">In a world where kids grow up online, it was only a matter of time for their schools to bring their yearbooks to the web.</h3>
					<p>Educallos is a fully online, multimedia yearbook designed to encapsulate a full school journey for a lifetime; to keep their memories fresh and vivid, and the record of them permanent. With photos, videos, interactive walls and so many other options Educallos is the yearbook for the social age.</p>
					<div class="highlights">
						<a href="mailto:contact@educallos.net" class="highlight single">
							<span class="highlight__icon icon icon-seo-icons-03"></span>
							<div>contact@educallos.net</div>
						</a>
					</div>
					<img src="images/free-trial-1.png" alt="" class="mt--2 responsive">
				</div>
			</section>
		</main>
		<?php include 'includes/footer.php'; ?>
	</div>
	<?php include 'includes/js.php'; ?>
	<script src="dist/scripts/main.min.js"></script>
</body>
</html>