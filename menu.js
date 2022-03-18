class Food {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Pizza extends Food{
    constructor(name, price, spicy){
    super(name, price);
    this.spicy = spicy;
    }
}

class Drink extends Food{
    constructor(name, price, warm){
    super(name, price);
    this.warm = warm;
    }
}

class Snack extends Food{
    constructor(name, price, hot){
    super(name, price);
    this.hot = hot;
    }
}

let Pepperoni = new Pizza("Pizza Pepperoni", 7,50, "No")
let Chicken = new Pizza("Pizza Chicken", 8,50, "Yes")
let Cola = new Drink("Coca Cola", 2,50, "No")
let Coffee = new Drink("Large Coffee", 1,50, "Yes")
let Icecream = new Snack("Chocolate Ice Cream", 2,50, "No")
let Nuggets = new Snack("Chicken nuggets", 3,50, "Yes")



class MenuSection {
    constructor(foodItems) {
        this.foodItems = foodItems;
    }
    show() {
        for (let i = 0; i < this.foodItems.length; i++) {
            let value1 = this.foodItems[i].name;
            let value2 = this.foodItems[i].price;
            let value3 = this.foodItems[i].spicy;
            let row = document.createElement("tr");
            let column1 = document.createElement("td")
            column1.nodeValue = value1;
            let column2 = document.createElement("td")
            column2.nodeValue = value2;
            let column3 = document.createElement("td")
            column3.nodeValue = value3;
            row.appendChild(column1);
            row.appendChild(column2);
            row.appendChild(column3);
            let table = document.getElementById("table");
            table.appendChild(row);
        }
    }
}


class menu {
    constructor() {
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.appendChild(tbody);
        table.id = "table";
        document.body.appendChild(table)
    }

    set visibleSection(menuSection) {
        this.visible = menuSection;
        visible.show();
    }
}

let m = new menu();

let btnPizza = document.createElement("button");
btnPizza.innerHTML = "Pizza Menu";
document.body.appendChild(btnPizza);

let btnSnacks = document.createElement("button");
btnSnacks.innerHTML = "Snacks Menu";
document.body.appendChild(btnSnacks);

let btnDrinks = document.createElement("button");
btnDrinks.innerHTML = "Drinks Menu";
document.body.appendChild(btnDrinks);



let pizza = [
    {name: "Spicy chicken", price: 9.50, spicy: "yes"},
    {name: "Pepperoni", price: 8.50, spicy: "no"}
];

let snacks = [
    {name: "Chicken Nuggets", price: 3.50, warm: "yes"},
    {name: "Ben & Jerrys", price: 4.50, spicy: "no"}
];

let drinks = [
    {name: "Coffee", price: 2.50, hot: "yes"},
    {name: "Coca Cola", price: 1.50, hot: "no"}
];

btnPizza.addEventListener("click", () => {
    function pizzaSection(table, data) {
        foodItems = [Pepperoni, Chicken];
        let pizzaSection = new MenuSection(foodItems);
        menu.visibleSection(pizzaSection);
        pizzaSection.show();
    }
    function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    }
    
    function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }
    }
    }

    let table = document.querySelector("table");
    let data = Object.keys(pizza[0]);
    generateTableHead(table, data);
    generateTable(table, pizza);
})

btnSnacks.addEventListener("click", () => {
    function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    }
    
    function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }
    }
    }

    let table = document.querySelector("table");
    let data = Object.keys(snacks[0]);
    generateTableHead(table, data);
    generateTable(table, snacks);
})


btnDrinks.addEventListener("click", () => {
    function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    }
    
    function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
        }
    }
    }

    let table = document.querySelector("table");
    let data = Object.keys(drinks[0]);
    generateTableHead(table, data);
    generateTable(table, drinks);
})

