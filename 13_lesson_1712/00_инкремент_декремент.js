/* Инкременты:
+= <- сложение с присваиванием
*= <- умножение с присваиванием
**= <- возведение в степень с присваиванием

Декременты:
-= <- разность с присваиванием
/= <- деление с присваиванием
%= <- остаток от деления с присваиванием
*/
let x = 2;
x *= 6;  // переписал значение переменной -> x = 12
console.log(x);

x += 7;  // переписал -> 19
console.log(x);

x -= 3;  // переписал -> 16
console.log(x);

x /= 8;  // переписал -> 2
console.log(x);

x **= 5;  // переписал -> 32
console.log(x);

x %= 15;  // переписал -> 2
console.log(x);
