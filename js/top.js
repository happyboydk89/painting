$(document).ready(function () {
	$(".mainvisual .slick").slick({
		dots: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 3000,
		speed: 1000,
		fade: true,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: false,
				},
			},
		],
	});
	$(".topics .slick").slick({
		dots: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 3000,
		speed: 1000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				},
			},
		],
	});
	$(".link .slick").slick({
		dots: true,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 3000,
		speed: 1000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
					// centerMode: true,
				},
			},
		],
	});
	$(".tags .slick").slick({
		slidesToShow: 1,
		dots: false,
		//autoplay: true,
		infinite: true,
		autoplaySpeed: 3000,
		speed: 1000,
		// fade: true,
	});
});

$(function () {
	var i = 1;
	$(".news-list li").slice(0, 5).show();
	// if ($(".news-list li").length < 5) {
	//   $(".news .readmore").hide();
	// }
	$(".news .readmore").on("click", function (e) {
		e.preventDefault();
		$(".news-list li:hidden").slice(0, 5).slideDown();
		if ($(".news-list li:hidden").length == 0) {
			$(".news .readmore").fadeOut("slow");
		}
		$("html,body").animate(
			{
				scrollTop:
					$(".news-list li")
						.eq(i * 5)
						.offset().top - 80,
			},
			1500
		);
		i++;
	});
});

$(function () {
	$(".pickup .readmore").on("click", function (e) {
		$(this).fadeOut("slow");
		$(".pickup li:hidden").slideDown();
	});
});
