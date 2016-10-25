import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

const preLoadedState = {
  notes: []
};

const configureStore = () => (
  createStore(rootReducer, preLoadedState)
);

export default configureStore;
