const pageLoad = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    h1.textContent = 'Valhalla\'s ';
    const h3 = document.createElement('h3');
    h3.textContent = 'Godly taste';
    content.appendChild(h1)
    content.appendChild(h3);
}

export { pageLoad };

