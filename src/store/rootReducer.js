import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import artists from './artist/reducer';

const root = combineReducers({
  artists,
  router: routerReducer,
});

export default root;
