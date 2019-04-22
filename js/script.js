'use strict'
let i = 10,
    d = 10;

console.log(i++);
console.log(d--);
console.log(5%2);

console.log("2" == 2);
console.log("2" === 2);

let isChecked = false,
    isClose = true;
    
console.log(isChecked || isClose);

console.log(!isChecked);

if (4 + 4 == 8) {
    console.log('ok');
} else {
    console.log('not ok');
};
    

let num = 50;

if (num < 49) {
    console.log('smaller than 49');
} else if (num > 100) {
    console.log('more than 100');
} else {
    console.log('ok');
};

(num == 50) ? console.log('ok') : console.log('not ok');

switch (num) {
    case num < 49:
    console.log('smaller than 49');
    break;
    case num < 100:
    console.log('more than 100');
    break;
    case num < 80:
    console.log('more than 80');
    break;
    case 50:
    console.log('equal 50');
    break;
    default: 
    console.log('smth wrong');
    break;
};