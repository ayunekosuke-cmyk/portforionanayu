!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function i(){var b,c,d={height:f.innerHeight,width:f.innerWidth};return d.height||(b=e.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?g:e.body,d={height:c.clientHeight,width:c.clientWidth})),d}function j(){return{top:f.pageYOffset||g.scrollTop||e.body.scrollTop,left:f.pageXOffset||g.scrollLeft||e.body.scrollLeft}}function k(){if(b.length){var e=0,f=a.map(b,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(c=c||i(),d=d||j();e<b.length;e++)if(a.contains(g,f[e][0])){var h=a(f[e]),k={height:h[0].offsetHeight,width:h[0].offsetWidth},l=h.offset(),m=h.data("inview");if(!d||!c)return;l.top+k.height>d.top&&l.top<d.top+c.height&&l.left+k.width>d.left&&l.left<d.left+c.width?m||h.data("inview",!0).trigger("inview",[!0]):m&&h.data("inview",!1).trigger("inview",[!1])}}}var c,d,h,b=[],e=document,f=window,g=e.documentElement;a.event.special.inview={add:function(c){b.push({data:c,$element:a(this),element:this}),!h&&b.length&&(h=setInterval(k,250))},remove:function(a){for(var c=0;c<b.length;c++){var d=b[c];if(d.element===this&&d.data.guid===a.guid){b.splice(c,1);break}}b.length||(clearInterval(h),h=null)}},a(f).on("scroll resize scrollstop",function(){c=d=null}),!g.addEventListener&&g.attachEvent&&g.attachEvent("onfocusin",function(){d=null})});


// ハンバーガーボタン



$(function() {
  $('.button').click(function() {
    $(this).toggleClass('active');
    $('.s-body-shade').fadeToggle(100);
    $('.s-nav-wrapper').toggleClass('s-header-b-margin');
  });
});



$(function() {
  $('.s-header-nav').click(function() {
    $('.s-body-shade').fadeToggle(100);
    $('.s-nav-wrapper').removeClass('s-header-b-margin');
    $('.button').removeClass('active');
  });
});





// アイテム上昇
// インフォーメーションアイテム上昇
$(function() {
  $('#Information-wrapper').on('inview', function(event, isInView) {
    if (isInView) {
      $('#Information-wrapper div').addClass('item-up');
    } 
  });
});


$(function() {
  $('#Information-wrapper').on('inview', function(event, isInView) {
    if (isInView) {
      $('.pinc').addClass('item-up');
    } 
  });
    });

$(function() {
  $('#Information-wrapper').on('inview', function(event, isInView) {
    if (isInView) {
      $('#Information-wrapper h2').addClass('item-up');
    } 
  });
    });

// アバウト＿＿上昇
$(function() {
  $('#About-wrapper').on('inview', function(event, isInView) {
    if (isInView) {
      $('#About-wrapper h2').addClass('item-up');
    } 
  });
});
// ビジネス＿＿上昇
$(function() {
  $('#Business-wrapper').on('inview', function(event, isInView) {
    if (isInView) {
      $('#Business-wrapper div').addClass('item-up');
    } 
  });
});
// カンパニー＿＿上昇
$(function() {
  $('#Company-wrapper-top').on('inview', function(event, isInView) {
    if (isInView) {
      $('#Company-wrapper-top div').addClass('item-up');
    } 
  });
});
// リクルート＿＿上昇
$(function() {
  $('#Recruit-top-wrapper').on('inview', function(event, isInView) {
    if (isInView) {
      $('#Recruit-top-wrapper div').addClass('item-up');
    } 
  });
});


// セクションタイトルのテーマはじけて広がる
$(function() {
  $('#Information-wrapper').on('inview', function(event, isInView) {
    if (isInView) {
      $('#Information-wrapper .h2-span').addClass('h2-min-anime');
    } 
  });
    });


  $(function() {
    $('#About-wrapper').on('inview', function(event, isInView) {
      if (isInView) {
        $('#About-wrapper .h2-span').addClass('h2-min-anime');
      } 
    });
      });

