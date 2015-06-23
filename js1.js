function fib(n) {
    if ( n <= 1) return n;
    else {return (fib(n-1) + fib(n-2));}
}

function fibBenet(x) {
    var y, f;
    y = (1 + Math.sqrt(5))/2;
    f = Math.round( Math.pow(y,x)/ Math.sqrt(5));
    return f;
}

function randomInt(min,max){

    return Math.round( min + Math.random() * (max - min) );
}


// console.log(fib(55));

// console.log(fibBenet(55));

function ucFirst(str) {
    return  str.charAt(0).toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    if (~str.toLowerCase().indexOf('viagra') || ~str.toLowerCase().indexOf('xxx')) {return 'ups';}
    else return 'ok';
}

// console.log(checkSpam('buy ViAgRA now'));

function truncate(str, maxlength){
    if (str.length > maxlength) { return str.slice(0,maxlength-3) + '...';}
    else return str;
}

// console.log(truncate("Всем привет!", 20));
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

function extractCurrencyValue(str) {
    return  +str.slice(1);
}

// console.log(extractCurrencyValue("$120"));

var user = {};
user.name = 'Вася';
user['surname'] = 'Петров';
// console.log (user.name);
// console.log (user.surname);
user.name = 'Сергей';
// console.log (user.name);
delete user.name;
//console.log (user.name);


function isEmpty(obj) {

    for (key in obj) {return false;}
    return true;
}

var schedule = {};

//console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

//console.log( isEmpty(schedule) ); // false

"use strict";

function sumSal(obj){
    var sum =0;
    for (key in obj) {
        sum = sum + obj[key];
    }
    return sum;
}
var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

//console.log(sumSal(salaries));

for (key in salaries) {
    delete salaries[key];
}

//console.log(sumSal(salaries));

// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj){
    for (key in obj) {
        if (isNumeric(obj[key])) {obj[key] = obj[key]*2;}
    }
}

//multiplyNumeric(menu);

function showObj(obj) {
    for (key in obj) {
        console.log(key + ' : ' + obj[key]);
    }
}

//console.log(showObj(menu));
/*
 var time = {
 year: 2345,
 month: 11,
 day: 10,
 hour: 11,
 minute: 12,
 second: 13,
 microsecond: 123456
 }


 // ********************************** Массивы c числовыми индексами
 // 1 Получить последний элемент массива
 var arr = ['q','w','e'];
 console.log(arr[arr.length-1]);

 // 2 Добавить новый элемент в массив
 arr.push('r');
 console.log(arr);

 // 3 Создание массива
 var styles = ['Джаз', 'Блюз'];
 console.log(styles);
 styles.push('Рок-н-Ролл');
 console.log(styles);
 styles[styles.length-2] = 'Классика';
 console.log(styles);
 var first_st = styles.shift();
 console.log(first_st);
 styles.unshift('Рэп', 'Регги');
 console.log(styles);

 // 4 Получить случайное значение из массива
 function randomFloor(min, max) {
 return (min + Math.floor(Math.random() * (max + 1 - min)));
 }

 var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

 console.log(arr[randomFloor(1,arr.length-1)]);
 */


/*
 var i=0, n, arr = [], sum = 0;

 while ( 1 == 1  ) {
 n = prompt('Enter n: ','');// как это в webstorm реализовать?
 if (n == null && n == NaN && n == "") {break;}
 arr[i++] = +n;
 }

 for (i=0; i<arr.length; i++) { sum += arr[i];}

 console.log(sum);

 */
var i, arr = ["test", 2, 1.5, false];
function find (arr,val) {
    for (i=0;i<arr.length;i++){
        if (arr[i] === val) return i;
    }
    return -1;
}

/*
 console.log(find(arr, "test")); // 0
 console.log(find(arr, 2)); // 1
 console.log(find(arr, 1.5)); // 2
 console.log(find(arr, 0)); // -1
 */
var arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
    var arr_out = [];
    for (i=0; i< arr.length; i++) {
        if  (arr[i] >= a && arr[i] <= b) {arr_out.push(arr[i]);}

    }
    return arr_out;
}

