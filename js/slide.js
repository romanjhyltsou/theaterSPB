var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

      var swiper = new Swiper(".our-slide", {
        slidesPerView: 4,
        spaceBetween: 0,
        breakpoints: {
          320: {
            slidesPerView: 1.15,
            spaceBetween: 0
          },
          565: {
            slidesPerView: 1.15,
            spaceBetween: 0
          },
          765: {
            slidesPerView: 1.58,
            spaceBetween: 0
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          1345: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 0
          }
        }
      });

      var swiper1 = new Swiper(".partner__mySwiper", {
        slidesPerView: 4,
        grid: {
          rows: 2,
          loop: true,
        },
        spaceBetween: 0,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          764: {
            slidesPerView: 2.62,
            spaceBetween: 0
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 0
          }
        }
      });