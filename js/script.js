// 'use strict'
// let i = 10,
//     d = 10;

// console.log(i++);
// console.log(d--);
// console.log(5%2);

// console.log("2" == 2);
// console.log("2" === 2);

// let isChecked = false,
//     isClose = true;
    
// console.log(isChecked || isClose);

// console.log(!isChecked);

// if (4 + 4 == 8) {
//     console.log('ok');
// } else {
//     console.log('not ok');
// };
    

// let num = 50;

// if (num < 49) {
//     console.log('smaller than 49');
// } else if (num > 100) {
//     console.log('more than 100');
// } else {
//     console.log('ok');
// };

// (num == 50) ? console.log('ok') : console.log('not ok');

// switch (num) {
//     case num < 49:
//     console.log('smaller than 49');
//     break;
//     case num < 100:
//     console.log('more than 100');
//     break;
//     case num < 80:
//     console.log('more than 80');
//     break;
//     case 50:
//     console.log('equal 50');
//     break;
//     default: 
//     console.log('smth wrong');
//     break;
// };


// let numb = 0;
// // while (numb < 10) {
// //     console.log(numb);
// //     numb++;
// // };

// // do {
// //     console.log(numb);
// //     numb++;
// // } while (numb <= 15);

// // for (let i = 0; i <= 8; i++) {
// //     console.log(i);
// // };

// // for (let i = 0; i <= 8; i++) {
// //     if (i == 5) {
// //         console.log(i);
// //         break;
// //     };
// //     console.log(i);
// // };

// for (let i = 0; i <= 8; i++) {
//     if (i == 5) {
//         continue;
//     };
//     console.log(i);
// };

// function showText (text) {
//     alert(text);
// };

// showText('Hello World!');

// function learn (lang, callback) {
//     console.log('I learn ' + lang);
//     callback();
// };

// learn('JavaScript', function() {
//     console.log('i`m good');
// });

// let user = {
//     name: 'sergey',
//     age: 22,
//     nationality: 'Ukrainian'
// };

// console.log(user.age);
// user.born = 1996;

// delete user.nationality;
// user.other = {
//     gender: 'male',
//     skin: 'white'
// };
// console.log(user);

// for (let key in user) {
//     console.log('This key ' + key + ' has a value ' + user[key]);
// };

// console.log(Object.keys(user).length);

// let arr = [1, 3, 5, 6, 7, 8, 9, 10];

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };

// arr.pop();
// arr.push('190');
// arr.shift();
// arr.unshift('1111');

// arr.forEach(function(item, i, array) {
//     console.log(i + ': ' + item + ' (массив: ' + array + ' )');
// });


// console.log(arr);

// let array = [1, 2, 3, 4, 5, 6, 7];

// for (let key of array) {
//     console.log(key);
// };

// let answer = prompt('', ''),
//     arro = [];

// arro = answer.split(',');
// console.log(arro);

// let arrow = ['sss', 'wwww', 'rrrr', 'qeqwe q'],
//     va = arrow.join(', ');

// console.log(va);

// let arrow = [1, 15, 30, 45, 4],
//     // va = arrow.sort(function(a, b){
//     //     return a - b;
//     // });
//     bs = arrow.slice(2, 4);

// console.log(bs);

// let soldier = {
//     health: 400,
//     armor: 100,
//     ms: 2
// };

// let ryan = {
//     name: 'ryan',
//     age: 25
// };

// ryan.__proto__ = soldier;

// console.log(ryan);
// console.log(ryan.ms);

let button = document.getElementById ('btn'),
    div2 = document.getElementById('div2');

function myAnime () {
    let pos = 0;

    let timeId = setInterval(anime, 1);
    function anime () {
        if (pos == 380){
            clearInterval(timeId);
        } else {
            pos++;
            div2.style.left = pos + 'px';
            div2.style.top = pos + 'px';
        };
    };
};

button.addEventListener('click', myAnime);

