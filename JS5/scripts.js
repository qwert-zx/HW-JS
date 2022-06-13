// Задание 1
/* Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром. */


function sd (a , b , c){
    return ((a - b) / c);
};
console.log(sd (10 , 2 , 4));

// Задание 2
/* Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром. */


function cubeSqare (a) {
   console.log((a * a) + ' Квадрат');
   console.log((a * a * a) + ' Куб');
};
cubeSqare (2);

// Задание 3
/* Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b. */

function min (a , b) {
    if (a < b) { 
        return a + ' Меньшее значение';    
    } else {
        return b + ' Меньшее значение';
    };
};
console.log(min(10 , 5));

function max (a , b) {
    if (a > b) { 
        return a + ' Большее значени';    
    } else {
        return b + ' Большее значени';;
    };
};
console.log(max(10 , 5));

// Задание 4
/* Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив. */

let arr = [];
function showArr (of , to) {
    viewArr();
    for (let i = of; i <= to; i++){
       arr.push(i);
    };
    return arr;
    function viewArr (){
        console.log(arr)
    };   
};
console.log(showArr(3,15));

// Задание 5
/* Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false. */


function isEven (a) {
    if (a % 2 == 0){
        return true;
    } else {
        return false;
    };
};
console.log(isEven(8));

// Задание 6
/* Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи. */

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnIsEven () {
    let numArr1 = [];
    for (let i = 0; i < numArr.length; i++){
        if (isEven(numArr[i]) == true) {
            numArr1.push(numArr[i]);
        }
    };
    return newArr = numArr1;
};
returnIsEven (numArr);
console.log(newArr);


// Задаине 8 
/* Напишите ф-цию, которая рисует равнобедренный треугольник из
звездочек:

*
***
*****
*******
*********

Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
цию, но которая выведет перевернутый треугольник. */


function pyramid (height) {
    let line = '';
    for (let i = 1; i <= height; i++){
        for(let j = 1; j <= (height - i); j++){
            line += ' ';
        };
        for (let j = 1; j <= ((i * 2) - 1); j++){
            line += '*';
        };
        console.log(line);
        line = '';
    };
};

pyramid(5)

// Задание 9
/*Напишите ф-цию, которая возвращает массив заполненный числами
Фибоначи от 0 до 1000. */

function fibonacci () {

    let fibArr = [0 , 1];
    for (let i = 2; i < 1000; i++){
        fibArr.push(fibArr[i] = (fibArr[i - 2] + fibArr[i - 1]));
    };
    return fibArr;
};

console.log(fibonacci());

// Задание 10
/* Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
опять сложите его цифры. И так, пока сумма не станет однозначным числом
(9 и менее). Исп. Рекурсию. */

function recNum(num) {
	if (num < 9) {
		return num;
	}
	num = String(num);
	let sum = 0;
	for (i = 0; i < num.length; i++) {
		sum += +num[i];
	}
	return recNum(sum);
}

console.log(recNum(3257));


