import { elements } from './base';
import * as ui_controler from './ui_controler';
// import * as to_do_cont from './to_do_cont';
import { ToDoCont } from './to_do_cont';



export default function addToDo() {
    // Po wcisnięciu add dodaje nowy element, musi być zaznaczona jedna z opcji
    let option;
    
    if(elements.new_list_box_text_input.value !== '') {
        for(let i = 0; i < elements.to_do_option.length; i++) {
            if(elements.to_do_option[i].checked) {
                option = elements.to_do_option[i].value;
            }
        }

        const To_do_cont = new ToDoCont(option, elements.new_list_box_text_input.value);
        // Dodanie elementu do kontrolera todo
        const newItem = To_do_cont.addItem();
        // Dodanie elementu html 
        ui_controler.addItem(option, newItem);

        // Reset input 
        elements.new_list_box_text_input.value = '';
    }

}