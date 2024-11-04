/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        650: {
            slidesPerView: 2,
        },

        968: {
            slidesPerView: 3,
        },
    },
});

// MAIN LOOGIC

const menu = document.getElementById("menu");
const mobileNav = document.getElementById("mobile-nav");
const closeNav = document.getElementById("close");

menu.onclick = function () {
    toggleMenu("show");
};

closeNav.onclick = function () {
    toggleMenu("hide");
};

function toggleMenu(action) {
    if (action === "show") {
        mobileNav.style.display = "block"
    } else {
        mobileNav.style.display = "none"
    }
}