import { combineReducers } from 'redux';
import { routerReducer } from './router/routerReducer';
import { studentInfoReducer } from './studentInfo/studentInfoReducer';

export default combineReducers({
  router: routerReducer,
  studentInfo: studentInfoReducer,
});

