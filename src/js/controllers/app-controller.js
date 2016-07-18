import _ from 'lodash';
import $ from 'jquery';
import {Contact} from '../models/contact';

class AppController {
  constructor (form, container, list) {
    this.form      = form;
    this.container = container;
    this.list      = list;
  }

  init () {
      this.contactClick();
      this.formSubmit();
    }

  addContact(newContact){

  let contactHTML = this.contactTemplate(newContact);

  this.list.contacts.push(newContact);

  this.container.append(contactHTML);
}

contactClick(){
    this.container.on('click', 'li', (event) => {
      event.preventDefault();

      let id = $(event.target).data('contactid');
      let contactid = _.find(this.list.contacts, { id: id });


      // contact.toggleComplete();
      console.log(event);

      $(event.currentTarget).toggleClass('removed');

    });
  }


  formSubmit(){
      this.form.on('submit', (event) => {
        event.preventDefault();
        let newContact = {}
        newContact.firstName = this.form.find('.first-name').val();
        newContact.lastName = this.form.find('.last-name').val();
        newContact.photoURL = this.form.find('.photo').val();
        newContact.phoneNumber = this.form.find('.phone-number').val();
        newContact.city = this.form.find('.city').val();
        newContact.state = this.form.find('.state').val();

        this.addContact(newContact);

        });
    }

    contactTemplate(contact){
        return `
        <li data-taskid="${contact.firstName}${contact.lastName}">
        <img src="${contact.photoURL}">
        <span class"listName">${contact.firstName} ${contact.lastName}</span><br>
        <span class"phoneNumber">${contact.phoneNumber}</span>
        <span class"city-state">${contact.city}, ${contact.state}</span>
        </li>
        `;
      }


}

export {AppController};
