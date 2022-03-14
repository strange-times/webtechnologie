// JavaScript source code
class food {
    constructor(price) {
        this.price = price;
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
    }
}

class FourCheeses extends food {
    contructor(price) {
        super(price)
    }
}

class VeganCrunchyChicken extends food {
    contructor(price) {
        super(price)
    }
}



