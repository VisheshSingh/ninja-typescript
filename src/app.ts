import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('mario', 'new website for mario', 200);
const invTwo = new Invoice('luigi', 'new website for luigi', 300);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(`${inv.details}, ${inv.amount}, ${inv.format()}`);
});

const anchor = document.querySelector('a')!;
console.log(anchor.href);

// const form = document.querySelector('form');
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#to-from') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
