var $z = jQuery.noConflict();
$z(document).ready(function(){
	$z("#aumentar-fonte-carousel").click(function () {
		var size = $z("body h3").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z("body h3").animate({'font-size' : size + 'px'});

		var size = $z("body p").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z("body p").animate({'font-size' : size + 'px'});

		return false;
	});

	$z("#diminuir-fonte-carousel").click(function () {
	var size = $z(".carousel-caption h3").css('font-size');

	size = size.replace('px', '');
	size = parseInt(size) - 2;

	$z(".carousel-caption h3").animate({'font-size' : size + 'px'});

	var size = $z(".carousel-caption p").css('font-size');

	size = size.replace('px', '');
	size = parseInt(size) - 2;

	$z(".carousel-caption p").animate({'font-size' : size + 'px'});

	return false;
	});
});