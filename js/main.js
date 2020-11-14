$(function(){

  //スクロールアニメーション
  $('a[href^="#"]').click(function(){
    let href = $(this).attr("href");

    if(href !== "#" && isOpenModal()) {
      closeModal(); //モーダルクローズ
    }
    scrollSection(href); //スクロール移動

    return false;
  });

  //モーダル表示ボタンクリック
  $("#menuOpen").click(function(){
    openModal();
    return false;
  });

  //モーダル表示ボタンクリック
  $("#menuClose, #modal").click(function(){
    closeModal();
    return false;
  });

});

let scrollPosition;

//モーダルの表示確認
function isOpenModal() {
  const modalDisplay = $("#modal").css('display');
  let isOpenModal = modalDisplay === 'block';

  return isOpenModal;
}

//スクロールイベント
function scrollSection(href) {
  let speed = 500;
  let target = $(href === "#" || href === "" ? 'html' : href);
  let position = target.offset().top;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
}

//モーダルオープン
function openModal() {

  //ボタン切り替え
  $("#menuOpen").hide();
  $("#menuClose").show();

  //モーダル表示
  $("#modal").slideDown(300);

  //背景スクロール固定
  scrollPosition = $(window).scrollTop();
  $("body").css({
    top: (-1 * scrollPosition),
    position: "fixed"
  });
}

//モーダルクローズ
function closeModal() {
  //ボタン切り替え
  $("#menuOpen").show();
  $("#menuClose").hide();

  //モーダル表示
  $("#modal").slideUp(300);

  //背景スクロール解除
  $("body").css({
    top: 0,
    position: "static"
  });
  $(window).scrollTop(scrollPosition);

}
