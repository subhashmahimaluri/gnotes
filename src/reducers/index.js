import { combineReducers } from 'redux';
import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions';

function notes(state=[], action) {
  switch(action.type) {
    case ADD_NOTE:
      return [...state, {...action.notes, id: state.length}];
    case DELETE_NOTE:
        return state.filter((item)=>item.id !== action.id);
    case EDIT_NOTE:
      const updatedItems = state.map(item => {
        if(item.id === action.note.id){
          return { ...item, ...action.note }
        }
        return item
      });
      return updatedItems;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  notes
});

export default rootReducer;
