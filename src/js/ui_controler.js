import { data } from './data';
import { elements } from './base';

export const addItem = (option, object) => {
    const item = `
        <li class="todo-list__item todo-list__item--%option%" id="%id%"><span class="todo-list__item-text">%text%</span>
        <span class="todo-list__edit">
            <i class="icon-basic-trashcan-remove todo-list__edit-trash"></i>
        </span>
    `
    let newItem = item.replace('%option%', option);
    newItem = newItem.replace('%id%', object.id);
    newItem = newItem.replace('%text%', object.text);

    const element = document.getElementById(object.id)
        if(typeof(element) != 'undefined' && element != null) {
            console.log('Error');
        } else {
            let htmlObject;
            if(option === 'to-do') {
                if(data.allItems.imp.length > 0) {
                    htmlObject = data.allItems.imp[data.allItems.imp.length - 1].id;
                    document.getElementById(htmlObject).insertAdjacentHTML('afterend', newItem);
                } else if(data.allItems.urg.length > 0) {
                    htmlObject = data.allItems.urg[0].id;
                    document.getElementById(htmlObject).insertAdjacentHTML('afterend', newItem);
                } else {
                    elements.to_do_list_box.insertAdjacentHTML('afterbegin' ,newItem);
                }
                
            } else if(option === 'urgent') {
                elements.to_do_list_box.insertAdjacentHTML('afterbegin' ,newItem);

            } else if(option === 'importand') {
                if(data.allItems.to_do.length > 0) {
                    htmlObject = data.allItems.to_do[data.allItems.to_do.length - 1].id;
                    document.getElementById(htmlObject).insertAdjacentHTML('beforebegin', newItem)
                } else if(data.allItems.urg.length > 0) {
                    htmlObject = data.allItems.urg[0].id;
                    document.getElementById(htmlObject).insertAdjacentHTML('afterend', newItem)
                } else {
                    elements.to_do_list_box.insertAdjacentHTML('afterbegin' ,newItem);
                }
            }
            
        }

};