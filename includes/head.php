<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title></title>
<base href="/educallos/website/new website/root/">
<link rel="stylesheet" href="dist/styles/main.min.css">
<script>	
	function insertLinkToHead(h) {
		var head = document.getElementsByTagName('head')[0];
		var link = document.createElement('link');
		link.href = h;
		link.rel = 'stylesheet';
		head.appendChild(link);
	}

	var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
	switch(lang) {
		case 'ar':
			insertLinkToHead('https://fonts.googleapis.com/css?family=Cairo|El+Messiri');
			break;
		default:
			insertLinkToHead('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
			break;
	}
</script>