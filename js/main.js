$(function(){
  //スクロールアニメーション
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href === "#" || href === "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    toggleModal();
    return false;
  });

  //ヘッダーリンクのモーダルクローズ
  $("#menuOpen, #menuClose, #modal").click(function(){
    toggleModal();
    return false;
  });
});

//モーダルのボタン切り替え
function toggleModal() {
  const modal = $("#modal");
  const menuOpen = $("#menuOpen");
  const menuClose = $("#menuClose");
  const speed = 300;
  const modalDisplay = modal.css('display');

  if(modalDisplay === 'none') {
    menuOpen.hide();
    menuClose.show();
  } else {
    menuOpen.show();
    menuClose.hide();
  }

  $("#modal").slideToggle(speed);
  return false;
}
