"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        console.log(this.client + " owes $" + this.amount + " for " + this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'new website for mario', 200);
var invTwo = new Invoice('luigi', 'new website for luigi', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
var anchor = document.querySelector('a');
console.log(anchor.href);
// const form = document.querySelector('form');
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#to-from');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
