const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
menuBtn?.addEventListener('click', () => mobileNav.classList.toggle('hidden'));

const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('show'), index * 70);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const filterButtons = document.querySelectorAll('.menu-filter');
const dishes = document.querySelectorAll('.dish-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    dishes.forEach(dish => {
      const match = filter === 'all' || dish.dataset.category === filter;
      dish.style.display = match ? 'block' : 'none';
    });
  });
});

const reservationForm = document.getElementById('reservationForm');
const formMessage = document.getElementById('formMessage');
reservationForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.classList.remove('hidden');
  reservationForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
