import { pageLoad } from './pageLoad'
import { menu } from './menu'
import { subMenuDiv } from './menu'
import { showDesserts, showMainDishes, showDrinks } from './menu'
import {desserts, mainDishes, drinks} from './menu';
pageLoad();

window.document.addEventListener('pageload', () => {
    tabsContent.classList.add('removed');
    subMenuDiv.classList.add('removed');
})

let menuTab = document.querySelector('#menuTab');
const homeTab = document.querySelector('#homeTab');
const contactsTab = document.querySelector('#contactsTab')
let tabsContent = document.querySelector('.images')

homeTab.addEventListener('click', () => { 
    subMenuDiv.classList.add('removed');
    tabsContent.classList.add('removed') 
})

contactsTab.addEventListener('click', () => {
    tabsContent.classList.add('removed');
    subMenuDiv.classList.add('removed');
})

menuTab.addEventListener('click', () => {
    menu();
    tabsContent.classList.remove('removed');
    subMenuDiv.classList.remove('removed');
})



desserts.addEventListener('click', showDesserts)
mainDishes.addEventListener('click', showMainDishes)
drinks.addEventListener('click', showDrinks)

export { tabsContent };