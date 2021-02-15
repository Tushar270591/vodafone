import {combineReducers} from 'redux';
import * as actions from '../types';
import reducer from './reducer';

const appReducer = combineReducers({
  reducer,
});

const rootReducer = (state, action) => {
  if (action.type === actions.TEST_ACTION) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
