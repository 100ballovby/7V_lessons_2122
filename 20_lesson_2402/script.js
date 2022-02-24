function insert_link() {
    let link = prompt('Введите ссылку', '');
    let a = document.querySelector('.js-link');
    a.href = link;  // забираю ссылку из prompt и вставляю ее в href
    a.innerHTML = 'Ссылка';  // вставляю текст между <a> и </a>
}

function insert_image() {
    let img_link = prompt('Введите ссылку на картинку', '');
    let img = document.querySelector('.image');
    img.src = img_link;
}


