// External Libraries
import $ from 'jquery';
import _ from 'lodash';

// Internal Classes

import {AppController} from './controllers/app-controller';
import {List} from './models/list';
import {Contact} from './models/contact';

// Set constants and variables
const addContactForm   = $('.addContact');
const contactContainer = $('.contact-list');

let list = new List('Contact List');
let app  = new AppController(addContactForm, contactContainer, list);

app.init();
