import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./pages/login/userSlice";
import systemReducer from "./pages/system-state/systemSlice";
import categoryReducer from "./pages/categories/categorySlice";
import paymentSlice from "./pages/payment-method/paymentSlice";


const store = configureStore({
    reducer: {
        admin: userReducer,
        system: systemReducer,
        category: categoryReducer,
        paymentMethod: paymentSlice,
    },
});


export default store;

