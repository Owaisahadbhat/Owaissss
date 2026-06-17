/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();

});

/* =========================
   FAQ ACCORDION
========================= */

const faqButtons =
    document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer =
            button.nextElementSibling;

        const isOpen =
            answer.style.display === "block";

        document
            .querySelectorAll(".faq-answer")
            .forEach(item => {

                item.style.display = "none";

            });

        if (!isOpen) {

            answer.style.display = "block";

        }

    });

});

/* =========================
   SCORE PREDICTOR
========================= */

const scoreSlider =
    document.getElementById("scoreSlider");

const predictedScore =
    document.getElementById("predictedScore");

if (scoreSlider && predictedScore) {

    scoreSlider.addEventListener("input", () => {

        const value =
            parseInt(scoreSlider.value);

        const prediction =
            Math.min(720, value + 80);

        predictedScore.innerText =
            prediction;

    });

}

/* =========================
   NEET COUNTDOWN TIMER
========================= */

function updateCountdown() {

    const examDate =
        new Date("May 3, 2026 09:00:00").getTime();

    const now =
        new Date().getTime();

    const distance =
        examDate - now;

    if (distance < 0) {

        document.getElementById("days").innerText = "000";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";

        return;
    }

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    document.getElementById("days").innerText =
        days;

    document.getElementById("hours").innerText =
        hours;

    document.getElementById("minutes").innerText =
        minutes;
}

setInterval(updateCountdown, 1000);

updateCountdown();

/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.boxShadow = "none";
    }

});

/* =========================
   BUTTON HOVER EFFECT
========================= */

const buttons =
    document.querySelectorAll(
        ".primary-btn,.secondary-btn,.pricing-btn,.cta-btn"
    );

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
            "translateY(-3px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
            "translateY(0px)";

    });

});

/* =========================
   SCROLL REVEAL EFFECT
========================= */

const revealElements =
    document.querySelectorAll(
        ".pain-card,.mentor-card,.result-card,.pricing-card,.process-card,.chat-card"
    );

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";
        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        "all .7s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();
