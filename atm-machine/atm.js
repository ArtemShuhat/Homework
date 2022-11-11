'use strict';
 let card1 = {
    number: 123456,
    name: 'Artem',
    surname:'Shukhat',
    code: 6723,
    account: 1000,
    bank: 'Legkobank',
 };
 let card2 = {
    number: 683201,
    name: 'Anton',
    surname:'Popov',
    code: 4379,
    account: 100000,
    bank: 'Legkobank',
 };
 
 const atm = [card1, card2];

 let atm1 = {
    number: 2138,
    showAccount: function(card){
        alert(card.account);
    },
    getMoney: function(card, sum){
        card.account -= sum;
    },
    compare: function(card){
        let number = 123456;
        let code = 6723;
        if (code == card.code && card.number == number){
            return true;
        } else {
            return false;
        }
    }
 };
 atm1.showAccount(card1);
 atm1.getMoney(card1, 100);
 atm1.showAccount(card1);

 alert(atm1.compare(card1));