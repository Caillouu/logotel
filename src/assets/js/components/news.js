import $ from 'jquery'

window.$ = $;

$('.bk-news').each(function() {
  const $paragraph = $(this).find('.bk-news__content p')
  const text = $paragraph.text()
  $paragraph.attr('data-text', text)
  $paragraph.text(text.trim().substring(0, 110) + "...")
})

$('.bk-news').on('mouseenter', function() {
  const $paragraph = $(this).find('.bk-news__content p')
  const fullText = $paragraph.attr('data-text')
  $paragraph.text(fullText) 
}).on('mouseleave', function() {
    const $paragraph = $(this).find('.bk-news__content p')
    const text = $paragraph.text()
    $paragraph.text(text.trim().substring(0, 110) + "...")
})