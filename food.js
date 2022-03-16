// JavaScript source code
class food {
    constructor(price) {
        this.price = price;
        this.type ="food"
    }
    show() {
        var tag = document.createElement("th");
        var text = createTextNode("");
        tag.appendChild(text);
        // define menu
        var menu = document.getElementById("menu");
        menu.appendChild(tag);
    }
}

class PepporoniDeluxe extends food {
    contructor(price) {
        super(price)
        this.type ="pepperoni deluxe"
    }
}

class FourCheeses extends food {
    contructor(price) {
        super(price)
        this.type = "four cheese pizza"
    }
}

class VeganCrunchyChicken extends food {
    contructor(price) {
        super(price)
        this.type = "vegan crunchy chicken pizza"
    }
}



