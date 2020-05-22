import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './classes/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('peach', 'cleaning palace', 100);
docTwo = new Payment('geodude', 'fight', 400);

const docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log('docs 📂: ', docs);

/* const invOne = new Invoice('mario', 'new website for mario', 200);
const invTwo = new Invoice('luigi', 'new website for luigi', 300);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(`${inv.details}, ${inv.amount}, ${inv.format()}`);
}); */

/* const anchor = document.querySelector('a')!;
console.log(anchor.href); */

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
  let docs: HasFormatter;

  if (type.value === 'invoice') {
    docs = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    docs = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }
  console.log(docs);
});

//interfaces

/* interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: 'batman',
  age: 30,
  speak(text: string): void {
    console.log(`I am batman`);
  },
  spend(money: number) {
    console.log(`I spent ${money}`);
    return money;
  },
};

console.log({ me });

const greetPerson = (person: isPerson) => {
  console.log(`hello ${person.name}`);
};

greetPerson(me);
 */
