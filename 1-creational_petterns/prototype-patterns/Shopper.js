// class Shopper {

//     constructor(name = 'unnamed person') {
//         this.name = name;
//         this.items = [];
//     }

//     set name(value) {
//         this.name = value;
//     }

//     get name() {
//         return this.name;
//     }

//     get shoppingList() {
//         return this.items.join(', ')
//     }

//     addIteamsToList(item) {
//         this.items.push(item)
//     }

//     clone() {
//         let proto = Object.getPrototypeOf(this);
//         let clone = Object.create(proto);

//         clone.name = this.name;
//         clone.item = [...this.items];

//         return clone;
//     }

// }

// module.exports = Shopper;

class Shopper {

    constructor(name = 'unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    addItemToList(item) {
        this._shoppingList.push(item);
    }

    clone() {
        let proto = Object.getPrototypeOf(this);
        let clone = Object.create(proto);
        clone._name = this._name;
        clone._shoppingList = [...this._shoppingList];
        return clone;
    }

}

module.exports = Shopper;
