import Glide from '@glidejs/glide'
new Glide('.images', {
    type: 'carousel',
    perView: 1,
    startAt: 0,
    focusAt: 'center',
    gap: 40,
}).mount()

const tabsContent = document.querySelector('.tabs-content')
const menuDiv = document.createElement('div');
const menuPic = document.createElement('div');
const menuDish = document.createElement('p')

menuDish.classList.toggle('menuDish');
menuDiv.classList.toggle('displayed');
menuPic.classList.toggle('menu-pic');

function menu(dish, ingredients) {
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
//Put the contents of each ‘tab’ inside of it’s own module. 
//Each module will export a function that creates a div element, adds 
//the appropriate content and styles to that element and then appends it
//to the DOM.