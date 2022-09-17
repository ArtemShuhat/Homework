'use strict';
let n = prompt('n:');
let x = 1;
if(isNaN(n)){
    alert('Error');
}
for (let i = 1; i <= n; i++){
    x *= i;
}
document.write(x + ' ');