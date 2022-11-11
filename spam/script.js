'use strict';

let str1 = prompt("Введите первую строку");
let str2 = prompt("Введите вторую строку");
function check(str, text) {
  let s = str.toLowerCase();
  let spam = text.toLowerCase();
  let result = s.includes(spam);
  return result;
}
alert(check(str1, "spam"));
