<?php include 'includes/head-top.php'; ?>
<head>
	<?php include 'includes/head.php'; ?>
</head>
<body>
	<div id="site-wrapper">
		<?php include 'includes/header.php'; ?>
		<main class="main">
			<section class="section hero">
				<div class="clearfix">
					<div class="hero__form-container">
						<section class="hero__form-section">
							<h1 class="hero__title">An innovative solution to modernize your school legacy</h1>
							<h3 class="hero__subtitle">Discover how you can archive and commemorate an enriching journey for a lifetime.</h3>
							<form action="ajax/submit.php" method="post" class="form form--hero" id="homepage-form" data-parsley-errors-container=".form__reply--error">
								<input type="text" class="form__input form__input--half" id="person-name" placeholder="Full Name" data-parsley-required data-parsley-required-message="Full Name is required">
								<input type="tel" class="form__input  form__input--half" id="telephone" placeholder="Phone Number" data-parsley-required data-parsley-required-message="Phone Number is required">
								<input type="text" class="form__input  form__input--half" id="school-name" placeholder="School / College Name" data-parsley-required data-parsley-required-message="Scool / College Name is required">
								<input type="email" data-parsley-type="email" class="form__input  form__input--half" id="email" placeholder="Work Email Address" data-parsley-required data-parsley-required-message="Work Email Address is required">
								<button type="submit" class="form__submit">
									<span class="form__submit-text">Start your 30 Days Free Trial</span>
									<span class="form__submit-text fz-smallest">No Credit card required</span>
								</button>
								<div class="form__reply form__reply--error" data-message="Error occured while submitting"></div>
								<div class="form__reply form__reply--processing" data-message="Processing Your Request"></div>
								<div class="form__reply form__reply--success" data-message="Thank you!"></div>
							</form>
							<div class="hero__video clearfix">
								<a href="https://www.youtube.com/watch?v=1UDvucnju5Q" data-lity class="myicon myicon--video"></a> <span class="hero__video-text">Watch a 2 minutes video to know more, or view a <a href="#" class="link--tlc">LIVE DEMO</a></span> 
							</div>
						</section>
					</div>
					<div class="hero__image-wrapper">
						<img src="images/header-image.png" alt="" class="hero__image responsive">
					</div>
				</div>
			</section>
			<section class="section section--bordered border--bottom border--light">
				<div class="container">
					<div class="col-mp--6" data-aos="slide-right">
						<h2 class="section__title">The <span class="tlc--c">Fresh, Modern</span> Approach to <span class="tlc--c">Yearbooks</span></h2>
						<h3 class="section__subtitle">Today's students are online. Now, their yearbook is too</h3>
						<p>Your students’ yearbook is their most precious record of their school days; a valuable reminder of friendships, teachers and cherished memories. Educallos brings the yearbook concept to the digital age, giving students access to their most cherished moments at the click of a mouse.</p>
						<p>You can easily customize your yearbook‘s designs, logos and color scheme to match your school’s aesthetic, creating a look that is instantly recognizable.</p>
					</div>
					<div class="col-mp--6 col-image" data-aos="slide-left">
						<img src="images/home1.jpg" alt="" class="responsive">
					</div>
				</div>
			</section>
			<section class="section section--bordered border--bottom border--light">
				<div class="container">
					<div class="col-mp--6 col-mp--push-6" data-aos="slide-left">
						<h2 class="section__title">The <span class="tlc--c">A Wall of <span class="tlc--c">Memories</span></h2>
						<h3 class="section__subtitle">Educallos' memory wall captures every success, every triumph, and every moment, bringing it to become a permanent memory.</h3>
						<p>The memory wall allows students to easily tag a photo or upload one of their own to a wall of memories, either privately or on the school's public wall, adding comments to cement the memory. Years later, they can log on again, and relive those happy moments as if they never ended.</p>
					</div>
					<div class="col-mp--6 col-image col-mp--pull-6" data-aos="slide-right">
						<img src="images/home2.png" alt="" class="responsive">
					</div>
				</div>
			</section>
			<section class="section section--bordered border--bottom border--light">
				<div class="container">
					<div class="col-mp--6" data-aos="slide-right">
						<h2 class="section__title">A <span class="tlc--c">Vivid and Interactive</span> experience</h2>
						<h3 class="section__subtitle">In a world where kids grow up online, it was only a matter of time for their schools to bring their yearbooks to the web.</h3>
						<p>Educallos is a fully online, multimedia yearbook designed to encapsulate a full school journey for a lifetime; to keep their memories fresh and vivid, and the record of them permanent. With photos, videos, interactive walls and so many other options, Educallos is the yearbook for the social age.</p>
					</div>
					<div class="col-mp--6 col-image" data-aos="slide-left">
						<img src="images/home3.png" alt="" class="responsive">
					</div>
				</div>
			</section>
			<section class="section text--center">
				<div class="container">
					<h2 class="section__title position--rel"><span class="tlc--c">Some Smart Features <br>	</span> to cement some of life best moments <br class="mp--hidden"><a href="#" class="btn btn--wide plc--bg mp-position--abs-r">See All Features</a></h2>
					<div class="features" data-aos="slide-right" data-delay="100">
						<div class="feature">
							<span class="feature__icon tlc--c icon icon-seo-icons-03"></span>
							<h3 class="feature__title plc--c">Wall of Memories</h3>
							<div class="fz-smaller">
								<p>Every single moment that you cherish, can be saved to a private wall of memories, with your thought to make them warm and eternal.</p>
							</div>
						</div>
						<div class="feature">
							<span class="feature__icon tlc--c icon icon-seo-icons-03"></span>
							<h3 class="feature__title plc--c">Digital Signage</h3>
							<div class="fz-smaller">
								<p>The perfect solution to display your yearbooks. Post announcements, news, events, and promote your school through any public smart TV.</p>
							</div>
						</div>
						<div class="feature">
							<span class="feature__icon tlc--c icon icon-seo-icons-03"></span>
							<h3 class="feature__title plc--c">Multi-language support</h3>
							<div class="fz-smaller">
								<p>Educallos supports a variety of languages. Arabic included. Communicate the way you want to, anytime, anywhere.</p>
							</div>
						</div>
						<div class="feature">
							<span class="feature__icon tlc--c icon icon-seo-icons-03"></span>
							<h3 class="feature__title plc--c">Cloud-based, 100% secure</h3>
							<div class="fz-smaller">
								<p>Educallos is hosted on robust cloud servers, with high level of security and privacy. Your memories are safe with us.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="section text--center sdc--bg">
				<div class="container">
					<h2 class="section__title"><span class="tlc--c">Don't let your students memories Fade Away</span> <br> Try Educallos today, risk-free.</h2>
					<div class="highlights">
						<a href="#" class="highlight">
							<span class="highlight__icon icon icon-seo-icons-03"></span>
							<div>Watch a 2 minute video</div>
						</a>
						<a href="#" class="highlight">
							<span class="highlight__icon icon icon-seo-icons-03"></span>
							<div>30 Days Free Trial</div>
						</a>
						<a href="#" class="highlight">
							<span class="highlight__icon icon icon-seo-icons-03"></span>
							<div>Check a Live Demo</div>
						</a>
					</div>
				</div>
			</section>
		</main>
		<?php include 'includes/footer.php'; ?>
	</div>
	<?php include 'includes/js.php'; ?>
	<script src="dist/scripts/vendors/lity.min.js"></script>
	<script src="dist/scripts/main.min.js"></script>
</body>
</html>