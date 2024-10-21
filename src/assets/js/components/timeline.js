import $ from 'jquery'

window.$ = $;

$('.bk-timeline__icon').on('click', function() {
  const parent = $(this).closest('.bk-timeline')

  if(parent.hasClass('bk-timeline--open')) {
    parent.find('.bk-timeline__content').slideUp(500,  function() {
      parent.removeClass('bk-timeline--open')
    })
  } else {
    parent.addClass('bk-timeline--open')
    parent.find('.bk-timeline__content').slideDown()
  }
})