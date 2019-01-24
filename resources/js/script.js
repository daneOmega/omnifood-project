$(document).ready(function() {
    
    
 $('.js-3').waypoint(function(direction){
     
     if(direction == "down") {
         
         $('nav').addClass('sticky');
     } else {
         $('nav').removeClass('sticky');
     }
 });
    
    /* scrolling stuff */
    
    $('.love').click(function() {
    
        $('html, body').animate({scrollTop:$('.yuh').offset().top},1000);
        
    });
    
    $('.real').click(function(){
        
        $('html,body').animate({scrollTop:$('.esketit').offset().top},1000);
    });
    
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    
    $('.js-wp-1').waypoint(function(direction) {
        
        $('.js-wp-1').addClass('animated fadeIn');
        
   }, {
	offset: '50%'
});


  $('.js-wp-2').waypoint(function(direction) {
        
        $('.js-wp-2').addClass('animated fadeInUp');
        
   }, {
	offset: '50%'
});

      $('.js-wp-3').waypoint(function(direction) {
        
        $('.js-wp-3').addClass('animated fadeIn');
        
   }, {
	offset: '50%'
});
    
      $('.js-wp-4').waypoint(function(direction) {
        
        $('.js-wp-4').addClass('animated pulse');
        
   }, {
	offset: '50%'
});
    
    $('.js-nav-icon').click(function(direction) {
        
        var nav = $('.js-main-nav');
        var icon = $('.js--nav-icon ion-icon');
        nav.slideToggle(200);
        if (icon.hasAttr('menu')) {
		icon.addAttr('close');
		icon.removeAttr('menu');
	} else {
		icon.addAttr('menu');
		icon.removeAttr('close');
	}
        
    })
    
    
})