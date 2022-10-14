'use strict';
let order = +prompt('1 — фирменная, 2 — пицца с курицей и ананасом, 3 — 4 сыра, 4 — морская, 5 — мясная ') || ('фирменная');
let count = +prompt('Сколько пицц?') || 1;
let price;
let sum = 0;

function orderingPizza(n = 1, a = 1) {
    switch (n) {
        case 1:
            price= 140;
            order = 'фирменная';
            break;
        case 2:
            price= 150;
            order = 'пицца с курицей и ананасом';
            break;
        case 3:
            price= 165;
            order = '4 сыра';
            break; 
        case 4:
            price= 180;
            order = 'морская';
            break;     
        case 5:
            price= 160;
            order = 'мясная';
            break;
        default:
            alert("Ошибка");
            break;
    }
    sum += price * count;
    return 'Ваш заказ:' + '</br>' + 'Пицца:' + order +'</br>'+ 'Кол-во:' + a + 'шт.' + '</br>' + 'Сумма заказа: ' + (sum || '140');
}
document.write(orderingPizza(order, count));
