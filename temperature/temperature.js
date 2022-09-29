'use strict';
let temp = [12, 9, 3, -1, -3, 5, -2];
let positive = 0;
let negative = 0;
let sum = 0;
let sred = 0;

for(let i = 0; i < temp.length; i++){
    if (temp[i] > 0){
        alert('+' + temp[i]);
        positive++;
        document.write(positive)
    } else if (temp[i] < 0){
        alert(temp[i]);
        negative++;
        document.write(negative);
    }
}
for(let i = 0;i > temp[i]; i++){
    sum += temp[i];
}
sred = sum/temp.length;
alert(sred);

