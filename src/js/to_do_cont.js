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
            // const value = data.allItems[type].length - 1;
            ID = data.allItems[type].id + 1;
        } else {
            ID = 0;
        }
    
        if(this.opcjon === 'urgent') {
            fullID = 'urg-' + ID;
            newItem = new Urg(fullID, this.text);
        } else if(this.opcjon === 'importand') {
            fullID = 'imp-' + ID;
            newItem = new Imp(fullID, this.text);
        } else if(this.opcjon === 'to-do') {
            fullID = 'to-do-' + ID;
            newItem = new Todo(fullID, this.text);
        }
    
        data.allItems[type].push(newItem);
    
        return newItem
    };

}
// const data = {
//     allItems: {
//         urg: [],
//         imp: [],
//         to_do: []
//     } 
// }

// export const addItem = (opcjon, text) => {
//     let ID, fullID, newItem, type;
//     console.log('działam');

//     if(opcjon === 'urgent') {
//         type = 'urg';
//     } else if(opcjon === 'importand') {
//         type = 'imp';
//     } else if(opcjon === 'to-do') {
//         type = 'to_do';
//     }

//     if(data.allItems[type].length > 0) {
//         ID = data.allItems[type][data.allItems[type].length -1].id + 1;
//     } else {
//         ID = 0;
//     }

//     if(opcjon === 'urgent') {
//         fullID = 'urg-' + ID;
//         newItem = new Urg(fullID, text);
//     } else if(opcjon === 'importand') {
//         fullID = 'imp-' + ID;
//         newItem = new Imp(fullID, text);
//     } else if(opcjon === 'to-do') {
//         fullID = 'to-do-' + ID;
//         newItem = new Todo(fullID, text);
//     }

//     data.allItems[type].push(newItem);

//     return newItem
// };