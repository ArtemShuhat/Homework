'use strict';
let count = prompt('Сколько конфет?');//Изначальное количество конфет
let n = count/2;
while(count > 0){
    let sweet = confirm('Еще конфету?');//Текущее количество конфет
    if (sweet == true){
        count --;
        alert(count);
        if(count <= 0){
            alert('Пора покупать другую коробку...');
            break;
        }
    } 
    else{
       break; 
    }
}  