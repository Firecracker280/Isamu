document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animation
    function handleScroll() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('visible');
            }
        });
    }
    
    // Initial check for items in viewport
    handleScroll();
    
    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    // For smoother animations on page load
    setTimeout(function() {
        handleScroll();
    }, 100);
});
