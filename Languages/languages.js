'use strict';
let en = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
let ua = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"];
let ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let lang = prompt("input   'ua' 'en' 'ru'");
let n = prompt('input n');
while(true){
  if (isNaN(n)){
    alert('Это не число');
    break;
  } 
  switch (lang) {
    case "en": alert(en[n-1]); break;
    case "ru": alert(ru[n-1]); break;
    case "ua": alert(ua[n-1]); break;
    default: alert("Ведите язык правильно!");
  }
}
