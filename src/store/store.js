import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
// import { createStore } from 'react-redux';
// import rootReducer from './reducer'


	const store = configureStore ({
		reducer :{
			auth : authSlice,
		}
	})
// const store  
export default store;