import { pageLoad } from './pageLoad'
import jTabs from 'jtabs';
pageLoad();


var container = document.querySelector('.tabs-container');
 
jTabs({
    container      : container,
    buttons        : container.querySelectorAll('.btn-js'),
    tabs           : container.querySelectorAll('.tab-js'),
    activeBtnClass : 'btn-active-js',
    activeTabClass : 'tab-active-js'
});
