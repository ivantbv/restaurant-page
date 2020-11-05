import { pageLoad } from './pageLoad'
import {desserts, mainDishes, drinks, menu, showDesserts,
        showMainDishes, showDrinks, subMenuDiv } from './menu'
import { home } from './home'
import { contact } from './contact'
pageLoad();

const menuTab = document.querySelector('#menuTab');
const homeTab = document.querySelector('#homeTab');
const contactsTab = document.querySelector('#contactsTab');
const tabsContent = document.querySelector('.images');
const homeTabContent = document.querySelector('.divHome');
const contactsTabContent = document.querySelector('.contacts');

window.addEventListener('load', () => {
    tabsContent.classList.add('removed');
    subMenuDiv.classList.add('removed');
    contactsTabContent.classList.add('removed');
    homeTab.classList.add('colorKeep');
    home();
})

homeTab.addEventListener('click', () => { 
    home();
    subMenuDiv.classList.add('removed');
    tabsContent.classList.add('removed');
    contactsTabContent.classList.add('removed');
    homeTabContent.classList.remove('removed')

    homeTab.classList.add('colorKeep');
    menuTab.classList.remove('colorKeep');
    contactsTab.classList.remove('colorKeep');

    desserts.classList.remove('colorKeep')
    mainDishes.classList.remove('colorKeep');
    drinks.classList.remove('colorKeep');
})

contactsTab.addEventListener('click', () => {
    contact();
    tabsContent.classList.add('removed');
    subMenuDiv.classList.add('removed');
    homeTabContent.classList.add('removed');
    contactsTabContent.classList.remove('removed');
    
    homeTab.classList.remove('colorKeep')
    contactsTab.classList.add('colorKeep');
    menuTab.classList.remove('colorKeep');

    desserts.classList.remove('colorKeep')
    mainDishes.classList.remove('colorKeep');
    drinks.classList.remove('colorKeep');
})

menuTab.addEventListener('click', () => {
    menu();
    showMainDishes();
    tabsContent.classList.remove('removed');
    subMenuDiv.classList.remove('removed');
    homeTabContent.classList.add('removed');
    contactsTabContent.classList.add('removed');

    contactsTab.classList.remove('colorKeep');
    homeTab.classList.remove('colorKeep')
    menuTab.classList.add('colorKeep');

    mainDishes.classList.add('colorKeep')
    // menuTab.style.backgroundColor = 'rgba(100, 92, 92, 0.747)';
    // contactsTab.style.backgroundColor = 'none'
})

desserts.addEventListener('click', () => {
    showDesserts()
    desserts.classList.add('colorKeep')
    mainDishes.classList.remove('colorKeep');
    drinks.classList.remove('colorKeep');
})
mainDishes.addEventListener('click', () => {
    showMainDishes()
    desserts.classList.remove('colorKeep')
    mainDishes.classList.add('colorKeep');
    drinks.classList.remove('colorKeep');
})
drinks.addEventListener('click', () => {
    showDrinks()
    desserts.classList.remove('colorKeep')
    mainDishes.classList.remove('colorKeep');
    drinks.classList.add('colorKeep');
})

export { tabsContent, homeTabContent, contactsTabContent };