var filtered = filterRange(arr, 3, 5);
// console.log(arr);
// console.log(filtered);

var arr = [];
for (i=2; i<=100; i++) {
    arr.push(i);
}
var arr1 = [];
for (var i=0;i<arr.length;i++){
    var diff, ct = 0;
    for (var j=0;j<arr.length;j++){
        diff = arr[i] % arr [j];
        if (diff == 0 && arr[i] != arr[j]) {ct ++;}

    }
    if (ct == 0) {arr1.push(arr[i]);}
}
//console.log(arr1);

function getMaxSubSum (arr) {
    var summi = 0, i, j;

    for (i=0;i<arr.length;i++) {
        var summj = 0;
        for (j=i; j<arr.length;j++){
            summj += arr[j];
            if (summj > summi){summi =summj;}
        }
    }
    return summi;
}
//var arr = [1, -2, 3, 4, -9, 6];
//console.log(getMaxSubSum(arr));

// ***************************** Массивы: методы ************************

// 1 Добавить класс в строку
var obj = {
    className: 'open menu'
}

function addClass(obj, cls) {
    var arr = obj.className.split(' ');
    if (arr.indexOf(cls) == -1) {arr.push(cls);} // нет вхождений - добавить
    obj.className = arr.join(' ');
}
/*
 addClass(obj, 'new'); // obj.className='open menu new'
 console.log(obj);
 addClass(obj, 'open'); // без изменений (класс уже существует)
 console.log(obj);
 addClass(obj, 'me'); // obj.className='open menu new me'
 console.log(obj);
 */

// 2 Перевести текст вида border-left-width в borderLeftWidth
function camelize(str){
    var result = '';
    for (i=0; i<str.length;i++){
        if (str[i] == '-'){result += str[i+1].toUpperCase(); i++;}
        else result += str[i];
    }
    console.log(result);
}
/*
 camelize("background-color"); // == 'backgroundColor';
 camelize("list-style-image"); //== 'listStyleImage';
 camelize("-webkit-transition"); // == 'WebkitTransition';
 */

// 3 Функция removeClass
var obj = {
    className:  'my menu menu joke'
};
function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    for(i=0; i<arr.length;i++){
        if (arr[i] == cls) {arr.splice(i,1); i--;}
    }
    return obj.className = arr.join(' ');
}

// console.log(removeClass(obj, 'menu')); // obj.className='menu'

// 4 Сортировать в обратном порядке
var arr = [5, 2, 1, -10, 8].sort(function(a,b){return a-b;});
//console.log(arr.reverse());

// 5 Фильтрация массива «на месте»
function filterRangeInPlace(arr, a, b) {
    for (i=0;i<arr.length;i++) {
        if (arr[i]<a || arr[i]>b) {arr.splice(i,1);i--;}
    }
}

arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
//console.log(arr);

// 6 Скопировать и отсортировать массив
var arr = ["HTML", "JavaScript", "CSS"];
var arr1 = [];
arr1 = arr.slice().sort();// ... ваш код ...

// console.log( arr1 ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений)

// Случайный порядок в массиве
var arr = [1, 2, 3, 4, 5];

function randomArrKey(){
    return randomInt(-arr.length,arr.length);
}

arr.sort(randomArrKey);
// console.log(arr); // элементы в случайном порядке, например [3,5,1,2,4]

// Сортировка объектов
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

function sortObj(objA, objB) {
    return objA.age - objB.age;
}

people.sort(sortObj);
//console.log(people);
/*
 for (i=0; i<people.length;i++){
 console.log(people[i].name);
 }
 */

// Вывести односвязный список
var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function printListRec(obj) {
    if (obj) {console.log(obj.value);
        printListRec(obj.next);}
}
// printListRec(list);

function printList(obj) {
    while (obj)
    {
        console.log(obj.value);
        obj=obj.next;
    }
}
//printList(list);

