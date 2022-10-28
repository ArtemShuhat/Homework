'use strict';
let fiat = {
    make: 'Fiat',
    model: '600',
    year: 1957,
    color: 'Green',
    passengers: 2,
    mileage: 88000,
    fuel: 0,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert("Біп!");
        } else {
            alert("Спочатку запустіть двигун!");
        }
    },
    showFuel: function() {
        alert("У мене в баку "+ this.fuel +" литрів бензину!");
    },
    addFuel: function(amount) {
        amount = +prompt('Скільки літрів бензину потрібно заправити?')
        this.fuel += amount;
    },
    showAddedFuel: function() {
        alert("У мене в баку "+ this.fuel +" литрів бензину!");
    },  
};

fiat.start();
fiat.drive();
fiat.showFuel();
fiat.addFuel();
fiat.showAddedFuel();
fiat.drive();