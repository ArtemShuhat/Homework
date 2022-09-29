'use strict';
const en = ["ни", "буль", "коль",  "то", "ро", "паль", "ми", "ма"];
let n = prompt('Введите');
// let rand1 = Math.floor(Math.random() * en.length);
// let rand2 = Math.floor(Math.random() * en.length);
// let rand3 = Math.floor(Math.random() * en.length);
// alert(en[rand1] + en[rand2] + en[rand3]);
let nick = '';
for (let i = 0; i < n; i++) {
    const rand = Math.floor(Math.random() * en.length);
    // alert(en[rand])
    nick += en[rand];
}
alert(nick);
