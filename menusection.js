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