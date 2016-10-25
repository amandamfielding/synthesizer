import {KEY_PRESSED,KEY_RELEASED} from '../actions/notes_actions';
import {NOTE_NAMES} from '../util/tones';

const notesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case KEY_PRESSED:
    // debugger;
      if ((!state.includes(action.key)) && (NOTE_NAMES.includes(action.key))) {
        return [
          ...state, action.key
        ];
      } else  {
        return state;
      }
    case KEY_RELEASED:
      if (state.includes(action.key)) {
        const idx = state.indexOf(action.key);
        return [
          state.slice(0,idx),
          state.slice(idx+1)
        ];
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default notesReducer;
