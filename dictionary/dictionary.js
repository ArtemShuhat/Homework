'use stricts';
let words = {
    apple: 'яблуко',
    house: 'будинок',
    mouse: 'миша'
   };
let word;
let translete;
let ball = 0;
let errors = 0;
for (word in words) {
    alert('Слово:' + word)
    translete = prompt("Введите перевод для завершения - '!'");
    if (translete){
        
    }
    if (translete == words[word]) {
        alert("Правильно");
        ball++;
    } else {
        alert('Неправильно')
        errors++;
    }
} 


alert("Правильно: " + ball + ", неправильно: " + errors); // выводим сообщение и значения счетчиков правильных и неправильных ответов
for (word in words) {
    document.write(word + ': ' + words[word] + '<br>'); // выводим в цикле все слова словаря
}