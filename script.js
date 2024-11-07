// Массив новостей
const news = [
    {
        title: "Текстовая новость 1",
        content: "Это пример текстовой новости. Здесь можно разместить информацию о текущих событиях.",
        videoUrl: ""
    },
    {
        title: "БиоМёд!",
        content: "Новости рудрейна глава хантеров и надзирателей снова переоткрывают биомёд с новой продукцией шоколад, мёд и многое другое!",
        videoUrl: "https://www.youtube.com/watch?v=Hwybp38GnZw"
    }
];

// Функция для создания новости
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
