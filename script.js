document.addEventListener('scroll', function () {
    const timeline = document.querySelector('.timeline');
    const line = document.querySelector('.line');
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    const timelineHeight = timeline.offsetHeight;
    const scrollPosition = Math.min(scrollTop + windowHeight, timelineHeight);

    line.style.height = scrollPosition + 'px';
});

// Function to reveal elements on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.event');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight + 100) {
            element.classList.add('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', revealOnScroll);

// Initial check
revealOnScroll();
