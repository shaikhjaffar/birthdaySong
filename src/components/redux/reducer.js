
import { combineReducers } from 'redux';
import stepReducer from './stepreducer';
import { addDataReducer } from './addDatareducer';

const rootReducer = combineReducers({
  step: stepReducer,
  data : addDataReducer
});

export default rootReducer;
