'use strict';
function animals(animal, n) {
    n = prompt('Сколько раз повторить?')
    for (let i = 1; i <= n ; i++) {
        document.write('<img width ="190px" height="190px" src="./images/' + animal + '.jfif">');
    }
}
animals('dog');
