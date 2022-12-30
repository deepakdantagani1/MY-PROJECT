class CatalogGroup {
    constructor(name, components = []) {
        this.name = name;
        this.components = components;
    }

    get total() {
        return this.components.reduce((accumulator, currentComponent) => accumulator + currentComponent.price, 0);
    }

    print() {
        console.log(`${this.name}`);
        this.components.forEach(component => component.print());
    }
}

module.exports = CatalogGroup;
