let n = Number(prompt('Введите число: '));
let factorial = 1;

for (let i = 1; i <= n; i += 1) { // от 1 до n включительно
    factorial *= i;
}

alert(n + '! = ' + factorial);

/*
n = 6;
factorial *= 1;  <- 1
factorial *= 2;  <- 2
factorial *= 3;  <- 6
factorial *= 4;  <- 24
factorial *= 5;  <- 120
factorial *= 6;  <- 720
* */