function printListRecReverse(obj){
    if (obj.next) { printListRecReverse(obj.next);}
    console.log(obj.value);

}
//printListRecReverse(list);
/*
 function printListReverse(obj) {
 var arr = [];
 while (obj)
 {
 arr.push(obj.value);
 obj=obj.next;
 }
 arr.sort(function(a,b){return -(a-b);});
 for (i=0;i<arr.length;i++) {
 console.log(arr[i]);
 }
 }
 // printListReverse(list);
 */
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
var arr1 = [];
arr1[0] = arr[0];
for (i=1;i<arr.length;i++) {
    var st1= arr[i].split('').sort(), ct =0; // в st1 загнали отсортированное по буквам из исходного массива
    // ищем в новом массиве st1
    for (j=0;j<arr1.length;j++){
        var st2= arr1[j].split('').sort(); // в st2 загоняем по очередное слова из нового массива
        if (st1.join().toLowerCase() == st2.join().toLowerCase()) {ct++;}

    }
    // если в новом масиве такого слова не было - кладем туда
    if (ct == 0) {arr1.push(arr[i]);}
}
//console.log(arr1);

// Оставить уникальные элементы массива
function unique(arr) {
    var obj = {};
    for (i=0;i<arr.length;i++){
        obj[arr[i]] = arr[i];
    }
    var arr1 = [];
    for (var key in obj) arr1.push(obj[key]);
    return arr1;
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];
//console.log( unique(strings) ); // кришна, харе, 8-()


// ***************************** Массив: перебирающие методы ************************

//Перепишите цикл через map
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}

//console.log( arrLength ); // 4,5,2,5
//console.log(  arr.map(function arrLengthMap(arr){return arr.length;}) );

// Массив частичных сумм
var arr = [-2,-1,0,1]; // [ 1, 2, 3, 4, 5];
function getSums(arr) {
    var  arr1 = [], arr2= [];
    for (i = 0; i < arr.length; i++) {
        arr1.push(arr[i]); //положили в arr1 i тый элемент из исходного массива
        arr2.push(arr1.reduce(function (prev, current) { return prev + current; })); // в arr2 положили сумму элементов из arr1
    }
    return arr2;
}

function getSums1(arr) {
    var  arr1 = [], summ;
    summ = arr.reduce(function (prev, current) { arr1.push(prev); return prev + current;});
    arr1.push(summ);
    return arr1;
}

// console.log(getSums1(arr));


// ************************************ Псевдомассив аргументов «arguments» *******************************

// Проверка на аргумент-undefined
function f(x) {
    if (arguments.length > 0) return 1;
    else return 0;
}

//console.log(f(undefined)); // 1
//console.log(f()); // 0

// Сумма аргументов
function sumArg(){
    var result =0;
    for (i=0;i<arguments.length; i++) {result += arguments[i];}
    return result;
}
/*
console.log(sumArg());
console.log(sumArg(1));
console.log(sumArg(1, 2));
console.log(sumArg(1, 2, 3));
console.log(sumArg(1, 2, 3, 4));
*/

// ************************************ Дата и Время *******************************

// Создайте дату
var dt = new Date (2012,01,20,3,12,0);
//console.log(dt.toString());

// Имя дня недели
var date = new Date(2012,0,3);  // 3 января 2012
function getWeekDay(date) {
    switch (date.getDay()) {
        case 1:return 'пн';break;
        case 2:return 'вт'; break;
        case 3:return 'ср';break;
        case 4:return 'чт'; break;
        case 5:return 'пт';break;
        case 6:return 'сб';break;
        case 0:return 'вс';break;
        default :return 'чё чё';
    }
}
//console.log( getWeekDay(date));      // Должно вывести 'вт'

// День недели в европейской нумерации
var date = new Date(2012, 0, 3);  // 3 янв 2012
function getLocalDay(date) {
    var dayNum = [7,1,2,3,4,5,6];
    return dayNum[date.getDay()];
}
//console.log( getLocalDay(date) );       // вторник, выведет 2

