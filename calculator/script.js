'use strict';
let val1 = 0;
let val2 = 0;
let action = '';
let result = 0;
function add() {
    val1 = +document.getElementById("num").value;
    action = '+';
}
function minus() {
    val1 = +document.getElementById("num").value;
    action = '-';
}
function multiply() {
    val1 = +document.getElementById("num").value;
    action = '*';
}
function division() {
    val1 = +document.getElementById("num").value;
    action = '/';
}

function calc() {
    val2 = +document.getElementById("num").value;
    if (action == '+'){
        let result = val1 + val2;
        document.getElementById("num").value = result;
    } else if (action == '-'){
        let result = val1 - val2;
        document.getElementById("num").value = result;
    } else if (action == '*'){
        let result = val1 * val2;
        document.getElementById("num").value = result;
    } else {
        let result = val1 / val2;
        document.getElementById("num").value = result;
    }
    let expr = val1 + action + val2;
    let res = eval(expr);
}
