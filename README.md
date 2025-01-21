<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Современный сайт</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <div class="logo">Spark Media</div>
        <nav>
            <ul>
                <li><a href="#home">Главная</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#projects">Проекты</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </nav>
    </header>

    <section id="home" class="hero">
        <h1>Добро пожаловать в Spark Media</h1>
        <p>Место, где оживают идеи</p>
        <button id="openModalBtn">Подробнее</button>
    </section>

    <!-- Модальное окно -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close-btn" id="closeModalBtn">&times;</span>
            <h2>О нас</h2>
            <p>Мы создаем инновационные проекты, которые изменяют будущее.</p>
        </div>
    </div>

    <footer id="contact">
        <p>&copy; 2025 Spark Media</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
/* Сброс стилей */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: #f8f8f8;
    color: #333;
    line-height: 1.6;
}

header {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header .logo {
    font-size: 24px;
    font-weight: 600;
    color: #333;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: 400;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #007BFF;
}

.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('https://via.placeholder.com/1500x1000') no-repeat center center/cover;
    text-align: center;
    color: #fff;
    padding: 0 20px;
}

.hero h1 {
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 20px;
    animation: fadeIn 2s ease-out;
}

.hero p {
    font-size: 24px;
    margin-bottom: 30px;
}

button {
    padding: 10px 30px;
    font-size: 18px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #333;
    color: #fff;
}

/* Модальное окно */
.modal {
    display: none; /* Скрыто по умолчанию */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: auto;
    padding-top: 60px;
}

.modal-content {
    background-color: #fff;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
    animation: fadeInModal 0.3s ease-out;
}

.close-btn {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
}

.close-btn:hover,
.close-btn:focus {
    color: black;
    text-decoration: none;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInModal {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
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
