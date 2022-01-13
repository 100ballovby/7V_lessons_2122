function say_hello(name) {  // <- определение функции
    let msg = 'Hello, ' + name + '!'  // <- тело функции
    return msg // <- возврат значения
}

// сохраняю результат работы функции в переменную
let greet = say_hello('Demid'); // <- вызов функции
console.log(greet); // вывожу результат



