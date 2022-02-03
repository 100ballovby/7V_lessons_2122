let user = {
    name: 'John',
    surname: 'Doe',
    city: 'Warsaw',
    phone: '+1 495 555-0100'
};

console.log(user);  // вывод объекта (всего)
console.log(user.name);  // вывожу значение ключа name
console.log(user['surname']); // вывожу значение ключа surname

// перебор объектов через цикл
for (let key in user) {  // для каждого ключа в объекте user
    console.log('Ключ: ' + key);
    console.log('Значение: ' + user[key]);
}

let users = [
    {
        name: 'John',
        surname: 'Doe',
        city: 'Warsaw',
        phone: '+1 495 555-0100'
    },
    {
        name: 'Mary',
        surname: 'Doe',
        city: 'Washington',
        phone: '+1 495 777-0122'
    },
    {
        name: 'Julia',
        surname: 'Doe',
        city: 'Moscow',
        phone: '+7 (495) 111 22 33'
    }
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]['name']);
}
