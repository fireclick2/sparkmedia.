// Плавная прокрутка по ссылкам
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Модальное окно
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Открыть модальное окно
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Закрыть модальное окно
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрыть модальное окно, если пользователь кликнул за пределы окна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Анимация появления элементов при прокрутке
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
