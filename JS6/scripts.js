/* 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены. */

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g,'!'));

/* 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025. */

let date = new Date('2025-12-31'); 
console.log(date.toLocaleDateString().replace(/\./g,'/'));

/* 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice). */

let str1 = 'Я учу javascript!';
console.log(str1.substr(2,3));
console.log(str1.substring(6,16));
console.log(str1.slice(2,16));

/* 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

let arrNum = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arrNum.length; i++){
    sum += Math.pow(arrNum[i],3)
};
console.log(Math.sqrt(sum));

/* 5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1. */

const subsNum = function(a, b){
    return Math.abs(a - b);
};
let c = console.log(subsNum(3, 5));
c = console.log(subsNum(6, 1));

/* 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014). */

let dateNow = new Date();
const DateNow1 = function(time, date){
 return dateNow.toLocaleTimeString('ru') + ' ' + dateNow.toLocaleDateString('ru');
};
console.log(DateNow1(dateNow.toLocaleTimeString('en'), dateNow.toLocaleDateString('de')))


/* 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'. */

let str2 = 'aa aba abba abbba abca abea';
console.log(str2.match(/ab+a/g));

/* 8. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения. */


const regexpTell = function(tell){
    let chek = /^\+375 ?\(?(29|44|33|25|17)\)? ?[1-9][0-9]{2}[ -]?[0-9]{2}[ -]?[0-9]{2}$/gm;;
    if (chek.test(tell) === true) return alert('Правильный формат');
    alert ('Ввели неправильный формат');
};
regexpTell(tell = prompt('Ваш номер телефона', '+375291648917'));

/* 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.
Функция должна возвращать true или false. Используйте регулярные
выражения. */

const regexpEmail = function(tell){
    let chek = /^[a-z0-9]+[\.\-_]?[a-z0-9]+[\.\-_]?[a-z0-9]+@[a-z09]+[\.\-_]?[a-z09]+\.[a-z]{2,10}/gm;;
    if (chek.test(tell) === true) return alert('Правильный формат');
    alert ('Ввели неправильный формат');
};
regexpEmail(tell = prompt('Введите адрес элетронной почты', 'qwert_zx@gmail.ru'));

/* /* 10. Напишите ф-цию, которая из полного адреса с параметрами и без,
например: https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
доменного имени (https://tech.onliner.by), остальную часть адреса без
параметров (/2018/04/26/smart-do-200/), параметры
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
может и не быть каких-либо составляющих. Ф-ция должна возвращать
массив. */

let printLink = [];
const breakdownLink = function(link){
    return printLink.concat(link.match(/(https?:\/\/[a-z0-9]+(?:-|\.)?[a-z0-9]+\.[a-z]{2,10}\/?)/gmi), link.match(/\?[^\?\?\$#]+\/?/gmi), link.match(/#[a-z0-9]+/gmi));
};
console.log(breakdownLink(`https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3`));

