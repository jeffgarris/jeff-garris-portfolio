$(function() {
  $('*[target="_blank"]').each(function(i, el) {
  	$(el).prop('rel', 'noopener noreferrer');
  });
});