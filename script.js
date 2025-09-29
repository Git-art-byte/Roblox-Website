// ============================================
// INFINITE SCROLL ANIMATIONS
// Animations trigger every time you scroll
// ============================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Add visible class when scrolling down
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Remove visible class when scrolling up (enables re-animation)
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ============================================
// COPY CODE FUNCTIONALITY
// ============================================

function copyCode(btn) {
    const codeBlock = btn.closest('.code-box').querySelector('code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        alert('Failed to copy. Please copy manually.');
    });
}

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// ============================================
// PARALLAX SCROLLING EFFECT
// ============================================

let lastScroll = 0;
const parallaxElements = document.querySelectorAll('.hero, .section-title');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
    
    lastScroll = scrolled;
});

// ============================================
// MOUSE MOVE GLOW EFFECT
// ============================================

document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.bg-animation');
    if (glow) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        glow.style.background = `
            radial-gradient(circle at ${x}% ${y}%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at ${100-x}% ${100-y}%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.04) 0%, transparent 50%)
        `;
    }
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.background = 'rgba(10, 14, 39, 0.95)';
        header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
    } else {
        header.style.background = 'rgba(10, 14, 39, 0.9)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    }
    
    lastScrollTop = scrollTop;
});

// ============================================
// STAGGER ANIMATION FOR GRIDS
// ============================================

const addStaggerAnimation = () => {
    const grids = document.querySelectorAll('.info-grid, .code-box, .step-card');
    
    grids.forEach(grid => {
        const items = grid.querySelectorAll('.info-card, .code-box, .step-card');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });
};

// Run on page load
window.addEventListener('load', addStaggerAnimation);

// ============================================
// TYPING EFFECT FOR HERO (Optional)
// ============================================

const heroText = document.querySelector('.hero p');
if (heroText) {
    const originalText = heroText.textContent;
    heroText.textContent = '';
    let charIndex = 0;
    
    const typeWriter = () => {
        if (charIndex < originalText.length) {
            heroText.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 30);
        }
    };
    
    // Start typing effect after a small delay
    setTimeout(typeWriter, 500);
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const optimizedScroll = debounce(() => {
    // Any additional scroll logic here
}, 10);

window.addEventListener('scroll', optimizedScroll);
