const news = [
    {
        title: "ЧТО ЗА НОВОЕ КАФЕ СКОРО ПОЯВИТСЯ В ГОРАДАХ РУДРЕЙНА?",
        content: "Создатели био мёда ну или владельцы провинций таких как Хантеры И Надзератели официально объявили что скоро откроется новое кафе AdAstra. Больше к сожалению мы не чего не знаем но надеемся что это будет что то великолепное как БИО МЁДА а сейчас будет реклама борсук Евгений...",
        videoUrl: "https://www.youtube.com/embed/fC9ACxAE7As?si=-s_e6B_KHcINDkKY"
    },
    {
        title: "БиоМёд!",
        content: "Новости рудрейна главы хантеров и надзирателей вновь вернулись с биомёдом они обещают множество многих сладостей добавить в ассортимент!",
        videoUrl: "https://www.youtube.com/embed/Hwybp38GnZw"
    }
];

function createNews(newsItem) {
    const newsContainer = document.getElementById('news-container');

    const newsElement = document.createElement('div');
    newsElement.classList.add('news-item');

    const titleElement = document.createElement('h2');
    titleElement.textContent = newsItem.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = newsItem.content;

    newsElement.appendChild(titleElement);
    newsElement.appendChild(contentElement);

    // Если есть видео, добавляем его
    if (newsItem.videoUrl) {
        const iframe = document.createElement('iframe');
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = newsItem.videoUrl;
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        newsElement.appendChild(iframe);
    }

    newsContainer.appendChild(newsElement);
}

// Добавляем все новости
news.forEach(createNews);
