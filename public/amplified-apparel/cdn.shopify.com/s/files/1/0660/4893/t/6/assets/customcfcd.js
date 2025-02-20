$(function() {
  
  init();
  
  function init() {
    
    $('.hero__image .icon').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var scrollTo = $('.main-content .newsletter_inline').offset().top - $('#StickNavWrapper').height();
  		
      $('html, body').animate({
    	scrollTop: scrollTo
      }, 1000);
	});
    
    $('.new-design').each(function(i, el) {
      var $el = $(el);
      var detachedDesign = $el.closest('.product-design').detach();
      detachedDesign.prependTo('.collection');
    });
    
  }
  
  
});