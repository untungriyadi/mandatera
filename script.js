/* begin begin Back to Top button  */
(function() {
  'use strict';
  // Mendapatkan tombol "Back to Top"
  var goTopBtn = document.querySelector('.back_to_top');


  // Mengganti status tampilan tombol "Back to Top"
  function toggleBackToTopButton() {
    if (window.pageYOffset > 400) {
      goTopBtn.style.display = "flex";
    } else {
      goTopBtn.style.display = "none";
    }
  }

  // Memasang event listener untuk mengganti status tampilan tombol saat pengguna menggulir layar
  window.onscroll = function() {
    toggleBackToTopButton();
  };

  // Memindahkan pengguna ke bagian atas saat tombol diklik
  goTopBtn.onclick = function() {
    window.scrollTo(0, 0);
  };


  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }


  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
/* end begin Back to Top button  */

