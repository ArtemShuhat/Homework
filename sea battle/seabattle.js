"use strict";
let location1 = 3;
let location2 = 4;
let location3 = 5;
let hits = 0;
let guesses = 0;
let isSunk = false;
let guess;
while (!isSunk) {
  guess = prompt("Ваш постріл! (введіть число від 0 до 6):");
  if (isNaN(guess)) {
    break;
  }
  if (guess < 0 || guess > 6) {
    alert("Введіть правильний номер!");
    continue;
  }
  guesses++;
  if (guess == location1 || guess == location2 || guess == location3) {
    alert("Влучив!");
    hits++;
    if (hits == 3) {
      isSunk = true;
      alert("Ви втопили корабель!");
    }
    } else {
    alert("Промах!");
  }
}
let stats = "Вы предприняли " + guesses + " попыток, чтобы утопить корабль, " +
	"что означает, что общая точность была " + (3 / guesses);
alert(stats);