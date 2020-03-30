import { elements } from './base';

export default function efects() {

    elements.new_list_box_text_input.addEventListener('focus', () => {
        const html = `
        <div class="new-list-box__options" id="new-list-box__options">
            <ul class="new-list-box__list">
                <li class="new-list-box__option">
                    <input type="radio" name="to-do-oprion" class="new-list-box__option-radio" id="urgent">
                    <label class="new-list-box__label" for="urgent">
                        <span class="new-list-box__label-radio-button new-list-box__label-radio-button--1"></span>
                        Urgent
                    </label>
                </li>
                <li class="new-list-box__option">
                    <input type="radio" name="to-do-oprion" class="new-list-box__option-radio" id="importand">
                    <label class="new-list-box__label" for="importand">
                        <span class="new-list-box__label-radio-button new-list-box__label-radio-button--2"></span>
                        Importand
                    </label>
                </li>
                <li class="new-list-box__option">
                    <input type="radio" name="to-do-oprion" class="new-list-box__option-radio" checked id="to-do">
                    <label class="new-list-box__label" for="to-do">
                        <span class="new-list-box__label-radio-button new-list-box__label-radio-button--3"></span>
                        To do
                    </label>
                </li>
            </ul>
        </div>
    `
        const element = document.getElementById('new-list-box__options')
        if(typeof(element) != 'undefined' && element != null) {
        
        } else {
            elements.new_list_box.insertAdjacentHTML('beforeend', html);
        }
    });  
    
    elements.btn_add.addEventListener('click', () => {
        let element = document.getElementById('new-list-box__options')
        if(typeof(element) != 'undefined' && element != null) {
            element.style.opacity = '0';
            setTimeout(() => {element.remove();}, 300);
        }
    });

}


