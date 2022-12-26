
$(function () {
  function end_loader() {
    $('.loader').fadeOut(1200);
  }
  $(window).load(function () { //全ての読み込みが完了したら実行
    $('.loader').delay(1200).fadeOut(1200);
    $('#wrap').css('display', 'block');
  });
})

