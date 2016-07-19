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

removeUser(e, id){
  this.list.contacts.forEach((con, index) =>{
    let specificUser = e.currentTarget;
    console.log(con, index);
    console.log(specificUser);
    if (specificUser.taskid == con.firstName) {
      console.log('Inside if user');
      this.list.contacts.splice(index - 1, index);
    }
  });
  // this.list.contacts.splice(0, );
  // console.log(this.list.contacts);
  $('.contact-list').empty();
  this.list.contacts.forEach((con, index)=>{
    let contact = this.contactTemplate(con);
    $('.contact-list').append(contact);
  })

}

contactClick(){
    this.container.on('click', 'li', (event) => {
      event.preventDefault();

      let id = $(event.target).data('contactid');
      let contactid = _.find(this.list.contacts, { id: id });

      this.removeUser(event, contactid);
      // $(event.currentTarget).toggleClass('removed');

    });
  }

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

        this.addContact(newContact);

        });
    }

    contactTemplate(contact){
        return `
        <div class="userLineItem"><li data-taskid="${contact.firstName}${contact.lastName}">
        <img src="${contact.photoURL}" class="userPhoto">
        <span class"listName">${contact.firstName} ${contact.lastName}</span><br>
        <span class"phoneNumber">${contact.phoneNumber}</span>
        <span class"city-state">${contact.city}, ${contact.state}</span>
        </li></div>
        `;
      }


}

export {AppController};
