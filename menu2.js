class menu {
    constructor() {
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');

        table.id = "table";
        table.appendChild(thead);
        table.appendChild(tbody);
        document.body.appendChild(table)
    }

    set visibleSection(menuSection) {
        this.visible = menuSection;
        visible.run();


        document.body.appendChild(table);
    }
    set visibleSection(menuSection) {
        this.visible = menuSection;
        visible.run();
    }
}

let m = new menu();

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