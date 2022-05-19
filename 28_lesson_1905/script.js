let form = document.querySelector('.form-valid');
let btn = document.querySelector('#validate-btn');

/* Подключим событие submit. Если нажать на Enter
в любом поле, форма отправится */
form.addEventListener('submit', function() {
    alert('Форма отправлена!')
}
)