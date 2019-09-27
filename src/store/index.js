import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

const enhancer =
  process.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;
console.log(process);
const store = createStore(rootReducer);

export default store;
