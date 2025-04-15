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
            slidesPerView: 3, // Show 4 slides on large screens
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


/*====== Dark and light themes ================*/
// filepath: assets/js/main.js
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected theme (if user saved it)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Get the current theme by checking if the body has the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Apply the previously selected theme (if any)
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Toggle the theme and save the preference
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Save the current theme and icon in localStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== Favorites ===============*/
// Select all favorite buttons
const favoriteButtons = document.querySelectorAll('.featured__actions .ri-poker-hearts-line');

// Retrieve favorites from local storage
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Mark favorite items with a red heart on page load
favoriteButtons.forEach((button) => {
    const card = button.closest('.featured__card');
    const cardTitle = card.querySelector('.featured__title').textContent;

    // Check if the card is in the favorites list
    if (favorites.some((item) => item.title === cardTitle)) {
        button.classList.add('ri-heart-fill'); // Filled heart (red)
        button.classList.remove('ri-poker-hearts-line'); // Default heart
    } else {
        button.classList.add('ri-poker-hearts-line'); // Default heart
        button.classList.remove('ri-heart-fill'); // Remove red heart
    }

    // Add click event listener to toggle the heart icon
    button.addEventListener('click', () => {
        button.classList.toggle('ri-poker-hearts-line'); // Default heart
        button.classList.toggle('ri-heart-fill'); // Filled heart (red)

        // If the heart is red, add the card to favorites
        if (button.classList.contains('ri-heart-fill')) {
            addToFavorites(card);
        } else {
            removeFromFavorites(cardTitle);
        }
    });
});

// Function to add a card to favorites
function addToFavorites(card) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Extract card data
    const cardData = {
        title: card.querySelector('.featured__title').textContent,
        image: card.querySelector('.featured__img').src,
        discount: card.querySelector('.featured__discount')?.textContent || '',
        price: card.querySelector('.featured__price')?.textContent || '',
    };

    // Add the card data to the favorites array if it doesn't already exist
    if (!favorites.some((item) => item.title === cardData.title)) {
        favorites.push(cardData);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

// Function to remove a card from favorites
function removeFromFavorites(title) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Remove the card from the favorites array
    const updatedFavorites = favorites.filter((item) => item.title !== title);

    // Save the updated favorites array to local storage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
}