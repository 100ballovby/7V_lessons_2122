function one_to_ten() {
    let numbers = '';
    for (let i = 1; i <= 10; i++) {
        numbers += (i ** 2) + ', ';
    }
    let ans = document.querySelector('#t1');
    ans.innerHTML = numbers;
}

let num_array = [];
for (let i = 0; i < 15; i++) { // 15 чисел
    num_array.push(Math.round(Math.random() * 50))  // каждое число 0-50
}
let h2 = document.querySelector('#array');
h2.innerHTML = String(num_array);

function find_even(array) {
    let numbers = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numbers += array[i] + ', ';
        }
    }
    let ans = document.querySelector('#t2');
    ans.innerHTML = numbers;
}

