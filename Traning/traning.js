'use strict';
let arr = [1, 4, 6, -2, -5, 2, -3];
// for (let i = 0;i < arr.length; i++){
//     if (arr[i] > 0) {
//         document.write(arr[i] + ' ');
//     } else {
//         document.write(arr[i] + ' ');
//     }
// }
let sumPos = 0;
let sumNeg = 0;
let countPos = 0;
let countNeg = 0;
let pos = 0;
let neg = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0){
        sumPos += arr[i];
        countPos++;
    } else if (arr[i] < 0) {
        sumNeg += arr[i];
        countNeg++;
    }
}
let sredpos = sumPos/pos;
let sredneg = sumNeg/neg;
document.write(sredpos + ' ');
document.write(sredneg + ' ');
document.write(pos + ' ');
document.write(neg + ' ');
document.write(sumPos + ' ', countPos + ' ');
document.write(sumNeg + ' ', countNeg + ' ');
