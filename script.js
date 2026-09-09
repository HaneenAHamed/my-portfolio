// تشغيل الكود بعد اكتمال تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. تهيئة أيقونات Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. تظليل القسم النشط في شريط التنقل أثناء التمرير (Scroll)
  const sections = document.querySelectorAll('section.floating-panel');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 220;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSectionId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // 3. زر نسخ البريد الإلكتروني
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'haneenhassanhamed@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i data-lucide="check" class="icon-sm"></i> Copied!';
        if (window.lucide) window.lucide.createIcons();
        
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
          if (window.lucide) window.lucide.createIcons();
        }, 2200);
      });
    });
  }

  // 4. معالجة إرسال النموذج (Contact Form)
  const contactForm = document.getElementById('contactForm');
  const successAlert = document.getElementById('formSuccessMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';
      }

      setTimeout(() => {
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Send Message</span> <i data-lucide="send" class="icon-sm"></i>';
        }
        if (successAlert) {
          successAlert.style.display = 'block';
          setTimeout(() => {
            successAlert.style.display = 'none';
          }, 5000);
        }
        if (window.lucide) window.lucide.createIcons();
      }, 700);
    });
  }

});