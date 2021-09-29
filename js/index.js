fetch('https://api.pexels.com/v1/search?query=people', {
    method: 'GET',
    headers: {
        'Authorization': '563492ad6f917000010000011c621c9575fc4697a98bbd4dc0c635bb'
    }
}
)
    .then(response => response.json())
    .then(
        (data) => {
            console.log(data)
            let articlesWithImages = [];
            for (const article of data.data) {
                if (article.image) {
                    articlesWithImages.push(article);
                }    
                if (articlesWithImages.length === 21) {
                    break;
                }
            }
            document.querySelector('.top-article-content').innerHTML = `
                <a href=${articlesWithImages[0].url} target="_blank">
                    <img class="top-article-img" src=${articlesWithImages[0].image}>
                    <p class="top-article-img-title">${articlesWithImages[0].title}</p>
                </a>
            `
            document.querySelector('.top-video-content').innerHTML = `
                <a href=${articlesWithImages[1].url} target="_blank">
                    <img class="top-video-img" src=${articlesWithImages[1].image}>
                    <p class="top-video-img-title">${articlesWithImages[1].title}</p>
                </a>
            `
            let arrayIndex = 2;
            for (const element of document.getElementsByClassName('top-row-item')) {
                element.innerHTML = `
                    <a href=${articlesWithImages[arrayIndex].url} target="_blank">
                        <img class="bottom-section-news-article-img top-row-item-img" src=${articlesWithImages[arrayIndex].image}>
                        <p class="bottom-section-news-article-text">${articlesWithImages[arrayIndex].title}</p>
                    </a>
                `
                arrayIndex += 1;
            }
            for (const element of document.getElementsByClassName('bottom-row-item')) {
                element.innerHTML = `
                    <a href=${articlesWithImages[arrayIndex].url} target="_blank">
                        <img class="bottom-section-news-article-img top-row-item-img" src=${articlesWithImages[arrayIndex].image}>
                        <p class="bottom-section-news-article-text">${articlesWithImages[arrayIndex].title}</p>
                    </a>
                    `
                arrayIndex += 1;
            }
            for (const element of document.getElementsByClassName('latest-news-item')) {
                element.innerHTML = `
                    <a class="latest-news-link-title" href=${articlesWithImages[arrayIndex].url}>${articlesWithImages[arrayIndex].title}</a>
                `
                arrayIndex += 1;
            }
        }
    )