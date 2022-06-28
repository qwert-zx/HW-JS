// Задание 1 

let i = 1;
while (i <=50) {
    console.log(i);
    i++;
}

i = 35;
while (i >= 8){
    console.log(i);
    i--;
}

//задание 2 

i = 89;
while (i >= 8){
    document.write(i + '<br/>');
    i--;
}

// Задание 3

let summ = 0;
for (i = 0; i < 100; i++, summ += i);
console.log(summ);

// Задание 4
//Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
//(1+2+3).

for (i = 1, summ = 0; i <= 5; i++){
    console.log(summ += i);
};

// Задание 5 
// Выведите чётные числа от 8 до 56. Решить задание через while и for.

i = 8;
while (i <= 56){
    if (i % 2 == 0) console.log(i);
    i++;
}

for (i = 8; i <= 56; i++){
    if (i % 2 == 0) console.log(i);
    i++;
}

// Задание 6
//Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде: 2*2 = 4

for (let a = 2; a <= 10; a++) {
    document.write(` ... <br/>`);
    for (let b = 1; b <=10; b++) {
        let c = a * b;
        document.write(a + ' * ' + b + ' = ' + c + '<br/>');
    }
}

// Задание 7 
//Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
//меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
//для этого (итерация - это проход цикла), и запишите его в переменную num.


let n = 1000;
let num = 0;
i = 0;
for (i = 0; n > 50; num++, n /= 2) {
}
console.log(num - 1);


// Задание 8 

summ = 0;
i = 0;
for (let number; number != 0 && number != ' ';) {
    number = prompt ('Введите число');
    if (isNaN(number)){
        alert('Ввели не число');
        continue;
    }
    if (number != 0){
        i++;
    }
    number = +number;
    summ += number;
}
console.log(summ);
console.log(summ / i);

// Задание 9 

let strNumber = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 368 57";

let minNumber;
let maxNumber;
number = '';
i = 0;
for (; i < strNumber.length; i++) {
    if (strNumber[i] != ' ') {
        number += strNumber[i];
        console.log (number);
        number = +number;
        if (i != strNumber.length-1)
        continue;
    } 
        if (minNumber == undefined) minNumber = number;
        if (maxNumber == undefined) maxNumber = number;
        if (number > minNumber) minNumber = number;
        if (number < maxNumber) maxNumber = number;
        number = '';
    
}
console.log(minNumber, maxNumber);

// Задание 10 


let z = 569;
let q = 0;
let x = 0;
z = String(z)

for (; q < z.length; q++){
    console.log(z[q]);
    x += +z[q];
};
console.log(q);
console.log(x);

for (; q < z.length, q >= 0; q--){
    console.log(z[q]);
};
