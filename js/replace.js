$('.tel').each(function() {
  var href = $(this).attr("href");
  $(this).attr("href", "tel:" + href.replace(/[^\d\+]/g, ''));
});