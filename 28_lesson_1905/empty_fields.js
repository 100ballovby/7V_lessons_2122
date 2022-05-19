let form = document.querySelector('.form-valid');
let btn = document.querySelector('#validate-btn');

/* Проверим все поля на пустоту */
let fields = form.querySelectorAll('.field');
// querySelectorAll - находит все элементы с таким селектором и помещает их в массив
form.addEventListener('submit', function(event) {
    event.preventDefault();  // не давать форме перезагружаться после отправки

    for (let i = 0; i < fields.length; i++) {  // просматриваю каждое поле
        if (fields[i].value === '') {
            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerText = 'Не может быть пустым!'
            form[i].parentElement.insertBefore(error, fields[i])
        }
    }
})