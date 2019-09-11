new WOW().init();

$(document).ready(function(){
	
	$('.parallax').parallax();
	$('.carousel').carousel({
		padding: 175
	});

	$('.arrl').on('click',function(){
		$('.carousel').carousel('prev');
	});

	$('.lolll').on('click',function(){
		$('.carousel').carousel('next');
	});

	$('.sidenav').sidenav({
		edge : 'right',
		draggable: true
	});

	$('.collapsible').collapsible();

	$('.preloader-background').delay(1600).fadeOut('slow',function(){
		$('body').removeClass('loading');
	});
	$('.preloader-wrapper').delay(1600).fadeOut();
		

	/* 			Hide Navbar			 */
	var prevScrollpos = 0,
		headerOrg = $('#navwrap').height();

	$('#navbar').height($('#navwrap').height());
	/*-------------------------------*/

	/* 			scrollspy			 */
	var div = $("#divShow");
	var nav = $('nav');
	var pos = div.position();
	/*-------------------------------*/

	$(window).scroll(function(){

		/* 			Hide Navbar			 */

		var currentScrollpos = $(this).scrollTop();
		if(currentScrollpos > headerOrg)
		{
			if(prevScrollpos > currentScrollpos)
			{
				$("#navbar").css('top','0');
			} else {
				$("#navbar").css('top','-100px');
			}
			
		} else {
			$("#navbar").css('top','0');
		}

		prevScrollpos = currentScrollpos;

		/*-------------------------------*/

		/* 			Scrollspy			 */
		var windowpos = $(window).scrollTop();

		if(windowpos >= 200)
		{
			div.addClass('wow zoomIn animated');
			div.removeClass('zoomOut');
			setTimeout( function(){
				$('#divShow').css('display','block');
			},200);

		} else {
			div.addClass('zoomOut');
			div.removeClass('zoomIn');
			setTimeout( function(){
				$('#divShow').css('display','none');
			},200);
		}

		if(windowpos > 0)
		{
			nav.addClass('white');
			nav.addClass('z-depth-1');
			$('.atext').addClass('blue-grey-text text-darken-4');
			nav.removeClass('transparent');
			nav.removeClass('z-depth-0');
			$('.atext').removeClass('white-text');
			$('.img_').attr('src','assets/img/up.png');
		} else {
			nav.addClass('transparent');
			nav.addClass('z-depth-0');
			$('.atext').addClass('white-text');
			nav.removeClass('white');
			nav.removeClass('z-depth-1');
			$('.atext').removeClass('blue-grey-text text-darken-4');
			$('.img_').attr('src','assets/img/up_w.png');			
		}
		/*-------------------------------*/

	});

	$('a[href*="#"]')	  
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		    
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& 
			location.hostname == this.hostname
		) {
		      
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		     
			if (target.length) {
		        
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1500, function() {
		          
					var $target = $(target);
					$target.focus();
					
					// if ($target.is(":focus")) {
					// 	return false;
					// } else {
					// 	$target.attr('tabindex','-1');
					// 	$target.focus(); 
					// };
				});
			}
		}
	});

});