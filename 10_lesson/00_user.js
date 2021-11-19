/*
1) alert(message) <- выдает сообщение в окошке
2) prompt(message, default) <- ввод с клавиатуры
3) confirm(message) <- подтверждение действия
*/
alert('2 + 2 = ' + (2 + 2));

let age = prompt('Сколько тебе лет?', '');
/* напишите программу, которая спрашивает,
как зовут пользователя и здоровается
с ним по имени */
let name = prompt('Как тебя зовут?', '');
alert('Hello, ' + name + '!');

let boss = confirm('Ты босс?');
alert(boss + ' босс');