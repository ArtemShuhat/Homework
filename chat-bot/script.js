'use strict';
let bye = "До свидания";
let hello = "Привет";


let arr = [
    "Наш менеджер перезвонит Вам в ближайшее время!",
    "Уточнить детали можно по телефону 123456789",
    "Оставайтесь на связи!",
    "Сегодня прекрасная погода!", 
    "С Вами очень приятно общаться!"
];


let js = [
    "В JavaScript есть много методов для работы со строкой",
    "Массивы в JavaScript похожи на объекты", 
    "Я хочу беседовать о JavaScript!",
];

let html = [
    "HTML был разработан британским учёным Тимом Бернерсом-Ли",
    "HTML создавался как язык для обмена научной и технической документацией",
    "В HTML можно встроить программный код на языке программирования JavaScript",
];

let php = [
    "Пятая версия PHP была выпущена разработчиками 13 июля 2004 года.",
    "В 2014 году было проведено голосование, по результатам которого следующая версия получила название PHP 7",
    "PHP — один из популярных сценарных языков",
];


while (true){
    let str = prompt(hello + " Ваши вопросы");
    let srtToLowerCase = str.toLowerCase();
    let byeToLowerCase = bye.toLowerCase();
    let rand1 = Math.floor(Math.random() * arr.length);
    let randjs = Math.floor(Math.random() * js.length);
    let randhtml = Math.floor(Math.random() * html.length);
    let randphp = Math.floor(Math.random() * php.length);

    if (byeToLowerCase == srtToLowerCase) {
        alert(bye);
        break;
    } else if (srtToLowerCase.includes('javascript')){
        alert(js[randjs]);
    } else if (srtToLowerCase.includes('html')){
        alert(html[randhtml]);
    } else if (srtToLowerCase.includes('php')){
        alert(php[randphp]);
    }

    alert(arr[rand1]);
}