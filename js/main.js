





// メインビジュアルの拡大

$(window).scroll(function() {
  var scroll = $(window).scrollTop();//スクロール値を定義
//header-imgの背景
if (window.matchMedia( "(min-width: 900px)" ).matches) {
$('.mainvisual-img').css({
transform: 'scale('+(100 + scroll/10)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
top: -(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
  });
}
});

// レスポンシブ　メインビジュアルの縮小
$(window).scroll(function() {
  var scroll = $(window).scrollTop();//スクロール値を定義
//header-imgの背景
if (window.matchMedia( "(max-width: 900px)" ).matches) {
$('.mainvisual-img').css({
transform: 'scalex('+(100 - scroll/10)/100+')',//スクロール値を代入してscale1から縮小.scroll/10の値を小さくすると拡大値が小さくなる
top: +(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
  });
}
});



// 中央ロゴ

$(function(){
  const hero = $('.hero-logo');

  // 最初にふわっと出す
  setTimeout(() => {
    hero.addClass('show');
  }, 100);
});

$(function(){
  const hero = $('.hero-logo');
  const fadeEnd = 300;

  $(window).on('scroll', function(){
    const scroll = $(window).scrollTop();

    let progress = scroll / fadeEnd;
    if(progress > 1) progress = 1;

    // ゆっくり変化
    const scale = 1.5 - (0.4 * progress);
    const translateY = -50 - (40 * progress);
    const opacity = 1 - progress;

    hero.css({
      transform: `translate(-50%, ${translateY}%) scale(${scale})`,
      opacity: opacity
    });
  });
});




$(function(){
  const hamburger = $('.hamburger');
  const logo = $('.logo');

  let pastPos = 0;
  const start = 300;

  $(window).on('scroll', function(){
    const scroll = $(window).scrollTop();

    // ▼ ハンバーガー制御
if(scroll > start){
  hamburger.stop(true, true).fadeIn(300);
} else {
  hamburger.stop(true, true).fadeOut(300);
}
    // ▼ ロゴ制御（これを追加）
    if(scroll > start){
      logo.addClass('show');
    } else {
      logo.removeClass('show');
    }

    pastPos = scroll;
  });
});


function closeMenu(){
  $('.hamburger-list').removeClass('hamburger-list-show');
  $('.hamburger').removeClass('active');
}


// ハンバーガーボタン
$(function() {
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('.hamburger-list').toggleClass('hamburger-list-show');
  });
});
$(function() {
  $('.hamburger-list').click(function() {
    $('.hamburger').removeClass('active');
    $('.hamburger-list').removeClass('hamburger-list-show');
  });
});




        

$(function(){
  const sidebutton = $('.side');
  const gallery = $('#gallery');

  const offset = 400; // ← この数値で調整

  $(window).on('scroll', function(){
    const scroll = $(window).scrollTop();

    const galleryTop = gallery.offset().top - offset;
    const galleryBottom = gallery.offset().top + gallery.outerHeight() - offset;

    if(scroll >= galleryTop && scroll <= galleryBottom){
      sidebutton.addClass('side-button-show');
    } else {
      sidebutton.removeClass('side-button-show');
    }
  });
});

// スライダー
$(function () {
  $('#js-slider-1').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: false
        }
      }
    ]
  });
});




