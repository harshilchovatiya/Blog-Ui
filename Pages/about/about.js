function handleScrollToTop() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $('.back-to-top').addClass('show-back-to-top');
      } else {
        $('.back-to-top').removeClass('show-back-to-top');
      }
    });
  
    $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  }
  
  $(document).ready(function () {
    handleScrollToTop();
  });
  