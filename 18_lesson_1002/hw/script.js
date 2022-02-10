let list = [
    {
        text: 'Create JS function',
        status: true
    },
    {
        text: 'Read the docs',
        status: false
    },
    {
        text: 'Make HTML template',
        status: true
    },
    {
        text: 'Troubleshooting',
        status: false
    },
    {
        text: 'Make an live demo prototype',
        status: true
    },
    {
        text: 'Refactor JS function',
        status: true
    },
    {
        text: 'Get money',
        status: false
    },
]

function create_list(array) {
    let ul = document.createElement('ul'); // создаю список на странице

    for (let i = 0; i < array.length; i++) {  // повторить {длина списка} раз
        let li = document.createElement('li');  // создать элемент списка
        li.innerHTML = array[i]['text'];  // добавить в элемент списка текст из ключа text
        if (array[i]['status']) {  // если в ключе status - true
            li.classList.add('done');  // добавить элементу списка класс done
        }

        ul.appendChild(li);  // добавить элемент списка в список
    }
    document.body.appendChild(ul);  // добавить в body список
}

create_list(list);
