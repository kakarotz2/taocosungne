import { combineReducers } from 'redux';
import userReducer from '../Reducers/user.reducer';
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
