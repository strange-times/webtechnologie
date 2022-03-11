class Menu {
    constructor (sections) {
        this.sections = sections;
    }
}


var section1 = new Menusection(new food(Pizza));
var section2 = new Menusection(new food(Snacks));
var section3 = new Menusection(new food(Drinks));

var Menu1 = new Menu(section1)
var Menu2 = new Menu(section2)
var Menu3 = new Menu(section3)