document.addEventListener("DOMContentLoaded", () => {
    console.log("Script is loaded");

    const targets = document.querySelectorAll(".animate-on-scroll");
    console.log("Found elements:", targets);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log("Intersection entry:", entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    });

    targets.forEach(target => observer.observe(target));
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 }); // Wyzwala, gdy 10% elementu jest widoczne.

    const elementsToAnimate = document.querySelectorAll('.hidden');
    elementsToAnimate.forEach(element => observer.observe(element));
});