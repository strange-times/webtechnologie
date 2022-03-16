class Menu {
    constructor (sections) {
        this.sections = sections;
    }
    maketable = document.createElement
}


var section1 = new Menusection(new food(Pizza));
var section2 = new Menusection(new food(Snacks));
var section3 = new Menusection(new food(Drinks));

var Menu1 = new Menu(section1)
var Menu2 = new Menu(section2)
var Menu3 = new Menu(section3)







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
