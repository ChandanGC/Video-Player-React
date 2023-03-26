import { configureStore } from '@reduxjs/toolkit'
import bucketSlice from '../functionalities/bucketSlice';
import toggleSlice from "../functionalities/toggleSlice.js";
import historySlice from '../functionalities/historySlice';

const store = configureStore({
    reducer: {
        buckets : bucketSlice,
        toggle: toggleSlice,
        history: historySlice,
    }
});

export default store