/* eslint-disable no-undef */
const Person = require('../creational_petterns/factory_patterns/Person');
const chai = require('chai');

// eslint-disable-next-line no-unused-vars
const should = chai.should();

describe('person class', function() {
    context('person name', function(){
        it('should not be unnamed', function(){
            new Person('deepak').name.should.equal('deepak');
        })
    })
});

describe('person class', function() {
    context('person name', function(){
        it('should be unnamed', function(){
            new Person().name.should.equal('unnamed');
        })
    })
});
