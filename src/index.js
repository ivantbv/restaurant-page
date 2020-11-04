import { pageLoad } from './pageLoad'
import {desserts, mainDishes, drinks, menu, showDesserts,
        showMainDishes, showDrinks, subMenuDiv } from './menu'
import { home } from './home'
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
    home();
})

homeTab.addEventListener('click', () => { 
    home();
    subMenuDiv.classList.add('removed');
    tabsContent.classList.add('removed');
    contactsTabContent.classList.add('removed');
    homeTabContent.classList.remove('removed')
})

contactsTab.addEventListener('click', () => {
    tabsContent.classList.add('removed');
    subMenuDiv.classList.add('removed');
    homeTabContent.classList.add('removed');
    contactsTabContent.classList.remove('removed');
})

menuTab.addEventListener('click', () => {
    menu();
    showMainDishes();
    tabsContent.classList.remove('removed');
    subMenuDiv.classList.remove('removed');
    homeTabContent.classList.add('removed');
    contactsTabContent.classList.add('removed');
    
})

desserts.addEventListener('click', showDesserts)
mainDishes.addEventListener('click', showMainDishes)
drinks.addEventListener('click', showDrinks)

export { tabsContent, homeTabContent };