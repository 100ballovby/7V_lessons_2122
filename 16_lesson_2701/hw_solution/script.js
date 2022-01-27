function check_number(elem) {
    let num = prompt('Введите число от 1 до 10', '');
    let div = document.createElement('div');
    let cls;
    let text;

    if (num >= 1 && num <= 10) {
        cls = 'alert-success';
        text = 'Молодец! Спасибо!';
    } else {
        cls = 'alert-danger';
        text = 'Не молодец!';
    }

    div.classList.add(cls);  // то, что сгенерируется в переменной cls, будет записано в список классов элемента div
    div.innerHTML = text;  // добавил текст в div

    let parent = document.querySelector(elem);  // нахожу родительский элемент

    parent.appendChild(div);  // добавляю созданный элемент на страницу с родителем
}


