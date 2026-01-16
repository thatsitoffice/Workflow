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
const mobileCookieBtn = document.querySelector('.mobile-cookie-btn');
const desktopCookieIcon = document.querySelector('.desktop-cookie-btn-icon');

function handleCookieClick() {
  alert('Cookie-Einstellungen werden geöffnet...');
  // Here you can implement actual cookie settings functionality
}

if (cookieBtn) {
  cookieBtn.addEventListener('click', handleCookieClick);
}

if (mobileCookieBtn) {
  mobileCookieBtn.addEventListener('click', handleCookieClick);
}

if (desktopCookieIcon) {
  desktopCookieIcon.addEventListener('click', handleCookieClick);
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

// Mobile menu toggle functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileSidebar = document.querySelector('.mobile-sidebar');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

function openMobileMenu() {
  document.body.classList.add('menu-open');
  mobileSidebar?.classList.add('active');
  mobileMenuOverlay?.classList.add('active');
  mobileMenuToggle?.classList.add('active');
}

function closeMobileMenu() {
  document.body.classList.remove('menu-open');
  mobileSidebar?.classList.remove('active');
  mobileMenuOverlay?.classList.remove('active');
  mobileMenuToggle?.classList.remove('active');
}

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', openMobileMenu);
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', closeMobileMenu);
}

if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);
}

// Close menu when clicking on a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

// Update active section for mobile nav
function updateMobileActiveSection() {
  const sections = document.querySelectorAll('section[id], header[id]');
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  mobileNavLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === '#' + currentSection || (href === '#home' && currentSection === '')) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateMobileActiveSection);
