// Import Chai
import chai from 'chai';

// Import Any Files to Test

import {AppController} from '../src/js/controllers/app-controller';
import {List} from '../src/js/models/list';
import {Contact} from '../src/js/models/contact';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Things that should generate on load', function () {

  describe('List components that should generate on load', function () {

  let list;
  beforeEach(function(){
  list = new List;
  });

    it('list should exist after we create it', function () {
      expect(list).to.be.an.instanceof(List);
    });

    it('it should have a property called contact that is an object', function () {
      expect(list).to.have.property('contact').that.is.an('object');;
    });

    it('it should have a property called title that is a string', function () {
      expect(list).to.have.property('title').that.is.a('string');
    });
});


// ******

  describe('Contact components that should generate on load', function () {

  let contact;
  beforeEach(function(){
  contact = new Contact;
  });

    it('contact should exist after we create it', function () {
      expect(contact).to.be.an.instanceof(Contact);
    });

    it('it should have a property called first name this is a string', function (){
      expect(contact).to.have.a.property('firstName').that.is.a('string');
    });

    it('it should have a property called last name this is a string', function (){
      expect(contact).to.have.a.property('lastName').that.is.a('string');
    });

    it('it should have a property called photo this is a string', function (){
      expect(contact).to.have.a.property('photo').that.is.a('string');
    });

    it('it should have a property called phoneNumber this is undefined', function (){
      expect(contact).to.have.a.property('phoneNumber').to.be.undefined;
    });

    it('it should have a property called city this is a string', function (){
      expect(contact).to.have.a.property('city').that.is.a('string');
    });

    it('it should have a property called state this is undefined', function (){
      expect(contact).to.have.a.property('state').to.be.undefined;
    });
  });
});
