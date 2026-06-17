/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target =
        parseInt(counter.dataset.target);

    let current = 0;

    const updateCounter = () => {

        const increment =
            Math.ceil(target / 50);

        current += increment;

        if (current >= target) {

            counter.innerText = target;
            return;
        }

        counter.innerText = current;

        requestAnimationFrame(
            updateCounter
        );
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

    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");

    if (!days || !hours || !minutes) {
        return;
    }

    const examDate =
        new Date(2026, 4, 3, 9, 0, 0);

    const now =
        new Date();

    const distance =
        examDate.getTime() -
        now.getTime();

    if (distance <= 0) {

        days.textContent = "000";
        hours.textContent = "00";
        minutes.textContent = "00";

        return;
    }

    const remainingDays =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const remainingHours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );

    const remainingMinutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );

    days.textContent =
        remainingDays;

    hours.textContent =
        remainingHours;

    minutes.textContent =
        remainingMinutes;
}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);

/* =========================
   NAVBAR SHADOW
========================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.boxShadow =
            "none";
    }

});

/* =========================
   BUTTON HOVER EFFECT
========================= */

const buttons =
    document.querySelectorAll(
        ".primary-btn,.secondary-btn,.pricing-btn,.cta-btn,.nav-btn,.mentor-btn"
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
        ".pain-card,.mentor-card,.result-card,.pricing-card,.process-card,.chat-card,.stat-card"
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
