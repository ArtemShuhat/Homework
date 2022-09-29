'use strict';
let m = prompt('Введите числитель:');
let n = prompt('Введите знаменатель:');
while(m && n > 0){
    if(isNaN(n)){
        alert('Error');
    } else if(isNaN(m)){
        alert('Error');
    }
}
if (n === 0){
    alert('Error')
} else if (m === 0){
    let m1 = m;
    let n1 = n;
    while(m1 !== n1){
      if(m1 > n1){
        m1 -= n1;
    } else {
        n1 -= m1;
    }
    }
    m /= m1;
    n /= n1;

    console.log(m1, n1)
    alert(m1 + "/" + n1);
}