$ (function(){
  // 変数宣言と代入
  let pageTop = $('.page-top');
  // ボタン非表示
  pageTop.hide();
  // 80pxスクロールしたらボタン表示
  $ (window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      // 0.3秒でフェードイン
      pageTop.fadeIn(300);
    } else {
      // 0.3秒でフェードアウト
      pageTop.fadeOut(300);
    }
  });
  // 0.5秒でページトップへ戻る
  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0}, 500);
    return false;
  })



  var parallaxBkImg = function(){
    $(window).on('load resize', function() {
      $(window).on('load scroll', function(){
        var $winTop = $(window).scrollTop();
        var $target = $('.menu.top');
        var $target = $('.about.top');
        var $target = $('.location.top');
        var $winWidth = $(window).width();
        if($winWidth < 736) {
          $target.each(function(index){
            var $position = $winTop - $target.eq(index).offset().top;
            if($winTop > $target.eq(index).offset().top - 800) {
              $target.eq(index).css({
                'background-position-y': $position * .4
              });
            }
          });
        }
      });
    });
  }();
})