document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functions
  initSidebar();
  initImageHoverEffects();
  initSmoothScrolling();
  initResponsiveAdjustments();
  initPageTransitions();
  initLazyLoading();
});

// Sidebar toggle functionality
function initSidebar() {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('active');
      
      if (content) {
        content.classList.toggle('sidebar-active');
      }
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
      if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target) && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        if (content) {
          content.classList.remove('sidebar-active');
        }
      }
    });
  }
}

// Image hover effects
function initImageHoverEffects() {
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach(item => {
    const overlay = item.querySelector('.overlay');
    const text = item.querySelector('.item-text');
    
    item.addEventListener('mouseenter', function() {
      if (overlay) overlay.style.opacity = '0.8';
      if (text) text.style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', function() {
      if (overlay) overlay.style.opacity = '0';
      if (text) text.style.opacity = '0';
    });
  });
}

// Smooth scrolling to anchors
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Adjust for fixed header if needed
          behavior: 'smooth'
        });
      }
    });
  });
}

// Responsive adjustments
function initResponsiveAdjustments() {
  const checkResponsive = function() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    if (window.innerWidth < 768) {
      // Mobile view
      if (sidebar) {
        sidebar.classList.remove('active');
      }
      if (content) {
        content.classList.remove('sidebar-active');
      }
    }
  };
  
  // Check on window resize
  window.addEventListener('resize', checkResponsive);
  
  // Initial check
  checkResponsive();
}

// Page transition animations
function initPageTransitions() {
  // Add fade-in class to body once the page is loaded
  document.body.classList.add('fade-in');
  
  // Handle outbound links with fade-out effect
  document.querySelectorAll('a').forEach(link => {
    // Only apply to links that lead to other pages within the site
    if (link.hostname === window.location.hostname && link.getAttribute('href').indexOf('#') !== 0) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const destination = this.href;
        
        // Fade out
        document.body.classList.add('fade-out');
        
        // Navigate after animation completes
        setTimeout(function() {
          window.location.href = destination;
        }, 300); // Match this with your CSS transition duration
      });
    }
  });
  
  // For browser back/forward buttons
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      // Page was restored from cache (back/forward)
      document.body.classList.remove('fade-out');
      document.body.classList.add('fade-in');
    }
  });
}

// Lazy loading for images
function initLazyLoading() {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          
          // Optional: Load hi-res version if available
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const lazyLoad = function() {
      const lazyImages = document.querySelectorAll('img[data-src]');
      const scrollTop = window.pageYOffset;
      
      lazyImages.forEach(function(img) {
        if (img.offsetTop < window.innerHeight + scrollTop + 500) {
          img.src = img.dataset.src;
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          img.classList.add('loaded');
        }
      });
      
      // Clean up if all images are loaded
      if (lazyImages.length === 0) {
        document.removeEventListener('scroll', lazyLoad);
        window.removeEventListener('resize', lazyLoad);
        window.removeEventListener('orientationChange', lazyLoad);
      }
    };
    
    // Add event listeners for fallback lazy loading
    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationChange', lazyLoad);
    
    // Initial load
    lazyLoad();
  }
}
