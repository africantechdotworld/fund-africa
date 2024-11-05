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
    mobileNav.classList.toggle('visible');

    if(action === "scroll") {
        scrollToTop();
    }
    /*
    if (action === "show") {
        //mobileNav.style.display = "block";
        mobileNav.style.transform = "translateX(0)";
    } else {
        mobileNav.style.transform = "translateX(70vw)";
        //mobileNav.style.display = "none";
    }*/
}

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }