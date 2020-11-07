import Glide from '@glidejs/glide'
new Glide('.images', {
    type: 'carousel',
    perView: 1,
    startAt: 0,
    focusAt: 'center',
    gap: 10,
}).mount()

const subMenuDiv = document.createElement('div');
const menuDiv = document.querySelector('.toAppendTo')
const desserts = document.createElement('h4');
const mainDishes = document.createElement('h4');
const drinks = document.createElement('h4');
desserts.textContent = 'Desserts';
mainDishes.textContent = 'Main Dishes';
drinks.textContent = 'Drinks';

const fruitSalad = document.createElement('p');
fruitSalad.textContent = 'Fruit Salad'
const cheeseCake = document.createElement('p');
cheeseCake.textContent = 'Cheesecake'
const pancakes = document.createElement('p');
pancakes.textContent = 'Pancakes with syrup and raspberries'

const pumpkin = document.createElement('p');
pumpkin.textContent = 'Pumpkin Soup with cream'
const tortilla = document.createElement('p');
tortilla.textContent = 'Tortilla'
const pasta = document.createElement('p');
pasta.textContent = 'Spaghetti'

const tea = document.createElement('p');
tea.textContent = 'Green Tea'
const coffee = document.createElement('p');
coffee.textContent = 'Coffee with cream'
const hotChocolate = document.createElement('p');
hotChocolate.textContent = 'Hot Chocolate'

const firstImage = document.createElement('img');
firstImage.classList.add('firstImg')
const secondImage = document.createElement('img');
secondImage.classList.add('secondImg');
const thirdImage = document.createElement('img');
thirdImage.classList.add('thirdImg');
const glideSlides = document.getElementsByClassName('glide__slide');
const lastSlide = glideSlides[glideSlides.length-1];
subMenuDiv.classList.add('sub-navbar');

function showDesserts() {
    dishDescription(fruitSalad, cheeseCake, pancakes)
    thirdImage.src = 'images/pancakes.jpg';
    secondImage.src = 'images/cake.jpg';
    firstImage.src = 'images/fruit-salad.jpg';   
}

function showMainDishes() {
    dishDescription(pumpkin, tortilla, pasta)
    firstImage.src = 'images/pumpkin.jpg'
    secondImage.src = 'images/tortilla.jpg';
    thirdImage.src = 'images/pasta.jpg';
}

function showDrinks() {
    dishDescription(tea,hotChocolate, coffee)
    firstImage.src = 'images/tea.jpg'
    secondImage.src = 'images/hot-chocolate.jpg';
    thirdImage.src = 'images/coffee.jpg';
}

function menu() {
subMenuDiv.appendChild(mainDishes);
subMenuDiv.appendChild(desserts);
subMenuDiv.appendChild(drinks);
menuDiv.appendChild(subMenuDiv);
}

function dishDescription(first,second,third) {
    if (glideSlides[1].children[1] || glideSlides[2].children[1] || glideSlides[3].children[1]) {
        glideSlides[1].children[1].remove()
        glideSlides[2].children[1].remove()
        glideSlides[3].children[1].remove()
        }  
        glideSlides[1].appendChild(first);
        glideSlides[2].appendChild(second);
        glideSlides[3].appendChild(third);
}

glideSlides[3].appendChild(thirdImage);
glideSlides[2].appendChild(secondImage);
glideSlides[1].appendChild(firstImage);
lastSlide.remove();

export { menu }
export { subMenuDiv, menuDiv }
export { showDesserts, showMainDishes, showDrinks }
export {desserts, mainDishes, drinks, glideSlides}