
import { configureStore } from '@reduxjs/toolkit';
import device from './deviceReducer';
const store = configureStore({
    reducer: {
        device 
    }
})
export default store;