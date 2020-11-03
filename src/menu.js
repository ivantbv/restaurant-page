import glide from '@glidejs/glide';
import Glide from '@glidejs/glide'
new Glide('.images', {
    type: 'carousel',
    perView: 1,
    startAt: 0,
    focusAt: 'center',
    gap: 40,
}).mount()
import { tabsContent } from './index'

let dessertsBool = false;
let mainDishBool = false;
let drinksBool = false;


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

// firstImage.classList.add('first');
// secondImage.classList.add('second');
// thirdImage.classList.add('third')

// const firstLi = document.querySelector('.pumpkin')
// const secondLi = document.querySelector('.tortilla')
// const thirdLi = document.querySelector('.pasta')

const glideSlides = document.getElementsByClassName('glide__slide');
const lastSlide = glideSlides[glideSlides.length-1];

console.log(glideSlides);

subMenuDiv.classList.add('sub-navbar');
glideSlides[3].appendChild(thirdImage);
 glideSlides[2].appendChild(secondImage);
 glideSlides[1].appendChild(firstImage);

function showDesserts() {
    dessertsBool = true;
    mainDishBool = false;
    thirdImage.src = '/images/pancakes.jpg';
    secondImage.src = '/images/cake.jpg';
    firstImage.src = '/images/fruit-salad.jpg';
}

function showMainDishes() {
    mainDishBool = true
    dessertsBool = false;
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

// thirdPic.src = '/images/pancakes.jpg';
// secondPic.src = '/images/cake.jpg';
// firstPic.src = '/images/fruit-salad.jpg';

subMenuDiv.appendChild(mainDishes);
subMenuDiv.appendChild(desserts);
subMenuDiv.appendChild(drinks);

menuDiv.appendChild(subMenuDiv);

    //menu tab when clicked will have 2 more tabs in itself:
    //menu with dishes
    //menu with drinks
    //they should have ingridients and price on the left
    //they should have arrow to check the next drink/dish on the right

    // menuDiv.textContent = dish
    // menuDish.textContent = ingredients

    // tabsContent.appendChild(menuDiv);
    // tabsContent.appendChild(menuPic);
    // tabsContent.appendChild(menuDish);
}

export { menu }
export { subMenuDiv }
export { showDesserts, showMainDishes, showDrinks }
export {desserts, mainDishes, drinks}
//Put the contents of each ‘tab’ inside of it’s own module. 
//Each module will export a function that creates a div element, adds 
//the appropriate content and styles to that element and then appends it
//to the DOM.