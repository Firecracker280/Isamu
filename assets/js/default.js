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


//SIDEBAR

document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const contentOverlay = document.getElementById('contentOverlay');
    const body = document.body;
    
    // Function to toggle sidebar
    function toggleSidebar() {
        sidebarToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
        contentOverlay.classList.toggle('active');
        
        // Prevent scrolling on body when sidebar is open
        if (sidebar.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    }
    
    // Add click event to toggle button
    sidebarToggle.addEventListener('click', toggleSidebar);
    
    // Close sidebar when clicking on overlay
    contentOverlay.addEventListener('click', function() {
        if (sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });
    
    // Close sidebar when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });
    
    // Handle window resize events
    window.addEventListener('resize', function() {
        // Any resize-specific adjustments can go here
    });
    
    // Optional: Add smooth scroll to navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Close sidebar when clicking navigation
            if (sidebar.classList.contains('active')) {
                toggleSidebar();
            }
        });
    });
});
