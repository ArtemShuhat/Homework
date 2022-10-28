'use strict';
const questions = ['Что мне взять с собой на каток?', 'Что мне положить в холодильник?', 'Что мне взять с собой в школу?', 'Что мне взять с собой в бассейн?'];
const answers = ['коньки', 'яблоки', 'учебники', 'полотенце'];
function arrayRandElement(arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

let q = arrayRandElement(questions);
let a = arrayRandElement(answers);

document.write(`${q} ${a}`);