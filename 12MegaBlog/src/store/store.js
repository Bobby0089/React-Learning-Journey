import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../store/authSlice';

const store = configureStore({  // store always need a reducer
    reducer: {
        auth : authSlice,
    }
})

export default store;