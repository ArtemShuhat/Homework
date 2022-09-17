'use strict';
let n = 64;//Клетки доски
let x = 2;//Зерна
let sum = 0;//Сумма 
for(let i = 1; i <= n; i++){
    sum += x;
    console.log('Кол-во зерна:',x + " " + "<br>");
    x *= 2;
}
let weight = 0.065
console.log('Масса зерна:', sum * weight / 1000)
console.log('Сумма всех зерен:',sum)
