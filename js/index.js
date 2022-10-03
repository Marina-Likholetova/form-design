$('.tel').each(function() {
  var href = $(this).attr("href");
  console.log(href);
  $(this).attr("href", "tel:" + href.replace(/[^+0-9]/gim, ''));
});




