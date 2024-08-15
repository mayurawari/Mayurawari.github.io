document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                // Reset animation
                element.classList.remove('show');
                void element.offsetWidth; // Trigger reflow
                // Add class to start animation
                element.classList.add('show');
            } else {
                // Optionally reset when out of view
                entry.target.classList.remove('show');
            }
        });
    }, options);

    boxes.forEach(box => {
        observer.observe(box);
    });
});
