/* 
  Ranjidam Group Trust (RGT) - Main JavaScript
*/

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. Sticky Navbar Elevation Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 3. Highlight Active Navigation Item Based on URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 4. Contact Form Validation & Interactive Feedback
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Basic input check
      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const message = document.getElementById('message')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // UI Feedback state
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Message...';

      setTimeout(() => {
        // Show success alert card
        const formCard = contactForm.parentElement;
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        const successMsg = document.createElement('div');
        successMsg.className = 'alert-success';
        successMsg.style.cssText = 'background: #ecfdf5; border: 1px solid #10b981; color: #047857; padding: 1rem; border-radius: 8px; margin-top: 1rem; font-weight: 600; text-align: center;';
        successMsg.innerHTML = 'Thank you! Your message has been sent successfully. We will get back to you shortly.';
        
        contactForm.appendChild(successMsg);

        setTimeout(() => {
          successMsg.remove();
        }, 6000);
      }, 1000);
    });
  }
});
