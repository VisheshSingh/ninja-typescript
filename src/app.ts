import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('peach', 'cleaning palace', 100);
docTwo = new Payment('geodude', 'fight', 400);

const docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log('docs 📂: ', docs); */
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

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
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  if (type.value === 'invoice') {
    docs = new Invoice(...values);
  } else {
    docs = new Payment(...values);
  }
  list.render(docs, details.value, 'start');
  toFrom.value = '';
  details.value = '';
  amount.value = '';
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
