function change_color(selector, color='red') {
    let elem = document.querySelector(selector);
    // ^ нахожу на странице элемент с определенным селектором (тегом) и сохраняю его в переменную
    elem.style.color = color;
    // ^ заменяю цвет элемента на тот, что передан в параметре color
}