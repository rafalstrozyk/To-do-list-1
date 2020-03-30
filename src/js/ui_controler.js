import { elements } from './base';

export const addItem = (option, object) => {
    const item = `
    <li class="todo-list__item todo-list__item--%option%" id="%id%"><span class="todo-list__item-text">%text%</span>
    <span class="todo-list__edit">
        <i class="icon-basic-trashcan-remove todo-list__edit-trash"></i>
        <button class="btn-edit todo-list__edit-button">Edit</button>
    </span>
    `

    let newItem = item.replace('%option%', option);
    newItem = newItem.replace('%id%', object.id);
    newItem = newItem.replace('%text%', object.text);

    const element = document.getElementById(object.id)
        if(typeof(element) != 'undefined' && element != null) {
            // elements.to_do_list_box.insertAdjacentHTML('beforeend' ,newItem)
            console.log('Error');
        } else {
            elements.to_do_list_box.insertAdjacentHTML('afterbegin' ,newItem);
        }

};