// Навигационное меню
const siteTitle = document.getElementById('siteTitle');
const navMenu = document.getElementById('navMenu');

siteTitle.addEventListener('click', () => {
  if (navMenu.style.display === 'flex') {
    navMenu.style.opacity = '0';
    setTimeout(() => navMenu.style.display = 'none', 300);
  } else {
    navMenu.style.display = 'flex';
    setTimeout(() => navMenu.style.opacity = '1', 10);
  }
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Скрыть меню на мобильных
    if (window.innerWidth <= 768) {
      navMenu.style.opacity = '0';
      setTimeout(() => navMenu.style.display = 'none', 300);
    }
  });
});

// Кнопка "Наверх"
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 500);
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Модальное окно
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});