'use strict';

function coffee(...drink) {
    let str = '';
    let price;
    let sum = 0;
    console.log(drink);
    for (let i = 0; i < drink.length; i++) {
        str += `${drink[i]}: `;
        switch (drink[i]) {
            case 'какао':
                price= 40;
                str += `цена ${price};` + '</br>'; 
                break;
            case 'макачино':
                price = 45;
                str += `цена ${price};` + '</br>'; 
                break;
            case 'латте':
                price = 50;   
                str += `цена ${price};` + '</br>'; 
                break;
            case 'чай':
                price = 35;   
                str += `цена ${price};` + '</br>';  
                break;
        }
        sum += price;
    }
    return str + 'сумма заказа: ' + sum;
}

document.write(coffee('какао', 'макачино', 'латте', 'чай'));