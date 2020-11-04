import glide from '@glidejs/glide';
import Glide from '@glidejs/glide'
new Glide('.images', {
    type: 'carousel',
    perView: 1,
    startAt: 0,
    focusAt: 'center',
    gap: 10,
}).mount()
import { tabsContent } from './index'

// let dessertsBool = false;
// let mainDishBool = false;
// let drinksBool = false;
const subMenuDiv = document.createElement('div');
const menuDiv = document.querySelector('.toAppendTo')
const desserts = document.createElement('h4');
const mainDishes = document.createElement('h4');
const drinks = document.createElement('h4');
desserts.textContent = 'Desserts';
mainDishes.textContent = 'Main Dishes';
drinks.textContent = 'Drinks';

const firstImage = document.createElement('img');
const secondImage = document.createElement('img');
const thirdImage = document.createElement('img');
const glideSlides = document.getElementsByClassName('glide__slide');
const lastSlide = glideSlides[glideSlides.length-1];
const firstSlide = glideSlides[0]
subMenuDiv.classList.add('sub-navbar');

    glideSlides[3].appendChild(thirdImage);
    glideSlides[2].appendChild(secondImage);
    glideSlides[1].appendChild(firstImage);
    lastSlide.remove();

function showDesserts() {
    thirdImage.src = '/images/pancakes.jpg';
    secondImage.src = '/images/cake.jpg';
    firstImage.src = '/images/fruit-salad.jpg';
}

function showMainDishes() {
    firstImage.src = '/images/pumpkin.jpg'
    secondImage.src = '/images/tortilla.jpg';
    thirdImage.src = '/images/pasta.jpg';
}

function showDrinks() {
    firstImage.src = '/images/tea.jpg'
    secondImage.src = '/images/hot-chocolate.jpg';
    thirdImage.src = '/images/coffee.jpg';
}

function menu() {
subMenuDiv.appendChild(mainDishes);
subMenuDiv.appendChild(desserts);
subMenuDiv.appendChild(drinks);

menuDiv.appendChild(subMenuDiv);
}

export { menu }
export { subMenuDiv, menuDiv }
export { showDesserts, showMainDishes, showDrinks }
export {desserts, mainDishes, drinks, glideSlides}