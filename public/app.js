import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('peach', 'cleaning palace', 100);
docTwo = new Payment('geodude', 'fight', 400);

const docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log('docs 📂: ', docs); */
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#to-from');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let docs;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        docs = new Invoice(...values);
    }
    else {
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
