$(document).ready(function () {
	// var pagetop = $(".pagetop");

	// $(window).on("load, scroll", function () {
	// 	var value = $(this).scrollTop();
	// 	if (value > 150) {
	// 		pagetop.fadeIn();
	// 	} else {
	// 		pagetop.fadeOut();
	// 	}
	// });

	$(".banner .slick").slick({
		dots: false,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 3000,
		speed: 1000,
		fade: true,
		cssEase: "linear",
	});

	$(".testimonials .slick").slick({
		slidesToShow: 1,
		dots: false,
		autoplay: true,
		infinite: true,
		autoplaySpeed: 5000,
		speed: 1000,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
				},
			},
		],
	});

	$("a[href*=\\#]:not([href=\\#])")
		.not(".inline")
		.click(function () {
			if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
				if (target.length) {
					$("html,body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000
					);
					return false;
				}
			}
		});

	$(".btn__menu").click(function () {
		$(this).toggleClass("is-open");
		$("body").toggleClass("menu-open");
	});

	// $(".j-heading").click(function (e) {
	// 	$(this).toggleClass("is-open").next(".j-content").slideToggle();
	// });

	// $(".tabs li").click(function () {
	// 	var num = $(".tabs li").index(this);
	// 	$(".map-box").hide();
	// 	$(".map-box").eq(num).show();
	// 	$(".tabs li").removeClass("is-select");
	// 	$(this).addClass("is-select");
	// 	$(".map").addClass("is-show");
	// });
});
