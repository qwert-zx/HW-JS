//work1

let name = prompt ('Ваше Имя');
let age = prompt ('Сколько лет')
let city = prompt ('Ваш город'); 
let phone = prompt ('Номер телефона'); 
let email = prompt ('Адеос электронной почты');
let company = prompt ('Место работы');
 
console.log('Меня зовут ' + name +'.' + ' Мне' + age + " лет." + ' Я проживаю в городе ' + city + ' и работаю в компании ' + company + '.' + " Мои контактные данные: " + phone + ', ' + email);

//work2

let ybirtday = (2022 - age);
console.log (name + ' Родился в ' + ybirtday + ' году. ');

//work3 

let str = '123321';
let str1 = (Number(str[0]) + Number(str[1] + Number(str[2]))); 
let str2 = (Number(str[3]) + Number(str[4] + Number(str[5])));
let strCompare = (str1 == str2) ? 'Да' : 'Нет';
console.log (strCompare);

//work4

let a = 7;
let aCompare = (a > 0) ? 'Верно' : 'Неверно';
console.log (aCompare);

//work5

a = 10;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log((a + b) > 1 ? (a / b)*(a / b) : "")

//work6

if ((a > 5 && a < 11) || (b >= 6 && b < 14)){
console.log('Верно');
} else {
console.log('Неверно');
}

//work7

let n = 14;

if ( n < 15)
console.log ('Первая четверть часа');
if (n >= 15 && n < 30)
console.log ('Вторая четверть часа');
if (n >= 30 && n < 45)
console.log ('Третья четверть часа');
if (n >= 45 && n < 59)
console.log ('Четвертая четверть часа');

//work8 

let day = 7;

if (day <= 10)
console.log ('Первая декада месяца');
if (day > 10 && n <= 20)
console.log ('Вторая декада месяца');
if (day > 20 && n <= 31)
console.log ('Третья декада месяца');

//work9

let days = 12;

let yers = (days / 365);
console.log(yers);
if (yers < 1)
console.log ('Меньше года');
if (yers > 1)
console.log ('Больше года');

let months = (days / 31);
console.log(months);
if (months < 1)
console.log ('Меньше месяца');
if (months > 1)
console.log ('Больше месяца');

let weeks = (days / 7);
console.log(weeks);
if (weeks < 1)
console.log ('Меньше недели');
if (weeks > 1)
console.log ('Больше недели');

let hours = (days * 24);
console.log(hours);
let minutes = (hours * 60);
console.log(minutes);
let seconds = (minutes * 60);
console.log(seconds);

//work10
 
let m = (day / 31);

if (m < 1 && m > 0) m = 1;
if (m < 2 && m > 1) m = 2;
if (m < 3 && m > 2) m = 3;
if (m < 4 && m > 3) m = 4;
if (m < 5 && m > 4) m = 5;
if (m < 6 && m > 5) m = 6;
if (m < 7 && m > 6) m = 7;
if (m < 8 && m > 7) m = 8;
if (m < 9 && m > 8) m = 9;
if (m < 10 && m > 9) m = 10;
if (m < 11 && m > 10) m = 11;
if (m < 12 && m > 11) m = 12;

switch (m)  {
    case 1:
        console.log ("Зима")
    break;
    case 2:
        console.log ("Зима")
    break;
    case 3:
        console.log ("Весна")
    break;
    case 4:
        console.log ("Весна")
    break;
    case 5:
        console.log ("Весна")
    break;
    case 6:
        console.log ("Лето")
    break;
    case 7:
        console.log ("Лето")
    break;
    case 8:
        console.log ("Лето")
    break;
    case 9:
        console.log ("Осень")
    break;
    case 10:
        console.log ("Осень")
    break;
    case 11:
        console.log ("Осень")
    break;
    case 12:
        console.log ("Зима")
    break;

}
