async function loadNews(category) {
    const apiKey = '9a5f98498f5142cebfbb692a17560ab5'; // Вставьте сюда ваш ключ API от NewsAPI или CryptoPanic
    const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    displayNews(data.articles);
}

function displayNews(articles) {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = ''; // Очищаем список перед добавлением новых новостей

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || 'Нет описания'}</p>
            <a href="${article.url}" target="_blank">Читать далее</a>
        `;
        newsList.appendChild(newsItem);
    });
}

// Опционально: Telegram Web App API для взаимодействия с ботом
if (window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.expand(); // Развернуть приложение на весь экран
}
