const PersonalBuilder = require('./PersonBuilder');

//Employee
const deepak = new PersonalBuilder('deepak')
    .makeEmployee()
    .makeManager(60)
    .build();
//shopper
console.log(deepak.toString());


//this can be used when we ahve many values to give for a construction
