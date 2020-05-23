export class ListTemplate {
    constructor(itemList) {
        this.itemList = itemList;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.appendChild(h4);
        const para = document.createElement('p');
        para.innerText = item.format();
        li.appendChild(para);
        if (pos === 'start') {
            this.itemList.prepend(li);
        }
        else {
            this.itemList.append(li);
        }
    }
}
