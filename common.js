;$('document').ready(function() {

	$('.container-comment__rating-star').bind( "click", function() {

		$('.container-comment__rating-star').removeClass('silver');

		var stars = 5;
		var res = $(this).attr('data-rating');

		for (res++; res < stars; res++) {
			$('.rating-star'+'-'+res).toggleClass('silver');
		};

	});

	$('.container-comment__rating-star').mouseover(function() {

		var zero = 0;
		var res = $(this).attr('data-rating');
		
		for (res; res >= zero; res--) {
			console.log(res)

			$('.rating-star'+'-'+res).addClass('hover');
			$('.container-comment__rating-star').css('background-image', 'url(../img/star-silver.png)');

		};


		$('.container-comment__rating-star').mouseout(function() {

			$('.container-comment__rating-star').removeClass('hover');
			$('.container-comment__rating-star').css('background-image', 'url(../img/star-gold.png)');
		});

	});


});

