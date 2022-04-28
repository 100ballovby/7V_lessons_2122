function show_password() {
    // функция будет обрабатывать нажатие на кнопку с иконкой глаза
    let input = document.getElementById('password');
    let img = document.getElementById('eye');
    // нахожу поле с паролем и картинку с глазом на странице по id

    if (input.type === 'password') {  // если тип поля - пароль
        input.type = 'text';  // изменить тип на текст
        img.src = 'Eye Disabled.png';  // поменять картинку
    } else {  // если тип поля - текст
        input.type = 'password';
        img.src = 'Eye.png';
    }
}


