'use strict';
let rand = Math.floor(Math.random() * 11);
while(true){
    let x = prompt('Введите число от 0 до 10:')
    if (isNaN(x)) {
        alert('Game over!');
        break;
    } else if (x < rand) {
        alert('Мало');
    } else if (x > rand) {
        alert('Много');
    } else {
        alert('You win!');
        break;
    }
}