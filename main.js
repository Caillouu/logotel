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
import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper(".swiper-home", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
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


const bkCards = document.querySelectorAll('.bk-card');

bkCards.forEach(card => {
  const color = card.getAttribute('data-color');
  console.log(card.querySelector('.bk-card__title'))
  card.querySelector('.bk-card__title').style.color = color;
  card.querySelector('.bk-card__img').style.backgroundColor = color;
  card.querySelector('.bk-card__bg').style.backgroundColor = color;
  card.querySelector('.btn').style.backgroundColor = color;
});