// Function to handle the progress bar
function handleProgressBar() {
  let progress = document.getElementById("progressbar");

  if (progress) {
    let totalHeight = document.body.scrollHeight - window.innerHeight;

    window.onscroll = function () {
      let progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + "%";
    };
  } else {
    console.error("Element with ID 'progressbar' not found in the document.");
  }
}

// Function to handle the scroll-to-top button
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

// Call the functions when the DOM is ready
$(document).ready(function () {
  handleProgressBar();
  handleScrollToTop();
});
