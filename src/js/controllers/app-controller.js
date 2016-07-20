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
      this.contactDelete();
      this.formSubmit();
    }

  addContact(newContact){

  let contactHTML = this.contactTemplate(newContact);

  this.list.contacts.push(newContact);

  this.container.append(contactHTML);
}

refreshContactList(){
  $('.contact-list').empty();
  this.list.contacts.forEach((con, index)=>{
    let contact = this.contactTemplate(con);
    $('.contact-list').append(contact);
  })

}

contactDelete() {

    this.container.on('click', 'li', (event) => {
        event.preventDefault();

        if (confirm('Are you sure you want to delete this contact?')) {
          let id = $(event.target).data('taskid');
          this.list.contacts = _.reject(this.list.contacts, {id: id});
          this.refreshContactList();
        } else {
        }
  });
};

  formSubmit(){

      this.form.on('submit', (event) => {
        event.preventDefault();
        let newContact = {};
        newContact.firstName = this.form.find('.first-name').val();
        newContact.lastName = this.form.find('.last-name').val();
        newContact.photoURL = this.form.find('.photo').val();
        newContact.phoneNumber = this.form.find('.phone-number').val();
        newContact.city = this.form.find('.city').val();
        newContact.state = this.form.find('.state').val();
        newContact.id = _.random(1, 10000);

        this.addContact(newContact);

        });
    }

    contactTemplate(contact){
        return `
        <div class="userLineItem"><li data-taskid="${contact.id}">
        <img src="${contact.photoURL}" class="userPhoto">
        <span class"listName">${contact.firstName} ${contact.lastName}</span><br>
        <span class"phoneNumber">${contact.phoneNumber}</span>
        <span class"city-state">${contact.city}, ${contact.state}</span>
        </li></div>
        `;
      }


}

export {AppController};
