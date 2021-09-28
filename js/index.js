fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6f0490658bca4b8494083bdb84d8b941&pageSize=40')
    .then(response => response.json())
    .then(
        (data) => {
            document.querySelector('.top-article-content').innerHTML = `
                <a href=${data.articles[1].url} target="_blank">
                    <img class="top-article-img" src=${data.articles[1].urlToImage}>
                    <p class="top-article-img-title">${data.articles[1].title}</p>
                </a>
            `
            document.querySelector('.top-video-content').innerHTML = `
                <a href=${data.articles[2].url} target="_blank">
                    <img class="top-video-img" src=${data.articles[2].urlToImage}>
                    <p class="top-video-img-title">${data.articles[2].title}</p>
                </a>
            `
            let arrayIndex = 3;
            for (const element of document.getElementsByClassName('top-row-item')) {
                element.innerHTML = `
                    <a href=${data.articles[arrayIndex].url} target="_blank">
                        <img class="bottom-section-news-article-img top-row-item-img" src=${data.articles[arrayIndex].urlToImage}>
                        <p class="bottom-section-news-article-text">${data.articles[arrayIndex].title}</p>
                    </a>
                `
                arrayIndex += 1;
            }
            for (const element of document.getElementsByClassName('bottom-row-item')) {
                element.innerHTML = `
                    <a href=${data.articles[arrayIndex].url} target="_blank">
                        <img class="bottom-section-news-article-img top-row-item-img" src=${data.articles[arrayIndex].urlToImage}>
                        <p class="bottom-section-news-article-text">${data.articles[arrayIndex].title}</p>
                    </a>
                    `
                arrayIndex += 1;
            }
            for (const element of document.getElementsByClassName('latest-news-item')) {
                element.innerHTML = `
                    <a class="latest-news-link-title" href=${data.articles[arrayIndex].url}>${data.articles[arrayIndex].title}</a>
                `
                arrayIndex += 1;
            }
        }
    )