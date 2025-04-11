function switchForm(formId) {
    const current = document.querySelector(".form-box.active");
    const next = document.getElementById(formId);

    if (current !== next) {
        gsap.to(current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            onComplete: () => {
                current.classList.remove("active");
                next.classList.add("active");
                gsap.fromTo(next, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4 });
            }
        });
    }
}

function showSection(sectionId) {
    const all = document.querySelectorAll(".section");
    const target = document.getElementById(sectionId);

    all.forEach(sec => {
        sec.classList.remove("active-section");
        gsap.to(sec, { opacity: 0, duration: 0.3 });
    });

    setTimeout(() => {
        all.forEach(sec => sec.style.display = "none");
        target.style.display = "flex";
        target.classList.add("active-section");

        gsap.fromTo(target,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );
    }, 300);
}

// 🌙 Dark/Light Mode
document.getElementById("darkModeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark");
});

// 🌄 Parallax Background
window.addEventListener("scroll", function () {
    const offset = window.pageYOffset;
    document.getElementById("parallax-bg").style.transform = `translateY(${offset * 0.5}px)`;
});

// 🎬 Page load animations
window.addEventListener("DOMContentLoaded", () => {
    gsap.from(".logo img", { x: -50, opacity: 0, duration: 1 });
    gsap.from(".nav-links ul li", { x: 50, opacity: 0, stagger: 0.2, duration: 1 });

    showSection("home"); // Show home first
});
