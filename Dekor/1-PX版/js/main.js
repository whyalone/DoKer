$(window).ready(function () {

	//nav

	$(window).scroll(function () {
		//导航栏高度度动画
		if ($(this).scrollTop() > 100) {
			setTimeout(function () {
				$("#nav").css({
					"top": 0,
					"padding": 0,
					"background-color": "rgba(0,0,0,1)"
				});
			}, 100);

		} else {
			setTimeout(function () {
				$("#nav").css({
					"top": 20,
					"padding-top": 8,
					"padding-buttom": 8,
					"background-color": "rgba(0,0,0,0)"
				});
			}, 100);
		}


		




})