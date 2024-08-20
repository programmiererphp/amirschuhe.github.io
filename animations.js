document.addEventListener('DOMContentLoaded', (event) => {
    // Функция для проверки, виден ли элемент
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Функция для анимации элементов при прокрутке
    function animateSections() {
        const sections = document.querySelectorAll('.animated-section');
        sections.forEach((section) => {
            if (isElementInViewport(section)) {
                section.classList.add('fade-in');
            }
        });
    }

    // Анимация плавного появления элементов при загрузке страницы
    const sections = document.querySelectorAll('.animated-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Анимация при прокрутке
    window.addEventListener('scroll', animateSections);

    // Анимация изображений
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    imagePlaceholders.forEach((placeholder) => {
        placeholder.addEventListener('mouseenter', () => {
            placeholder.classList.add('image-hover');
        });
        placeholder.addEventListener('mouseleave', () => {
            placeholder.classList.remove('image-hover');
        });
    });

    // Параллакс-эффект
    window.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach((element) => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(window.pageYOffset * speed);
            element.style.backgroundPosition = `50% ${yPos}px`;
        });
    });

    // Анимация счетчиков
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 секунды
        const step = target / (duration / 16); // 16ms - примерное время между кадрами
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            element.textContent = Math.round(current);
            if (current >= target) {
                clearInterval(timer);
                element.textContent = target;
            }
        }, 16);
    }

    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
        if (isElementInViewport(counter)) {
            animateCounter(counter);
        }
    });

    // Эффект печатающегося текста
    function typeWriter(element) {
        const text = element.getAttribute('data-text');
        let i = 0;
        const speed = 50; // скорость печати (мс)

        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }

        typing();
    }

    const typingElements = document.querySelectorAll('.typing-effect');
    typingElements.forEach((element) => {
        if (isElementInViewport(element)) {
            typeWriter(element);
        }
    });

    // Плавное появление элементов с разных сторон
    const fadeLeftElements = document.querySelectorAll('.fade-left');
    const fadeRightElements = document.querySelectorAll('.fade-right');

    function fadeElements() {
        fadeLeftElements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });

        fadeRightElements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', fadeElements);
    fadeElements(); // Вызываем функцию сразу, чтобы проверить видимые элементы при загрузке

    // Анимация прогресс-бара
    const progressBars = document.querySelectorAll('.progress-bar');

    function animateProgressBars() {
        progressBars.forEach((bar) => {
            if (isElementInViewport(bar)) {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
            }
        });
    }

    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars(); // Вызываем функцию сразу при загрузке
});