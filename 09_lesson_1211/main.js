console.log('Hello, world!');

console.log(5 + 12);
console.log(5 * 10);
console.log(10 / 3);
console.log(6 - 2);
console.log(2 ** 5);

console.log('2' + 1);  // 21, т.к. 2 - это строка, JS автоматически превратит 1 в строку и просто поставит их рядом
console.log(5 + 7 + '3')  // 123. 5 и 7 складываются как числа и получается 12, а 12 + '3' = 123
console.log('6' - 4)  // - не работает со строчками, поэтому '6' автоматически преобразовалась в число
console.log('12' / 4)  // / не работает со строчками
console.log('5' * 3)  // * не работает со строчками

