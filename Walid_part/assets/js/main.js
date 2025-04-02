/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content');

/*=============== Show Search ===============*/
if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search');
    });
}

/*=============== Close Search ===============*/
if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search');
    });
}

/*=============== Login ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content');

/*=============== Show login ===============*/
if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login');
    });
}

/*=============== Close login ===============*/
if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login');
    });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
};
window.addEventListener('scroll', shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    autoplay: { // Fixed typo here
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1220: {
            slidesPerView: 3,
            centeredSlides: false,
            // spaceBetween: 24,
        },
    },
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16, // Adjust spacing between slides
    grabCursor: true,
    slidesPerView: 1, // Default to 1 slide for very small screens
    centeredSlides: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2, // Show 2 slides on small screens
            spaceBetween: 16,
        },
        900: {
            slidesPerView: 3, // Show 3 slides on medium screens
            spaceBetween: 24,
        },
        1220: {
            slidesPerView: 4, // Show 4 slides on large screens
            spaceBetween: 32,
        },
    },
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16, // Adjust spacing between slides
    grabCursor: true,
    slidesPerView: 1, // Default to 1 slide for very small screens
    centeredSlides: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2, // Show 2 slides on small screens
            spaceBetween: 16,
        },
        900: {
            slidesPerView: 3, // Show 3 slides on medium screens
            spaceBetween: 24,
        },
        1220: {
            slidesPerView: 4, // Show 4 slides on large screens
            spaceBetween: 32,
        },
    },
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});