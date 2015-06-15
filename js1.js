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

