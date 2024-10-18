import 'avalanche-css'
import './src/assets/scss/_reset.scss'
import './src/assets/scss/_vars.scss'
import './src/assets/scss/_layout.scss'
import './src/assets/scss/_fonts.scss'
import './src/assets/scss/_btns.scss'
import './src/assets/scss/_header.scss'
import './src/assets/scss/_footer.scss'
import './src/assets/scss/components/_slider.scss'
import './src/assets/scss/components/_bk-news.scss'
import './src/assets/scss/components/_bk-card.scss'
import './src/assets/scss/components/_bk-timeline.scss'

import $ from 'jquery';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

window.$ = $;

const swiper = new Swiper(".swiper-home", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});



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
