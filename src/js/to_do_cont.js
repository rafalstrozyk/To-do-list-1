// import data from './data';
import Urg from './urg';
import Imp from './imp';
import Todo from './todo';
import { data } from './data';


export class ToDoCont {
    constructor (opcjon, text) {
        this.opcjon = opcjon;
        this.text = text;
    }

    addItem() {
        let ID, fullID, newItem, type;
        if(this.opcjon === 'urgent') {
            type = 'urg';
        } else if(this.opcjon === 'importand') {
            type = 'imp';
        } else if(this.opcjon === 'to-do') {
            type = 'to_do';
        }
    
        if(data.allItems[type].length > 0) {
            const item = data.allItems[type]
            ID = item[data.allItems[type].length-1].numID + 1;
        } else {
            ID = 0;
        }
    
        if(this.opcjon === 'urgent') {
            fullID = 'urg-' + ID;
            newItem = new Urg(fullID, ID, this.text);
        } else if(this.opcjon === 'importand') {
            fullID = 'imp-' + ID;
            newItem = new Imp(fullID, ID, this.text);
        } else if(this.opcjon === 'to-do') {
            fullID = 'to-do-' + ID;
            newItem = new Todo(fullID, ID, this.text);
        }
    
        data.allItems[type].push(newItem);
    
        return newItem
    };

}
