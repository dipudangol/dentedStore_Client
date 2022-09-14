import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./pages/login/userSlice";
import systemReducer from "./pages/system-state/systemSlice";
import categoryReducer from "./pages/categories/categorySlice";
import paymentReducer from "./pages/payment-method/paymentSlice";
import productReducer from "./pages/products/productSlice";
import orderReducer from "./pages/orders/orderSlice";

const store = configureStore({
    reducer: {
        admin: userReducer,
        system: systemReducer,
        category: categoryReducer,
        paymentMethod: paymentReducer,
        products: productReducer,
        orders: orderReducer,
    },
});


export default store;