//День указанное количество дней назад
var date = new Date(2015, 0, 2);
function getDateAgo(date, days){
    var date_ = new Date ();
    date_.setDate(date.getDate()-days);
   return date_.toString();
}
//console.log( getDateAgo(date, 1) ); // 1, (1 января 2015)
//console.log( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
//console.log( getDateAgo(date, 365) ); // 2, (2 января 2014)

//Последний день месяца
function  getLastDayOfMonth(year, month){
    var date = new Date (year, month +1);
    date.setDate(date.getDate()-1);
    return date.toString();
}
// console.log(getLastDayOfMonth(2012, 1));

// Сколько секунд уже прошло сегодня?
function getSecondsToday(){
    var date_now = new Date;
    var date_start = new Date(date_now.getFullYear(), date_now.getMonth(), date_now.getDate(), 0,0,0);
    return (date_now - date_start)/1000;
}
//console.log(getSecondsToday());

//Сколько секунд – до завтра
function getSecondsToTomorrow(){
    var date_now = new Date;
    var date_next = new Date(date_now.getFullYear(), date_now.getMonth(), date_now.getDate()+1, 0,0,0);
    return (date_next - date_now)/1000;
}
//console.log(getSecondsToTomorrow());

// Вывести дату в формате дд.мм.гг
var d = new Date(2014, 0, 1); // 30 января 2014
function formatDate(d){
    if  (d.getDate() < 10) return '0'+ d.getDate() + '.' + d.getMonth()+1 + '.'+ d.getFullYear();
    else return d.getDate() + '.' + d.getMonth()+1 + '.'+ d.getFullYear();
}
// console.log( formatDate(d) ); // '30.01.14'

//Относительное форматирование даты
function formatDate(date) {
    var date_now = new Date;
    var diff = (date_now - date)/1000;
    if (diff < 1) return "только что";
    else if (diff >= 1 && diff <60) return diff + " сек. назад ";
    else if (diff >= 60 && diff <60 *60 ) return diff/60 + " мин. назад ";
    else if (diff >= 60*60 ) {
      //  return date.toDateString();
        var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
    return date.toLocaleString("ru",options);
    }
}
//console.log( formatDate(new Date(new Date - 1)) ); // "только что"
//console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"


// ************************************ Глобальный объект ********************************

// ************************************ Замыкания, функции изнутри ********************************

// ************************************ [[Scope]] для new Function ********************************

// ************************************ Локальные переменные для объекта ********************************
//Сумма через замыкание
function sum (a) {
    var f1 = function(b) {return a+b;};
    return f1;
}
//console.log(sum(5)(-1));

//Функция – строковый буфер

function makeBuffer() {
  var NewLine = '';
    function buffer (str) { if (str != undefined) {NewLine = NewLine + str;} return NewLine;}
    return buffer;
}

var buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
//console.log( buffer() ); // 'Замыкания Использовать Нужно!'

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);
//console.log( buffer2() ); // '010'

// Строковый буфер с очисткой
function makeBuffer() {
    var NewLine = '';
    function buffer (str) { if (str != undefined) {NewLine = NewLine + str;} return NewLine;}
    buffer.clear = function(){NewLine = '';}
    return buffer;
}

var buffer = makeBuffer();
buffer("Тест");
buffer(" тебя не съест ");
//console.log( buffer() ); // Тест тебя не съест
buffer.clear();
//console.log( buffer() ); // ""

// Сортировка
var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(name){
    var mysort = new Function('a, b',' return a.'+name+' > b.'+name+' ? 1 : -1;');
    return mysort;
}
/*
users.sort(byField('name'));
users.forEach(function(user) {
    console.log( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
    console.log( user.name );
}); // Маша, Вася, Петя
*/

