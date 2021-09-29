function addLoaderHtml() {
    document.querySelector('.top-article-content').innerHTML = `<img class='loading-gif' src='./images/Eclipse-1s-200px.svg'>`;
    document.querySelector('.top-video-content').innerHTML = `<img class='loading-gif' src='./images/Eclipse-1s-200px.svg'>`;
    for (const element of document.getElementsByClassName('top-row-item')) {
        element.innerHTML = `<img class='loading-gif' src='./images/Eclipse-1s-200px.svg'>`;
    }
    for (const element of document.getElementsByClassName('bottom-row-item')) {
        element.innerHTML = `<img class='loading-gif' src='./images/Eclipse-1s-200px.svg'>`;
    }
    for (const element of document.getElementsByClassName('latest-news-item')) {
        element.innerHTML = `<img class='loading-gif' src='./images/Eclipse-1s-200px.svg'>`;
    }
}

async function getQuote() {
    const response = await fetch('https://api.kanye.rest/');
    const data = response.json();
    return data;
}

async function getPhotos(topic) {
    addLoaderHtml();
    const response = await fetch(`https://api.pexels.com/v1/search?query=${topic}&per_page=21`, {
            method: 'GET', headers: {'Authorization': '563492ad6f917000010000011c621c9575fc4697a98bbd4dc0c635bb'}
    });
    const data = response.json();
    return data;
}

function setPhotosHtml(photosData) {   
    document.querySelector('.top-article-content').innerHTML = `
        <a href=${photosData.photos[0].url} target="_blank">
            <img class="top-article-img" src=${photosData.photos[0].src.medium}>
        </a>
    `
    getQuote().then(
        (data) => {
            document.querySelector('.top-article-content').innerHTML += `<p class="top-article-img-title">${data.quote}</p>`
        }
    )
    let arrayIndex = 2;
    for (const element of document.getElementsByClassName('top-row-item')) {
        element.innerHTML = `
            <a href=${photosData.photos[arrayIndex].url} target="_blank">
                <img class="bottom-section-news-article-img top-row-item-img" src=${photosData.photos[arrayIndex].src.medium}>
            </a>
        `
        getQuote().then(
            (data) => {
                element.innerHTML += `<p class="bottom-section-news-article-text">${data.quote}</p>`
            }
        )
        arrayIndex += 1;
    }
    for (const element of document.getElementsByClassName('bottom-row-item')) {
        element.innerHTML = `
            <a href=${photosData.photos[arrayIndex].url} target="_blank">
                <img class="bottom-section-news-article-img top-row-item-img" src=${photosData.photos[arrayIndex].src.medium}>
            </a>
            `
        getQuote().then(
            (data) => {
                element.innerHTML += `<p class="bottom-section-news-article-text">${data.quote}</p>`
            }
        )
        arrayIndex += 1;
    }
    for (const element of document.getElementsByClassName('latest-news-item')) {
        element.innerHTML = `
            <a class="latest-news-link-title" target="_blank" href=${photosData.photos[arrayIndex].url}></a>
        `
        getQuote().then(
            (data) => {element.querySelector('.latest-news-link-title').textContent = data.quote}
        )
        arrayIndex += 1;
    }

}

async function getVideo(topic) {
    const response = await fetch(`https://api.pexels.com/videos/search?query=${topic}&per_page=1'`, {
        method: 'GET', headers: {'Authorization': '563492ad6f917000010000011c621c9575fc4697a98bbd4dc0c635bb'}
    });
    const data = await response.json();
    return data
}

function setVideoHtml(videoData) {
    document.querySelector('.top-video-content').innerHTML = `
        <a href=${videoData.videos[0].url} target="_blank">
            <img class="top-video-img" src=${videoData.videos[0].image}>
        </a>
    `
    getQuote().then(
        (data) => {
            document.querySelector('.top-video-content').innerHTML += `<p class="top-video-img-title">${data.quote}</p>`
        }
    )
}


function setInitialValues() {
    const inputPlaceholder = document.getElementById('topic-input').getAttribute('placeholder');
    getPhotos(inputPlaceholder).then(data => setPhotosHtml(data));
    getVideo(inputPlaceholder).then(data => setVideoHtml(data));
}

setInitialValues();

document.getElementById('topic-input').addEventListener('keyup', function(event) {
    if (event.key == 'Enter' || event.keyCode === 3) {
        getPhotos(event.target.value).then(data => setPhotosHtml(data));
        getVideo(event.target.value).then(data => setVideoHtml(data));
    }
})