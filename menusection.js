class MenuSection {
    constructor(foodItems) {
        this.foodItems = foodItems;
    }
    show() {
        for (let i = 0; i < this.foodItems.length; i++) {
            this.foodItems[i].show();
            // or handle showing in section?
        }
    }
}