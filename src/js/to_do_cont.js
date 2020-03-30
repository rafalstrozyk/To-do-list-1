// import data from './data';
import Urg from './urg';
import { Imp } from './imp';
import { Todo } from './todo';

const data = {
    allItems: {
        urg: [],
        imp: [],
        to_do: []
    } 
}

export const addItem = (opcjon, text) => {
    let ID, fullID, newItem, type;

    if(opcjon === 'urgent') {
        type = 'urg';
    } else if(opcjon === 'importand') {
        type = 'imp';
    } else if(opcjon === 'to-do') {
        type = 'to_do';
    }

    if(data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length -1].id + 1;
    } else {
        ID = 0;
    }

    if(opcjon === 'urgent') {
        fullID = 'urg-' + ID;
        newItem = new Urg(fullID, text);
    } else if(opcjon === 'importand') {
        fullID = 'imp-' + ID;
        newItem = new Imp(fullID, text);
    } else if(opcjon === 'to-do') {
        fullID = 'to-do-' + ID;
        newItem = new Todo(fullID, text);
    }

    data.allItems[type].push(newItem);

    return newItem
};