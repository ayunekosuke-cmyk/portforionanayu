







$(function(){
  const logo = $('.logo');

  let pastPos = 0;
  const start = 300;

  $(window).on('scroll', function(){
    const scroll = $(window).scrollTop();

    // ▼ ロゴ制御（これを追加）
    if(scroll > start){
      logo.addClass('show');
    } else {
      logo.removeClass('show');
    }

    pastPos = scroll;
  });
});



// モーダル
$(function () {
  const cards = $('.work-card');
  const viewer = $('.works-viewer');
  const details = $('.work-detail');

  // カードクリック
  cards.on('click', function () {
    const target = $(this).data('target');

    details.removeClass('is-active');
    $('#' + target).addClass('is-active');

    viewer.addClass('active');
  });

  // ×で閉じる
  $('.close-btn').on('click', function () {
    viewer.removeClass('active');
  });

  // 背景クリックでも閉じる
  viewer.on('click', function (e) {
    if ($(e.target).is('.works-viewer')) {
      viewer.removeClass('active');
    }
  });
});


$(function() {
  $(window).on('scroll load', function() {
    $('.fade-up').each(function() {
      const elemTop = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll + windowHeight > elemTop + 80) {
        $(this).addClass('show');
      }
    });
  });
});


