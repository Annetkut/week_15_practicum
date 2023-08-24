//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i >= 1; --i) {
    console.log(i);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
/*for (let multiplier = 1; multiplier <= 10; multiplier++) {
  for (let multiplicand = 1; multiplicand <= 5; multiplicand++) {
    const result = multiplier * multiplicand;
    console.log(`${multiplier} * ${multiplicand} = ${result}`);
  }
}*/
for (let i = 1; i <= 10; i++) {
    const result = i * 5;
    console.log(`${i} * 5 = ${result}`);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sumNumbers = 0;
for (let i = 0; i < array.length; i++) {
    sumNumbers += numbers[i];
}
console.log('Сумма:', sumNumbers);
//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i] + " - прекрасное животное");
}

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
/*for (let symbol of str) {
    console.log(symbol);
  }*/

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let symbol of str) {
    console.log(symbol);
}
//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
for (i = 0; i < sentences.length; i++) {
    const sentence = sentences[i].split(" ");
    for (let j = 0; j < sentence.length; j++) {
        // Удаляем знаки пунктуации из слова
        const wordWithoutPunctuation = sentence[j].toLocaleLowerCase().replace(/[^\w\s]/g, '');
        console.log(wordWithoutPunctuation);
    }
}
//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
//const numbers = [1, 2, 3, 4, 5];
let sumNumber2 = 0;
for (let number of numbers) {
    sumNumber2 += number;
}
console.log('Сумма:', sumNumber2);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (let i = 0; i < list.length; i++) {
    const word = list[i];
    console.log(word.length);
}

/*list.forEach((word) => {
    console.log(word.length);
});*/

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

const words = ['Hello', 'world', '!'];
for (let i = 0; i < words.length; i++) {
    const toLocaleLowerCase = words[i].toLocaleLowerCase();

    console.log(toLocaleLowerCase);
}

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
// Используем цикл for для прохода по каждому символу в строке greeting
for (let i = 0; i < greeting.length; i++) {
    // Получаем текущий символ из строки greeting и приводим его к нижнему регистру с помощью toLowerCase()
    const char = greeting[i].toLowerCase();

    // Проверяем, содержится ли текущий символ в массиве vowels с помощью метода includes()
    if (vowels.includes(char)) {
        // Если текущий символ является гласной, увеличиваем счетчик vowelCount на 1
        vowelCount++;
    }
}

// Выводим количество гласных букв в строке greeting в консоль
console.log(vowelCount);


//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words2 = ['Hello', 'world', '!'];
const combinedString = words2.join(' ');
console.log(combinedString);



//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let myNumber = 1;
while (myNumber <= 10) {
    console.log(myNumber);
    myNumber++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let myNumberNow = 10;
while (myNumberNow >= 1) {
    console.log(myNumberNow);
    myNumberNow--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
function checkAllPositive() {
    let i = 0; // Переменная i будет локальной только для функции checkAllPositive

    while (i < allNumbers.length) {
        if (allNumbers[i] < 0) {
            allPositive = false;
            break;
        }
        i += 1;
    }
}

checkAllPositive(); // Вызываем функцию для проверки

console.log(allPositive);


//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
/*i = 0
do {
    console.log(random[i]);
    i++;
} while (random[i] >= 0);*/

function printUntilNegative() {
    let i = 0;
    // Переменная i будет локальной только для функции printUntilNegative

    do {
        console.log(random[i]);
        i++;
    } while (random[i] >= 0);
}
// Вызываем функцию для выполнения цикла
printUntilNegative(); 

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let i2 = 1;
do {
    if (i2 % 3 !== 0) {
        console.log(i2);
    }
    i2++;
} while (i2 <= 100);


//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let i3 = 0;
let sumNumbersFromUser = 0;
do {
    const userInput = prompt('Введите несколько чисел, мы посчитаем их сумму,когда она будет больше 100:');
    const number = Number(userInput); // Преобразуем введенное значение в число
    sumNumbersFromUser += number;
    i3++;
} while (sumNumbersFromUser <= 100);
console.log('Сумма введенных чисел:', sumNumbersFromUser);
console.log('Количество введенных чисел:', i3);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
const myH4s = document.querySelectorAll('h4');
myH4s.forEach(function (h4) {
    h4.style.backgroundColor = 'blue';
});


//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
// Определяем функцию, которая генерирует случайное целое число от 0 до (длина алфавита - 1)
function getRandomInt() {
    return Math.floor(Math.random() * alphabet.length);
}
// Выполняем цикл, пока длина случайной строки меньше 6 символов
while (randomString.length < 6) {
    // Генерируем случайное число, которое будет являться индексом символа в алфавите
    const randomIndex = getRandomInt();
    // Получаем символ из алфавита по случайно сгенерированному индексу и добавляем его к случайной строке
    randomString += alphabet.charAt(randomIndex);
}

console.log(randomString);