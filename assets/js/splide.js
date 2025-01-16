document.addEventListener("DOMContentLoaded", function () {
    new Splide("#banner", {
      type: "loop",
      type  : 'fade',
      perPage: 1,
      perMove: 1,
      pagination:0,
      paginationDirection: "ttb",
      arrowPath: 'M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z',
      classes: {
        arrows: 'splide__arrows banner-arrows',
        arrow : 'splide__arrow banner-arrow',
        prev  : 'splide__arrow--prev banner-arrow-prev',
        next  : 'splide__arrow--next banner-arrow-next',
      },
      breakpoints: {
        1024: { perPage: 1 },
        767: { perPage: 1, paginationDirection: "ltr" },
        640: { perPage: 1, pagination: !1, paginationDirection: "ltr" },
      },
      autoplay: !0,
      rewind: !0,
      speed: 2e3,
      rewindSpeed: 2e3,
      interval: 1e4,
    }).mount();
  })
  document.addEventListener("DOMContentLoaded", function () {
    new Splide("#projects", {
      type   : 'loop',
      perPage: 3,
      focus  : 'center',
      breakpoints: {
        1024: { perPage: 3 },
        767: { perPage: 2,  },
        640: { perPage: 1,},
      },
    }).mount();
  })
  document.addEventListener("DOMContentLoaded", function () {
    new Splide("#services", {
      type   : 'loop',
      perPage: 3,
      padding:"50px",
      pagination:0,
      focus  : 'center',
      autoplay: true,
      rewind     : true,
      rewindSpeed: 300,
      breakpoints: {
        1500 : { perPage: 3 },
        1300 : { perPage: 3,padding:"30px",  },
        1200 : { perPage: 2,},
        800  :{perPage: 1, padding:"0px"}
      },
    }).mount();
  })
  document.addEventListener("DOMContentLoaded", function () {
    new Splide("#team", {
      type   : 'loop',
      drag   : 'free',
      focus  : 'center',
      pagination : false,
      arrows : false,
      perPage: 7,
      autoScroll: {
        speed: 1,
      },
      breakpoints:{
        1499: {
          perPage: 5
        },
        1000:{
          perPage: 3
        },
        767:{
          perPage: 2
        }
      }
    }).mount(window.splide.Extensions);
  })