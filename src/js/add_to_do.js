import { elements } from './base';
import * as ui_controler from './ui_controler';
import * as to_do_cont from './to_do_cont';



export default function addToDo() {
    // Po wcisnięciu add dodaje nowy element, musi być zaznaczona jedna z opcji
    elements.btn_add.addEventListener('click', (event) => {
        if(elements.new_list_box_text_input.value !== '') {
            console.log('Dodawanie')
            // Dodanie elementu do kontrolera todo
            const newItem = to_do_cont.addItem('urgent', elements.new_list_box_text_input.value);
            // Dodanie elementu html 
            ui_controler.addItem('urgent', newItem);
        }
    });

}