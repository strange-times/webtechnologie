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
}

let m = new menu();