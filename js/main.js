(function($) {
	"use strict"
	
	$(window).on('scroll', function() {
		// Fixed Nav
		var wScroll = $(this).scrollTop();
		wScroll > $('header').height() ? $('#nav-header').addClass('fixed') : $('#nav-header').removeClass('fixed');
		
		// Back to top appear
		wScroll > 740 ? $('#back-to-top').addClass('active') : $('#back-to-top').removeClass('active')
	});
	
	// Back to top
	$('#back-to-top').on("click", function(){
		$('body,html').animate({
            scrollTop: 0
        }, 500);
	});
	
	// Mobile Menu Toggle Btn
	$('.burger-btn').on('click',function(){
		$('.mobile-menu').toggleClass('open');
		$('body').toggleClass('hidden-body');
	});
    
	// News feed Toggle Btn
	$('#fixed-news-feed-btn').on('click',function(){
		$('.fixed-news-feed').toggleClass('open');
		$('body').addClass('hidden-body');
	});
	$('.fixed-news-feed .search-close').on('click', function(){
		$('.fixed-news-feed').removeClass('open');
		$('body').removeClass('hidden-body');
	})
	$('.fixed-news-feed').on('click', function(){
		$('.fixed-news-feed').removeClass('open');
		$('body').removeClass('hidden-body');
	})

	// Search Toggle Btn
	$('#search-form-btn').on('click',function(){
		$('.search-form-fixed').toggleClass('open');
		$('body').addClass('hidden-body');
	});
	$('.search-form-fixed .search-close').on('click', function(){
		$('.search-form-fixed').removeClass('open z-index-999');
		$('body').removeClass('hidden-body');
	})
	$('.search-form-fixed').on('click', function(){
		$('.search-form-fixed').removeClass('open z-index-999');
		$('body').removeClass('hidden-body');
	})
	$('.mobile-search .search-input').on('click', function(){
		$('.search-form-fixed').toggleClass('open z-index-999');
		$('body').addClass('hidden-body');
	})
	// Fixed menu
	
	
	

	// Owl Carousel	
	$('#owl-carousel-news-feed').owlCarousel({
		loop:false,
		margin:15,
		dots : false,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay : false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1024:{
				items:3
			},
			1280:{
				items:5
			},
		}
	});
	
	$('#owl-carousel-opinions').owlCarousel({
		loop:true,
		margin:15,
		dots : false,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay : true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1024:{
				items:3
			},
			1280:{
				items:4
			},
		}
	});


    $('#owl-carousel-affiche').owlCarousel({
		loop:true,
		margin:0,
		dots : false,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay : true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:4
			},
		}		
	});

	$('#owl-carousel-3').owlCarousel({
		items:1,
		loop:true,
		margin:0,
		dots : false,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay : true,
	});
	
	$('#owl-carousel-4').owlCarousel({
		items:1,
		loop:true,
		margin:0,
		dots : true,
		nav: false,
		autoplay : true,
	});

})(jQuery);