$(function() {
  $('#Business-wrapper').on('inview', function(event, isInView) {
    if (isInView) {
      $('#Business-wrapper .h2-span').addClass('h2-min-anime');
    } 
  });
    });
    
$(function() {
    $('#Company-wrapper-top').on('inview', function(event, isInView) {
      if (isInView) {
        $('#Company-wrapper-top .h2-span').addClass('h2-min-anime');
      } 
    });
      });

$(function() {
  $('#Recruit-top-wrapper').on('inview', function(event, isInView) {
    if (isInView) {
      $('#Recruit-top-wrapper .h2-span').addClass('h2-min-anime');

    } 
  });
    });



$(function() {
$('.right').on('inview', function(event, isInView) {
    if (isInView) {
    $('.right').addClass('right-in');
    } 
});
    });
    
      

$(function() {
    $('.v-box').on('inview', function(event, isInView) {
      if (isInView) {
        $(this).addClass('voice-in');
      } 
    });
      });

      // ビジネスの背景


      $(function() {
        $('#Business-wrapper').on('inview', function(event, isInView) {
          if (isInView) {
            $('.business-back').addClass('business-back-anime');
          } 
        });
          });
          // リクルートの背景


$(function() {
  $('#Recruit-top-wrapper').on('inview', function(event, isInView) {
    if (isInView) {
      $('.recruite-top-back').addClass('reccruite-back-anime');
    } 
  });
    });


// 上に戻るボタン
    
$(function() {
  var topBtn = $('.back-top');    
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
  if ($(this).scrollTop() > 700) {
  //ボタンの表示方法
  topBtn.fadeIn();
  } else {
  //ボタンの非表示方法
  topBtn.fadeOut();
  }
  });
  
  //スクロールしてトップ
  topBtn.click(function () {
  $('body,  html').animate({
  scrollTop: 0},   500);
  return false;
  });
  });


  // 個別ページｈ２のバックはじけて広がる
// $(function() {
//   $('#page-top').on('inview', function(event, isInView) {
//     if (isInView) {
//       $('#page-top .page-h2-span').addClass('page-h2-min-anime');
//     } 
//   });
//     });

//       // 個別ページｈ２の紐のアニメ
// $(function() {
//   $('#page-top').on('inview', function(event, isInView) {
//     if (isInView) {
//       $('#page-top .page-h2-green-nuime-span').addClass('page-h2-line-anime');
//     } 
//   });
//     });


  // フロントページの記事一覧タブリスト

// $ (function(){
//   $ (".tabcontent:not('.tabactive + .tabcontent')").hide();     
//   $(".tabmenu").hover(function(){
//           $ (this).addClass("hover")
//   },
//   function(){
//           $(this).removeClass("hover")
          
//   });     
//   $ (".tabmenu").click(function(){
//          $(".tabmenu").addClass("info-nav-green");
//           $(".tabmenu").removeClass("tabactive");
//           $(".tabmenu").removeClass("info-nav");
//           $ (this).addClass("tabactive");
//           $ (this).addClass("info-nav");
//           $(".tabcontent:not('.tabactive + .tabcontent')").fadeOut(); 
//   $ (".tabactive + .tabcontent").fadeIn();
//   });
// });


  $(function () {
        // 初期化処理: すべてのタブコンテンツを非表示
        $(".tabcontent").hide();
    // アクティブなタブに対応するコンテンツを表示
    $(".tabmenu + .tabactive").next(".tabcontent").show();

  // タブのホバーエフェクト
  $(".tabmenu").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );

  // タブクリック時の処理
    $(".tabmenu").click(function () {
      // すべてのタブを非アクティブに
      $(".tabmenu").removeClass("tabactive");
  
      // クリックされたタブをアクティブに
      $(this).addClass("tabactive");
  
      // すべてのコンテンツを非表示に
      $(".tabcontent").hide();
  
      // アクティブなタブに対応するコンテンツを表示
      $(this).next(".tabcontent").fadeIn();
    });
  });
  



  



