document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active navigation link based on current page
const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split("/").pop();
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Optionally show a toast or alert when 'Hire Me' is clicked
const hireButton = document.querySelector('button');
if (hireButton) {
  hireButton.addEventListener('click', () => {
    alert('Redirecting to Contact page...');
  });
}
