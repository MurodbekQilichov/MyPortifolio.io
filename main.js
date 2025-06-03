document.querySelectorAll(".faq-card").forEach((faq) => {
    faq.querySelector(".faq-question").addEventListener("click", () => {
        document.querySelectorAll(".faq-card.active").forEach((activeFaq) => {
            if (activeFaq !== faq) {
                activeFaq.classList.remove("active");
            }
        });
        faq.classList.toggle("active");
    });
});

const sections = document.querySelectorAll(".container");

const onScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach((section) => {
        if (scrollPosition > section.offsetTop + 50) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", onScroll);


onScroll();
