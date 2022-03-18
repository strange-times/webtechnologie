class menu {
    constructor() {
        let table = document.createElement('table');
        let thead = document.createElement('thead');

        let tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.appendChild(tbody);
        table.id = "table"
        document.body.appendChild(table)
    }

    set visibleSection(menuSection) {
        this.visible = menuSection;
        visible.run();
    }
}

let m = new menu();