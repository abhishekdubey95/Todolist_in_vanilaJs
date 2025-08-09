// Mobile navigation toggle
const navToggleButton = document.querySelector('.nav-toggle');
const navElement = document.querySelector('.nav');

if (navToggleButton && navElement) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navElement.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.length === 1) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Close mobile nav after selection
    if (navElement && navElement.classList.contains('open')) {
      navElement.classList.remove('open');
      navToggleButton?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());

// Contact form handler
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);

    // Very basic validation
    const requiredFields = ['parentName', 'email', 'message'];
    for (const field of requiredFields) {
      const value = String(formData.get(field) || '').trim();
      if (!value) {
        statusEl.textContent = 'Please complete all required fields.';
        return;
      }
    }

    try {
      submitButton?.setAttribute('disabled', 'true');
      statusEl.textContent = 'Sending…';

      // In a real deployment, POST to your backend or a forms service.
      await new Promise((r) => setTimeout(r, 900));

      statusEl.textContent = 'Thanks! Your message has been sent. We will reply soon.';
      form.reset();
    } catch (err) {
      console.error(err);
      statusEl.textContent = 'Sorry, something went wrong. Please try again.';
    } finally {
      submitButton?.removeAttribute('disabled');
    }
  });
}