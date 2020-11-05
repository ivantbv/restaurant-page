import { contactsTabContent } from './index'
const phone = document.createElement('div')
const phoneNumber = document.createElement('div');
//const address = document.createElement('div');

phone.textContent = 'For reservations:\n'
phoneNumber.textContent = '+1337-777-777'
//address.textContent = 'Location:'

function contact() {
    contactsTabContent.appendChild(phone);
    contactsTabContent.appendChild(phoneNumber)
   // contactsTabContent.appendChild(address);
}

export {contact};