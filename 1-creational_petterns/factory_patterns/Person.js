class Person {
    constructor(name = 'unnamed') {
        this._name = name;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = Person;
