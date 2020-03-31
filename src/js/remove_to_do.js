import { data } from './data';


export default function remove_to_do() {
    document.querySelectorAll('.todo-list__edit-trash').forEach((item) => {
        item.addEventListener('click', ()=> {
            const element = item.parentElement.parentElement;
            const element_id = element.id;
            let opcjon;
            let soughtItem;
            let i = 0;
            if(typeof(element) != 'undefined' && element != null) {
                item.parentElement.parentElement.remove();
            }

            if(element_id.search('to-do') !== -1) {
                opcjon = 'to_do';
            } else if(element_id.search('urg') !== -1) {
                opcjon = 'urg';
            } else if(element_id.search('imp') !== -1) {
                opcjon = 'imp';
            }
            
            soughtItem = data.allItems[opcjon];

            soughtItem.forEach((item_x) => {
                if(item_x.id === element_id) {
                    data.allItems[opcjon].splice(1, i);
                    i = 0;
                }
                i++
            });
        });
    });
};