//Фильтрация через функцию
/* .. ваш код для filter, inBetween, inArray */
function myFilter(arr, func){
 var arr_ = []; // массив, куда будем кидать элементы, удовлетворяющие func
 for (i=0;i<arr.length;i++){
     if (func( arr[i])) {arr_.push( arr[i]);}
 }
    return arr_;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

//console.log(myFilter(arr, function(a) { return a % 2 == 0 })); // 2,4,6

function inBetween (a,b) {
    return function(arr_i) {if (arr_i>=a && arr_i<=b) return 1; else return 0;}
}
//console.log( myFilter(arr, inBetween(3, 6)) ); // 3,4,5,6

function inArray (arr1) {
    return function(arr_i) { if (arr1.indexOf(arr_i) != -1) return 1; else return 0;}
}
//console.log( myFilter(arr, inArray([1, 2, 10])) ); // 1,2

// Армия функций
function makeArmy() {
    var shooters = [], i;
    for (i = 0; i < 10; i++) {
        var shooter = new Function ('','console.log('+ i +' );');
        shooters.push(shooter);
    }
    return shooters;
}

var army = makeArmy();

//army[0](); // стрелок выводит 10, а должен 0
//army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9


// ************************************ Модули через замыкания ********************************
// ************************************ Управление памятью в JavaScript ***********************
// ************************************ Устаревшая конструкция «with» *************************

// ************************************  Методы объектов, this ********************************

//Создайте калькулятор
var calculator = {
    read: function () { this.a = 1; this.b = 2;}, // this.a = +prompt('Enter a',0)}; this.b = +prompt('Enter b',0);
    sum: function () {console.log(this.a + this.b)},
    mul: function () {console.log (this.a * this.b);}
}

//calculator.read();
//calculator.sum();
//calculator.mul();

// Цепочка вызовов
var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
         },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        console.log( this.step );
    }
};
/*
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
*/

// ladder.up().up().down().up().showStep(); // 1


// *************************** Преобразование объектов: toString и valueOf ***********************
//Сумма произвольного количества скобок
function sum1(a) {
    var result = a;
    return function sum2(b){
        sum2.toString = function(){return result;};
        result += b;
        return sum2;
    };

}

//var x = +sum1(1)(2)(4);
//console.log(x);

// *************************** Создание объектов через «new»  ***********************
// Создать Calculator при помощи конструктора
//function Calculator (){
//    this.read = function() {this.a = 3; this.b = 4;};
//    this.sum = function() {return this.a + this.b; };
//    this.mul = function () {return this.a * this.b};
//}
//var calculator = new Calculator();
//calculator.read();
//console.log( "Сумма=" + calculator.sum() );
//console.log( "Произведение=" + calculator.mul() );

//Создать Accumulator при помощи конструктора
//function  Accumulator (startingValue) {
//    this.value = startingValue;
//    this.read = function (){this.a = 3; this.value += this.a;}
//}

//var accumulator = new Accumulator(1); // начальное значение 1
//accumulator.read(); // прибавит ввод prompt к текущему значению
//accumulator.read(); // прибавит ввод prompt к текущему значению
//console.log( accumulator.value ); // выведет текущее значение

// Создайте калькулятор
// step 1
//function Calculator(){
//    this.calculate = function (x) {
//        var a, b, option;
//        a = +x.substr(0, x.indexOf(' '));
//        option =  x.substr(x.indexOf(' ')+1,1);
//        b = +x.substr(x.indexOf(' ')+3);
//        if (option == '+') return a + b;
//        else if (option == '-') return a - b;
//        else return null;
//    }
//}
//var calc = new Calculator;
//console.log(calc.calculate('3 - -77'));

//step 2
function Calculator(){
    var options = [];
    options ['+'] = function (a,b) {return a+b;}
    options ['-'] = function (a,b) {return a-b;}

    this.addMethod = function(name, func){ options[name] = func;}

    this.calculate = function (x) {
        var a, b, option;
        a = +x.substr(0, x.indexOf(' '));
        option =  x.substr(x.indexOf(' ')+1,1);
        b = +x.substr(x.indexOf(' ')+3);
        return options[option](a, b);
    }

}
var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {return a * b;});
powerCalc.addMethod('/', function(a, b) {return a / b;});
console.log(powerCalc.calculate('2 + 3'));

