import efects from './efects';
import addToDo from './add_to_do';
import { elements } from './base';
import remove_to_do from './remove_to_do';
import { data } from './data';


window.data = data;

efects();

elements.btn_add.addEventListener('click', () => {
    addToDo();
    remove_to_do();
    
});


document.addEventListener('keypress', (event) =>{
    if(event.keyCode === 13 || event.which === 13) {
        addToDo();
        remove_to_do();
    }
});






