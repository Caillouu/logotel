import $ from 'jquery'

window.$ = $;

$('.bk-card').each(function() {
  const color = $(this).data('color')
  $(this).find('.bk-card__title').css('color', color)
  $(this).find('.bk-card__img').css('background-color', color)
  $(this).find('.bk-card__bg').css('background-color', color)
  $(this).find('.btn').css('background-color', color)
})

$('.bk-card').on('mouseenter', function(e) {
  const color = $(this).data('color')
  $(this).find('.btn').css('color', color)
}).on('mouseleave', function(e) {
  $(this).find('.btn').css('color', '#fff')
})