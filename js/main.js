/* 
  Ranjidam Group Trust (RGT) - Comprehensive JavaScript
*/

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu & Dropdown Toggles
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Handle Mobile Dropdown Accordion Clicking
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const dropdownToggle = item.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
      dropdownToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 1100) {
          e.preventDefault();
          item.classList.toggle('open');
        }
      });
    }
  });

  // Close Mobile Menu on Outside Link Click
  document.querySelectorAll('.dropdown-item a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('active');
    });
  });

  // 2. Sticky Navbar Elevation Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 3. Highlight Active Navigation Item Based on Current Page URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .dropdown-item a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      // If inside a dropdown, highlight parent link too
      const parentNavItem = link.closest('.nav-item');
      if (parentNavItem) {
        const parentLink = parentNavItem.querySelector('.dropdown-toggle');
        if (parentLink) parentLink.classList.add('active');
      }
    }
  });

  // 4. Contact Form Validation & Interactive Feedback
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      
      const name = document.getElementById('name')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const message = document.getElementById('message')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending Message...';
      }

      setTimeout(() => {
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        const successMsg = document.createElement('div');
        successMsg.className = 'alert-success';
        successMsg.style.cssText = 'background: #ecfdf5; border: 1px solid #10b981; color: #047857; padding: 1rem; border-radius: 8px; margin-top: 1rem; font-weight: 600; text-align: center;';
        successMsg.innerHTML = 'Thank you! Your message has been received by Ranjidam Group Trust. We will respond shortly.';
        
        contactForm.appendChild(successMsg);

        setTimeout(() => {
          successMsg.remove();
        }, 6000);
      }, 1000);
    });
  }
});
