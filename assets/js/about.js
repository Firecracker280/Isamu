// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links (if any are added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Reveal elements on scroll (subtle fade-in animation)
    const revealElements = document.querySelectorAll('.right-column');
    
    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Apply initial styles for animation
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Initial check for elements in view
    revealOnScroll();
    
    // Pseudo-functionality for image loading
    function loadProfileImage() {
        /*
        PSEUDO CODE:
        1. Create image element
        2. Set source to the actual profile image path
        3. When image loads, replace the placeholder
        
        Example implementation:
        const profileImg = new Image();
        profileImg.src = 'path/to/profile-image.jpg';
        profileImg.onload = function() {
            document.querySelector('.image-container').style.backgroundImage = `url(${profileImg.src})`;
            document.querySelector('.image-container').classList.add('loaded');
        }
        */
        
        // For demonstration - add a class after timeout to simulate image load
        setTimeout(() => {
            const imageContainer = document.querySelector('.image-container');
            if (imageContainer) {
                imageContainer.classList.add('loaded');
            }
        }, 1000);
    }
    
    loadProfileImage();
});
