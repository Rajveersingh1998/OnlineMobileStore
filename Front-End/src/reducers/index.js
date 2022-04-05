import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import signinReducer from './signinReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  cartItems: cartReducer,
  isSignin: signinReducer,
  isTrue:userReducer
})

export default reducers
