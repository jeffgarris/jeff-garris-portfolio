if (document.referrer && document.referrer != "" && document.referrer.indexOf('products') > -1) {
	$('.return-to-product').attr('href', document.referrer).addClass('show');
}