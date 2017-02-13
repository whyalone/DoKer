$(document).ready(function() {
	var slider_num = 0;
	var award_num = 0;
	var a = [
		['15%', '5%', '5%', 0],
		['1%', '5%', '5%', '15%'],
		['15%', '5%', '5%', 0],
		[0, '1%', '1%', '15%']
	]

	$('.slider').css({
		'width': $(window).innerWidth(),
		'height': $(window).innerHeight()
	})

	nav_mar();

	$($('.slider_warp li')[slider_num]).css({
		'display': 'block',
	});

	$('.slider_warp').css({
		'background-image': 'url(img/slider' + slider_num + '.jpg)'
	});
	$('.slider_warp').css({
		'background-image': 'url(img/slider' + slider_num + '.jpg)'
	});

	$('.slider h3').css({
		'font-size': $(window).innerHeight() * 0.13
	})
	$('.slider p').css({
		'font-size': $(window).innerHeight() * 0.04
	})
	$($('.slider h3')[3]).css({
		'font-size': $(window).innerHeight() * 0.20
	})
	$($('.slider span')[3]).css({
		'font-size': $(window).innerHeight() * 0.08
	});

	$($('.slider_warp h3')[slider_num]).css({
		'padding-top': a[slider_num][0]
	});
	$($('.slider_warp p')[slider_num]).css({
		'padding-top': a[slider_num][1],
		'word-spacing': 5
	});
	$($('.slider_warp span')[slider_num]).css({
		'padding-top': a[slider_num][2]
	});
	$($('.slider_warp i')[slider_num]).css({
		'padding-top': a[slider_num][3]
	});

	// 初始化 ↑↑↑
	$(window).resize(function() {
		$('.slider').css({
			'width': $(window).innerWidth(),
			'height': $(window).innerHeight()
		})
		nav_mar();

		$('.slider h3').css({
			'font-size': $(window).innerHeight() * 0.13
		})
		$($('.slider p')[3]).css({
			'font-size': $(window).innerHeight() * 0.10
		})
		$($('.slider h3')[3]).css({
			'font-size': $(window).innerHeight() * 0.20
		})

	})

	$(window).scroll(function() {
		if($(this).scrollTop() > 100 || $(window).innerWidth() < 840) {
			$('.nav_warp').addClass('nav_warp_1 ');
			$('.nav').addClass('nav_1');
		} else if($(this).scrollTop() < 100 && $(this).scrollTop() > 0) {
			$('.nav_warp').removeClass('nav_warp_1 ');
			$('.nav').removeClass('nav_1');
		}

		if($(window).scrollTop() > $($('.ad_banner')[0]).offset().top - $(window).innerHeight() + $('.ad_banner')[0].clientHeight) {
			var x = $(window).scrollTop() - $($('.ad_banner')[0]).offset().top + $(window).innerHeight() - $('.ad_banner')[0].clientHeight
			$('.ins2').css('background-position', '30% ' + (x - 800) + 'px')
		}

		if($(window).scrollTop() + $(window).innerHeight() > $('.award').offset().top) {
			var y = $(window).scrollTop() + $(window).innerHeight() - $('.award').offset().top - 360;
			console.log(y)
			if(y > 0) {
				y = 0
			}
			$('.award').css('background-position', 'center ' + y + 'px')
		}

	});

	$('.nav input').click(function() {
		$(this).attr('type', 'text');
		$(this).addClass('input1');
	}).blur(function() {
		$(this).attr('type', 'buttom');
		$(this).removeClass('input1');
	})

	$('.slider .btn_l').click(function() {
		var s = '';

		s = $($('.slider_warp h3')[slider_num]).attr('style');
		s = s.slice(0, s.indexOf('padding-top'));
		$($('.slider_warp h3')[slider_num]).attr('style', s);

		s = $($('.slider_warp p')[slider_num]).attr('style');
		s = s.slice(0, s.indexOf('padding-top'));
		$($('.slider_warp p')[slider_num]).attr('style', s);

		s = $($('.slider_warp span')[slider_num]).attr('style');
		s = s.slice(0, s.indexOf('padding-top'));
		$($('.slider_warp span')[slider_num]).attr('style', s);

		s = $($('.slider_warp i')[slider_num]).attr('style');
		s = s.slice(0, s.indexOf('padding-top'));
		$($('.slider_warp i')[slider_num]).attr('style', s)

		$($('.slider_warp li')[slider_num]).css('display', 'none');

		slider_num--;
		if(slider_num == -1) {
			slider_num = 3;
		}
		$($('.slider_warp li')[slider_num]).css({
			'display': 'block',
		});

		$($('.slider_warp h3')[slider_num]).animate({
			'padding-top': a[slider_num][0]
		})
		$($('.slider_warp p')[slider_num]).animate({
			'padding-top': a[slider_num][1],
			'word-spacing': 5
		})
		$($('.slider_warp span')[slider_num]).animate({
			'padding-top': a[slider_num][2]
		})
		$($('.slider_warp i')[slider_num]).animate({
			'padding-top': a[slider_num][3]
		})

		$('.slider_warp').css({
			'background-image': 'url(img/slider' + slider_num + '.jpg)'
		});
	});

	$('.slider .btn_r').click(function() {

		var s = '';

		s = $($('.slider_warp h3')[slider_num]).attr('style');
		s = s.slice(0, s.indexOf('padding-top'));
		$($('.slider_warp h3')[slider_num]).attr('style', s);

		s = $($('.slider_warp p')[slider_num]).attr('style');
		s = s.slice(0, s.indexOf('padding-top'));
		$($('.slider_warp p')[slider_num]).attr('style', s);

		s = $($('.slider_warp span')[slider_num]).attr('style');
		s = s.slice(0, s.indexOf('padding-top'));
		$($('.slider_warp span')[slider_num]).attr('style', s);

		s = $($('.slider_warp i')[slider_num]).attr('style');
		s = s.slice(0, s.indexOf('padding-top'));
		$($('.slider_warp i')[slider_num]).attr('style', s)

		$($('.slider_warp li')[slider_num]).css('display', 'none');

		slider_num++;
		if(slider_num == 4) {
			slider_num = 0;
		}
		$($('.slider_warp li')[slider_num]).css({
			'display': 'block',
		});

		$($('.slider_warp h3')[slider_num]).animate({
			'padding-top': a[slider_num][0]
		})
		$($('.slider_warp p')[slider_num]).animate({
			'padding-top': a[slider_num][1],
			'word-spacing': 5
		})
		$($('.slider_warp span')[slider_num]).animate({
			'padding-top': a[slider_num][2]
		})
		$($('.slider_warp i')[slider_num]).animate({
			'padding-top': a[slider_num][3]
		})

		$('.slider_warp').css({
			'background-image': 'url(img/slider' + slider_num + '.jpg)'
		});
	})

	$('.award .btn_l').click(function() {
		$($('.award_list li')[award_num]).css('display', 'none');
		award_num--;
		if(award_num == -1) {
			award_num = 2;
		}
		$($('.award_list li')[award_num]).css({
			'display': 'block',
		});
	})
	$('.award .btn_r').click(function() {
		$($('.award_list li')[award_num]).css('display', 'none');
		award_num++;
		if(award_num == 3) {
			award_num = 0;
		}
		$($('.award_list li')[award_num]).css({
			'display': 'block',
		});
	})

	function nav_mar() {
		if($(window).innerWidth() > 1020) {
			$('.nav').css({
				'margin': '0 90px'
			})
			$('.nav>ul').attr({
				'class': 'nav_list_warp'
			})
			$('.nav_warp').removeClass('nav_warp_1 ');
			$('.nav').removeClass('nav_1');
		} else if($(window).innerWidth() < 1020 && $(window).innerWidth() > 840) {
			$('.nav').css({
				'margin': '0 ' + ($(window).innerWidth() - 840) / 2 + 'px'
			})
			$('.nav>ul').attr({
				'class': 'nav_list_warp'
			})
			$('.nav_warp').removeClass('nav_warp_1 ');
			$('.nav').removeClass('nav_1');
		} else if($(window).innerWidth() < 840) {
			$('.nav').css({
				'margin': '0 90px'
			})
			$('.nav>ul').attr({
				'class': 'sm_ul'
			})
			$('.nav_warp').addClass('nav_warp_1 ');
			$('.nav').addClass('nav_1');
		}
	}
})