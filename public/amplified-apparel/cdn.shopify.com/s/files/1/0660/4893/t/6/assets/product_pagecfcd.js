$(function() {
  
  init();
  
  function init() {
    
    // Override the Yotpo reviews click event and scroll the page while taking into account the sticky menu
    function setUpReviewsClickEvent() {
    $('.bottomLine *').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
      
      var buffer = window.innerWidth >= 750 ? 120 : 50;

        $('html, body').animate({
          scrollTop: $('.yotpo-main-widget').offset().top - buffer
        }, 700);
      });
    }
    
    $(document).ready(checkForReviews);
      function checkForReviews () {
        if($('.standalone-bottomline').is(':visible')){
          setUpReviewsClickEvent();
        } else {
          setTimeout(checkForReviews, 50); //wait 50 ms, then try again
        }
      }
    
    setTimeout(function() {
  	  // Override the Yotpo reviews click event and scroll the page while taking into account the sticky menu
      $('.bottomLine *').click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('html, body').animate({
          scrollTop: $('.yotpo-main-widget').offset().top - 120
        }, 700);
      });
    }, 5000);
    
    
      $(".size-chart-link").fancybox({
      'hideOnContentClick': true
    });

    $('#ProductSelect-option-0').on('change', function descriptionToggle() {
      if ($('#ProductSelect-option-0 option:selected').val().toLowerCase() == 'men'){
        $('.women').hide().siblings().show();
      } else {
        $('.men').hide().siblings().show();
      }
    }).trigger('change');
    
    $('.product-single__thumbnail-item').click(function() {
//    if( $(this).attr('href').indexOf('-men') != -1 ) {
      if ($(this).index() == 1) {
        $('#ProductSelect-option-0 option:eq(0)').prop('selected', true);
        $('.women').hide().siblings().show();
      } else if ($(this).index() == 2) {
      	$('#ProductSelect-option-0 option:eq(1)').prop('selected', true);
        $('.men').hide().siblings().show();
      }
    });
    
  }
  
  
});

