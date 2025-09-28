// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handling
function handleContact(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const course = document.getElementById('course').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if(!name || !phone || !course || !message){
    status.textContent='Please fill all fields.';
    return;
  }
  
  status.textContent = 'Sending your inquiry...';
  setTimeout(()=>{
    status.textContent = 'Thank you! We will contact you shortly.';
    document.getElementById('contactForm').reset();
  }, 1000);
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
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

// Mobile menu functionality (can be expanded later)
document.addEventListener('DOMContentLoaded', function() {
  // Add mobile menu toggle if needed in future
  console.log('Alfikr Welfare Foundation website loaded successfully');
});
