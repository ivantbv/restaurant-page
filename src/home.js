import {homeTabContent} from  './index'

const vikingDrinking = document.createElement('img')
vikingDrinking.src = '/dist/images/logo_transparent.png'
const welcomeMsg = document.createElement('h5')
const description = document.createElement('p');
const description2 = document.createElement('p');
welcomeMsg.textContent = 'Welcome to Valhalla\'s where food dreams come true'
description.textContent = 'Check out our menu and choose from the variety of dishes, desserts and drinks' 
description2.textContent = 'Make a reservation or contact us from the contacts tab'

function home() {
    homeTabContent.appendChild(vikingDrinking);
    homeTabContent.appendChild(welcomeMsg);
    homeTabContent.appendChild(description);
    homeTabContent.appendChild(description2);
}

export { home }