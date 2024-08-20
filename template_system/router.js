// Функция для загрузки контента
function loadContent(page) {
    const contentUrl = page + '.html';
    fetch(contentUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
            // Обновляем URL без перезагрузки страницы
            history.pushState(null, '', page);
        })
        .catch(error => console.error('Error loading content:', error));
}

// Обработка начальной загрузки и возврата по истории
window.addEventListener('load', () => {
    const initialPage = window.location.pathname.split('/').pop() || 'home';
    loadContent(initialPage);
});

window.addEventListener('popstate', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'home';
    loadContent(currentPage);
});