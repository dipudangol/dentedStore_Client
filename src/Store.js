import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./pages/login/userSlice";
import systemReducer from "./pages/system-state/systemSlice";
import categoryReducer from "./pages/categories/categorySlice";


const store = configureStore({
    reducer: {
        admin: userReducer,
        system: systemReducer,
        category: categoryReducer,
    },
});


export default store;

