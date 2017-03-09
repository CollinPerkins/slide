$(function () {
  var startTimer;
  var time = 20;
  var isPlaying = false;
  $('#countDown').html(time);
  $('#homeCarousel').carousel({
    interval:20000,
    pause: "true"
  });

  $('#homeCarousel').carousel('pause');

  $('.playButton').click(function () {
    isPlaying = !isPlaying;
    if(isPlaying) {
      $('#playButtonSub').html('PAUSE');
      $('#overlay').addClass('hide');
      $('#playButtonMain').addClass('hide');
      $('#homeCarousel').carousel('cycle');
      startTimer = setInterval(function() {
        time -= 1;
        if(time < 1) {
          time = 20;
        }
        $('#countDown').html(time);
      }, 1000);
    } else {
      $('#playButtonSub').html('START');
      $('#homeCarousel').carousel('pause');
      clearInterval(startTimer);
    }
  });


  var $item = $('.carousel .item');
  var $wHeight = $(window).height();
  $item.eq(0).addClass('active');
  $item.height($wHeight);
  $item.addClass('full-screen');

  $('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image' : 'url(' + $src + ')',
      'background-color' : $color
    });
    $(this).remove();
  });

  $(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
  });
});
