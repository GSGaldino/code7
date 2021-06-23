import { createStore } from 'redux';
import drawerReducer from './features/drawer/drawerReducer';

const store = createStore(drawerReducer);

store.dispatch({
  type: "open"
});

export default store;
