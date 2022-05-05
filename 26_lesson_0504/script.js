function copy_color_code() {
    /* Получаю поле формы на странице */
    let input = document.getElementById('favcol');

    let color_code = input.value;  /* сохраняю код цвета в переменной */

    /* Копирую код цвета в буфер обмена */
    navigator.clipboard.writeText(color_code);
    /*
    navigator - общий класс управления функциями компьютера
    clipboard - буфер обмена
    writeText(Х) - пишет Х в буфер
    */
}

function paint() {
    /* нахожу на странице элементы по классам */
    let input = document.getElementById('color-input');
    let div = document.querySelector('.color-board');

    /* меняю background дива */
    div.style.borderColor = input.value;
    alert(input.value)
}