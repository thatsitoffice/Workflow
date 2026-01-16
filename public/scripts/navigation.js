// Smooth scrolling for navigation links
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

// Cookie button functionality
const cookieBtn = document.querySelector('.cookie-btn');
if (cookieBtn) {
  cookieBtn.addEventListener('click', function() {
    alert('Cookie-Einstellungen werden geöffnet...');
    // Here you can implement actual cookie settings functionality
  });
}

// Active section detection for sidebar navigation
function updateActiveSection() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.sidebar .nav a');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === '#' + currentSection || (href === '#home' && currentSection === '')) {
      link.classList.add('active');
    }
  });
}

// Update active section on scroll
window.addEventListener('scroll', updateActiveSection);

// Initial call to set active section
updateActiveSection();
