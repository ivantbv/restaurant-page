import { contactsTabContent } from './index'
const phone = document.createElement('div')
const phoneNumber = document.createElement('div');
phone.textContent = 'For reservations:\n'
phoneNumber.textContent = '+1337-777-777'

function contact() {
    contactsTabContent.appendChild(phone);
    contactsTabContent.appendChild(phoneNumber)
}
export {contact};