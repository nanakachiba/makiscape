(function($) {
$(function() {
  var $header = $('#top-head');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $header.addClass('smaller');
    } else {
      $header.removeClass('smaller');
    }
  });
});
})(jQuery);
