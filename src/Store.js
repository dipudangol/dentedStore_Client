import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./pages/login/userSlice";



const store = configureStore({
    reducer: {
        admin: userReducer,
    },
});


export default store;

