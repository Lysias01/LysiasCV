// main.js

// ==========================
// MENU BURGER
// ==========================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Fermeture du menu quand on clique sur un lien
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  });
});

// ==========================
// SMOOTH SCROLL
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==========================
// SCROLL REVEAL
// ==========================
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ==========================
// FORMSPREE - MESSAGE DE CONFIRMATION
// ==========================
const form = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        form.reset();
        formResponse.style.display = 'block';
        setTimeout(() => {
          formResponse.style.display = 'none';
        }, 5000);
      } else {
        alert("Oups, quelque chose s'est mal passé. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Erreur lors de l'envoi du formulaire.");
      console.error(error);
    }
  });
}
