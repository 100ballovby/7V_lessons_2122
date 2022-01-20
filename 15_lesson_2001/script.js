function change_bg() {
    // заменим цвет фона страницы
    document.body.style.background = '#76fbe3';
    // через 3 секунды вернем все обратно
    setTimeout(() => document.body.style.background = '', 3000);
}

function light_up(tag, color) {
    let elem = document.querySelector(tag); // нахожу элемент на странице по тегу
    elem.style.background = color;
}

function add_element() {
    let div = document.createElement('div');
    // createElement(selector) - создает элемент с названием selector

    div.classList.add('alert');  // добавить класс элементу

    div.innerHTML = '<b>Молодец! Справился!</b>';
    // добавляю HTML-код в блок

    let cont = document.querySelector('.container');
    cont.appendChild(div);  // добавляю в контейнер новый элемент
}
