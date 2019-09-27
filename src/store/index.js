import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

const enhancer =
  process.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;
const store = createStore(rootReducer, enhancer);

export default store;
