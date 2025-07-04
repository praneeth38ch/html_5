 function loadPage(page) {
      document.getElementById("contentFrame").src = page;
    }
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 2300,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });