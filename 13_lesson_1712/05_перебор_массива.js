let usersByDay = [812, 3672, 1200, 342, 54321, 453, 1256, 712];

// чтобы перебрать массив, используем цикл. Индексы элементов будем брать из i
for (let i = 0; i < usersByDay.length; i += 1) {
    console.log('Итерация ' + i + ' Элемент: ' + usersByDay[i]);
}

// перебор массива от большего к меньшему
let index = 7;
while (index > usersByDay.length) {
    console.log('Итерация ' + index + ' Элемент: ' + usersByDay[index]);
    index -= 1;
}