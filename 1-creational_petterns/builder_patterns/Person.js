class Person {

    constructor(person) {
        this.name = person.name
        this.isEmployee = person.isEmployee;
        this.isManager = person.isManager;
        this.hours = person.hours;
        this.money = person.money;
        this.shoppingList = person.shoppingList;
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = Person;
