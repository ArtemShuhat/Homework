'use strict';

let longStr = prompt('Введите длинную строку');
let shortStr = prompt('Введите короткую строку');

function preview(str, n){
    if(str.length > n){
        str = str.substr(0, n) + '...';
    }
    return str;
}

console.log(preview(shortStr, 20));
console.log(preview(longStr, 20));