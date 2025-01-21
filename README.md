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
