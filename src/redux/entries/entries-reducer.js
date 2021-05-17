import actionTypes from './entries-types';
import { v4 as uuidv4 } from 'uuid';

const entryReducer = (state = [], action) => {
    switch (action.type) {
        case (actionTypes.addEntry):
            return [...state, {
                id: uuidv4(),
                name: action.payload.currName,
                number: action.payload.currNumber,
            }];
        
        case (actionTypes.deleteEntry):
            return state.filter(entry => entry.id !== action.payload);
        
        default: return state;
    }
}



export { entryReducer };
