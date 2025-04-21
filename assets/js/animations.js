// Handle image loading
document.addEventListener('DOMContentLoaded', function() {
    // Default placeholder image
    const defaultPlaceholder = 'https://placehold.co/600x400/333333/FFFFFF?text=Image+Not+Found';
    
    // Add loaded class to all images when they finish loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Handle loading errors
        img.onerror = function() {
            this.src = defaultPlaceholder;
            this.alt = 'Image not available';
            console.warn('Image failed to load:', this.src);
        };

        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                img.classList.add('loaded');
            });
        }
    });

    // Add placeholder images for images without src
    const imagesWithoutSrc = document.querySelectorAll('img:not([src])');
    imagesWithoutSrc.forEach(img => {
        img.src = defaultPlaceholder;
    });

    // Add alt text warning for images without alt
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    imagesWithoutAlt.forEach(img => {
        console.warn('Image missing alt attribute:', img);
        img.alt = 'Image description missing';
    });
});

// Intersection Observer for heading animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all headings
document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
    observer.observe(heading);
}); 