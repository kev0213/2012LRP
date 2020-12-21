$(function () {

var navp = $('.right_box');
$(window).scroll(function () {
	if ($(window).scrollTop() == 0) {
		navp.css({
			'display': 'none',
			'opacity': '0',
			'width': '0'
		});

	} else {
		navp.css({
			'display': 'block',
			'opacity': '1',
			'width': '42px'
		});
	}
});



if ($(window).outerWidth() < 768) {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 80) {
			$('header').css({
				'top': '0px',
			});
	
		} else {
			$('header').css({
				'top': '90px',
			});
		}
	});
} else {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 40) {
			$('header').css({
				'top': '0px',
			});
	
		} else {
			$('header').css({
				'top': '40px',
			});
		}
	});
};
	
if ($(window).outerWidth() < 768) {
	//hashtag滑動 
	$('area[href^="#"], a[href^="#"]').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top - 45
		}, 300);

		if (!$('#menu').hasClass("mFixed")){
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 91
			}, 300);
		}
	});
} else {
	$('area[href^="#"], a[href^="#"]').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top - 127
		}, 300);

		if (!$('#menu').hasClass("mFixed")){
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 127
			}, 300);
		}
	});
};
// // Mobile 置頂選單控制
// $(window).scroll(function () {
// 	var window_top = $(window).scrollTop();
// 	var div_top = $('#menu').height();
// 	if (window_top > div_top) {
// 		$('#menu').addClass('mFixed');
// 	} else {
// 		$('#menu').removeClass('mFixed');
// 	}
// });
// 裝置判斷 PC or Mobile
var isMobile = {
	iMob: function () {
		return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
	}
};
if (isMobile.iMob()) {
	console.log('mob');
	$('.menu_box').addClass('scroll_mob');
} else {
	console.log('pc');
	$('.menu_box').addClass('scroll_pc');
};

// 側選單
$('.arrow_right').click(function () {
	$(this).hide();
	$('.arrow_left').show();
	$("ul.menu_box").animate({ right: '-122px' });
});

$('.arrow_left').click(function () {
	$(this).hide();
	$('.arrow_right').show();
	$("ul.menu_box").animate({ right: '0px' });
});

$(".linkmore").on("click", function() {
	$(".fixedbutton_more").toggleClass("open")
});

// 滑動
$('.gotop').click(function () {
	$('html,body').animate({ scrollTop: '0px' }, 300);
});

});