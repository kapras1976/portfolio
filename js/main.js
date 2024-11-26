

barba.init({
  views: [
    {
      namespace: 'home',
      afterEnter() {
        homePage();
      },
    },
      {
      namespace: 'season1',
      afterEnter() {
        $('.menu__btn').on('click', function () {
          $('.menu__list').toggleClass('menu__list--active');
        });
        // ... остальной код для namespace 'season1' ...
          $('[data-fancybox]').fancybox({ youtube: {} });
      },
    },
  ],
  transitions: [
    {
      name: 'opacity-transition',
      sync: true,
      leave(data) {
        return gsap.timeline().to(data.current.container, {
          opacity: 0,
        })
        .fromTo('.box', {
        x: '130%'},{
          x: '-130%'
        },0)
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});

function season1Page(){
   $('[data-fancybox]').fancybox({ youtube: {} });
}

function homePage() {
  $(function () {
    // Инициализация Fancybox (замена fansybox на правильный fancybox)
    $('[data-fancybox]').fancybox({ youtube: {} });

    // Обработчик для меню
    $('.menu__btn').on('click', function () {
      $('.menu__list').toggleClass('menu__list--active');
    });

    // Инициализация слайдера изображений
    $('.heroes__slider-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
      nextArrow:
        '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
      asNavFor: '.heroes__slider-text',
    });

    // Инициализация слайдера текста
    $('.heroes__slider-text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      asNavFor: '.heroes__slider-img',
    });
  });
}