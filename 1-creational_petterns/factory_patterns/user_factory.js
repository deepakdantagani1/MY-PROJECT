let Employer = require('./Employee');
let Shopper = require('./Shopper');

let userFactory = (name, money = 0, type, employer) => {
    if (type === 'employee') {
        return new Employer(name, money, employer);
    } else {
        return new Shopper(name, money);
    }
};

module.exports = userFactory;
