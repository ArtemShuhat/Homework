'use strict';
function printTable(from, to, step, func) {
    if (func === undefined) {
        return;
    }
    // from = from;
    // to = to;
    // step = step || 1;
    document.write("<table border='1'");
    for (var x = from; x <= to; x += step) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        document.write("<td>" + x * x + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

function quadrat(x){
    return x * x; 
}

function cube(x){
    return x * x * x; 
}

function x2(x){
    return x * 2; 
}
let arr = [x2, cube];
for (let i = 0; i < arr.length; i++){
    // const element = arr[i];
    printTable(0, 10, 1);
}
