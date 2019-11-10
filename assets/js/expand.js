<!DOCTYPE html>
<html>
<head>
	<title>fullpage</title>
	<script>
		window.onload = function() {
			var body = document.getElementsByTagName('body')[0];
			body.addEventListener("click", openFullPage, false);
			
			function openFullPage(e) {
				if(e.target && e.target.nodeName == 'IMG') {	
					var fullpage = document.createElement('div');
					body.appendChild(fullpage);
					fullpage.style.backgroundImage = 'url("' + e.target.src + '")';
					fullpage.style.backgroundSize = 'contain';
					fullpage.style.backgroundRepeat = 'no-repeat';
					fullpage.style.backgroundColor = '#ffffff';
					fullpage.style.width = '100%';
					fullpage.style.height = '100%';
					fullpage.style.backgroundPosition = 'center center';
					fullpage.style.position = 'absolute';
					fullpage.style.top = body.scrollTop + 'px';
					fullpage.style.left = '0';
					fullpage.addEventListener("click", closeFullPage, false);
				}
			}
			function closeFullPage(e) {
				body.removeChild(e.target);
			}
		};
	</script>
</head>
<body>
	<img src="http://placehold.it/400x400" />
	<img src="http://placehold.it/400x400" />
	<img src="http://placehold.it/400x400" />
</body>
</html>
