// Задание 1

let arrNums = [1, 2, 3, 4, 5,];

for (let i = 0; i < arrNums.length; i++){
    document.write(arrNums[i]);
};

//Задание 2

let arrNums1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arrNums1.length; i++){
    if (arrNums1[i] < 0){
    console.log(arrNums1[i]);
    };
};

// Задание 3

let arrNums2 = [];
let result = 0;

for (let i = 23; i <= 57; i++){
    arrNums2.push(i);
};
console.log(arrNums2);

for (let i = 0; i < arrNums2.length; i++){
    result += arrNums2[i]
};
console.log(result)

// Задание 4 

let arrStrNums = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i < arrStrNums.length; i++){
    if (arrStrNums[i].startsWith('1') || arrStrNums[i].startsWith('2')) {
    console.log(arrStrNums[i] = +arrStrNums[i])    
    };
};


// Задание 5

let week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < week.length; i++){
    if (i < week.length-2) {
    document.write('<br />' + week[i]); }
    else {
    document.write('<br />' + '<b>' + week[i] + '</b> ');
    }
};

// Задание 6 


let arr = new Array (2 * 2);
console.log(arr);
arr.push ('Слива');
console.log(arr.length - 1);

// Задание 7 

let promptNumbs = []; // создаем массив // есть

for(let i = 0; i < Infinity; i++) {

    promptNumbs[i] = prompt('Введите чилсо');    // Заполняем массив есьть

    if(promptNumbs[i] === null) { // если  нажимаем "Отмена"
        alert('Введите чилсо или оставте поле пустым');
        continue;
    }
    if(promptNumbs[i] === NaN) { // если  нажимаем "Отмена"
        alert('Введите чилсо или оставте поле пустым');
        continue;
    }
    if(promptNumbs[i] === '') { // если  имя не введено
        break; 
    }
    promptNumbs[i] = +promptNumbs[i];
    promptNumbs.sort(function(a, b) {
        return a - b;
      });
}
console.log(promptNumbs); // Выводим массив целиком}


// Задание 8 

/*Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
используя цикл while и метод reverse.*/


// Задание 9 

let arrStrNum = [5, 9, 21, , , 9, 78, , , , 6, ];

for (let i = 0; i < arrStrNum.length; i++){
    if (arrStrNum[i] == undefined){
        console.log(arrStrNum[i]);
        };
};

// Задание 10 

/*Найдите сумму элементов массива между двумя нулями (первым и последним нулями
в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
[1,8,0,13,76,8,7,0,22,0,2,3,2].*/


