'use strict';
function fibo(n) {
    let num;
    if (n >= 2) {
        num = fibo(n - 1) + fibo(n - 2);
    } else {
        num = n;
    }
    return num;
}
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));