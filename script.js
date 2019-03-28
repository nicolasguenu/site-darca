// $(document).ready(function () {
// 	// $('#m-footer').load('footer.html');
// 	$('#m-footer').load('footer.html');
// });

$(function () {
	$('#header').load('header.html');
	$('#footer').load('footer.html');


	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

