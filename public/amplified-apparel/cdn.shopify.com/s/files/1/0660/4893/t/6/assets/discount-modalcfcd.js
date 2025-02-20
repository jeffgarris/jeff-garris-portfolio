// Variables
var delay = 1000,
  discountCodePage = location.href.indexOf('discount') > -1,
  excludeModalPage = location.href.indexOf('products') > -1 || location.href.indexOf('collections') > -1,
  referrer = '';

// Events
$('.discount-modal .close').on('click', closeDiscountModal);
// $('.discount-modal .close, .discount-modal .message-trigger').on('mouseenter mouseleave', toggleCloseHoverClass);

function toggleCloseHoverClass() {
  $(this).toggleClass('hovered');
}

if (referrer) {
  $('.modal-overlay').on('click', closeDiscountModal);
}

$('.pinterest.discount-tab').on('click', reopenPinterestModal);

// $('.newsletter.discount-modal .message-trigger, .newsletter.discount-modal input, .newsletter.discount-modal button, .newsletter.discount-modal .close').on('mouseenter mouseleave', switchModalImage);

//     $('.discount-modal #mc-embedded-subscribe-form').on('submit', function() {
//       console.log('hello');
//     	var closeModal = setTimeout('closeDiscountModal()', 1000);
//     });

if (document.referrer.indexOf('pinterest') > -1) {
  referrer = 'pinterest';
}

function signupModal() {
  var _hideSignupModal = getCookie("loadState"),
    _referrerModalState = getCookie("referrerModalState");

  // Show Newsletter Modal
  if (!_hideSignupModal && !discountCodePage && !excludeModalPage && !referrer) {

    // var beginShowModal = setTimeout(
    //   function () {
    //     $('.newsletter.discount-modal').fadeIn(500, 'linear');
    //     $('.modal-overlay').fadeIn();
    //     setCookie('loadState', 'hideSignupModal', '1');
    //   }, delay);

    // Show referrer modal (eg. Pinterest, Instagram, etc.)
  } else if (!_referrerModalState && !discountCodePage && referrer) {

    //     var beginShowModal = setTimeout(
    //       function() {
    //         $('.pinterest.discount-modal').fadeIn();
    //         $('.modal-overlay').fadeIn();
    //       }, delay);

    // Show referrer tab to open referrer modal  
  } else if (referrer && _referrerModalState && !discountCodePage) {

    var beginShowModal = setTimeout(
      function () {
        $('.discount-tab').fadeIn();
      }, 3000);
  }
}

function reopenPinterestModal() {
  $('.pinterest.discount-modal').fadeIn();
  $('.modal-overlay').fadeIn();
  $('.discount-tab').fadeOut();
}

function closeDiscountModal(e) {
  e.preventDefault();
  $('.discount-modal').fadeOut();
  $('.modal-overlay').fadeOut();

  if (referrer) {
    setCookie('referrerModalState', referrer);

    var beginShowModal = setTimeout(
      function () {
        $('.discount-tab').fadeIn();
      }, 2000);
  }
}

// function switchModalImage() {
//   if (window.innerWidth >= 768) {
//     setTimeout(function() {
//     if ($('.close-hovered').length) {      
//       return false;
//     } else {
//       	$('.discount-signup-form .fake-discount').toggle();
//     	$('.discount-signup-form .real-discount').toggle();
//     }
//       }, 100);
//   }
// }

