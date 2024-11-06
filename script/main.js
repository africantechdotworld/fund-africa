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

    if (action === "scroll") {
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

function scrollToBottom() {
    window.scrollTo({
        bottom: 150,
        behavior: 'smooth'
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    // Intersection Observer to trigger counting when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter); // Stop observing once animation starts
            }
        });
    }, { threshold: 0.5 });

    counters.forEach((counter) => {
        observer.observe(counter);
    });

    function animateCounter(counter) {
        const target = +counter.getAttribute("data-target");
        const speed = 50; // Adjust for faster or slower counting
        let count = 0;

        const updateCount = () => {
            count += Math.ceil(target / speed); // Increment by a fraction of target
            if (count > target) count = target; // Stop at target value

            // Format as currency for the third counter
            if (counter.id === "currency-counter") {
                counter.textContent = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0
                }).format(count);
            } else {
                counter.textContent = count;
            }

            if (count < target) {
                requestAnimationFrame(updateCount); // Continue until target is reached
            }
        };
        counter.classList.add("active"); // For the CSS animation
        updateCount();
    }
});