'use strict';
let count = prompt('Сколько конфет?');
while(count >= 0){
    let sweet = confirm('Еще конфету?');
    if (sweet == true){
        count --;
        alert(count);

        if(count <= 0){                 //Если 0 конфет
            alert('Пора покупать другую коробку...');
            break;
        }
        
    }
    
    else {
        break;
    }
}  