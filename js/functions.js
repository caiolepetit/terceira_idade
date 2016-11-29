var $z = jQuery.noConflict();
$z(document).ready(function(){
	$z("#aumentar-fonte-carousel").click(function () {
		var size = $z(".carousel-caption h3").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z(".carousel-caption h3").animate({'font-size' : size + 'px'});

		var size = $z(".carousel-caption p").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z(".carousel-caption p").animate({'font-size' : size + 'px'});

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

	$z("#aumentar-fonte-produtos").click(function () {
		var size = $z(".fonte-produto h3").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z(".fonte-produto h3").animate({'font-size' : size + 'px'});

		var size = $z(".fonte-produto p").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z(".fonte-produto p").animate({'font-size' : size + 'px'});

		return false;
	});

	$z("#diminuir-fonte-produtos").click(function () {
		var size = $z(".fonte-produto h3").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) - 2;

		$z(".fonte-produto h3").animate({'font-size' : size + 'px'});

		var size = $z(".fonte-produto p").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) - 2;

		$z(".fonte-produto p").animate({'font-size' : size + 'px'});

		return false;
	});

	$z("#aumentar-fonte-sobre").click(function () {
		var size = $z(".carousel-caption h3").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z(".carousel-caption h3").animate({'font-size' : size + 'px'});

		var size = $z(".carousel-caption p").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z(".carousel-caption p").animate({'font-size' : size + 'px'});

		return false;
	});

	$z("#aumentar-fonte-contato").click(function () {
		var size = $z(".carousel-caption h3").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z(".carousel-caption h3").animate({'font-size' : size + 'px'});

		var size = $z(".carousel-caption p").css('font-size');

		size = size.replace('px', '');
		size = parseInt(size) + 2;

		$z(".carousel-caption p").animate({'font-size' : size + 'px'});

		return false;
	});
});