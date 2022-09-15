import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./pages/login/userSlice";
import systemReducer from "./pages/system-state/systemSlice";
import categoryReducer from "./pages/categories/categorySlice";
import paymentReducer from "./pages/payment-method/paymentSlice";
import productReducer from "./pages/products/productSlice";
import orderReducer from "./pages/orders/orderSlice";
import clientReducer from "./pages/customers/customerSlice";
import reviewReducer from "./pages/reviews/reviewSlice";

const store = configureStore({
    reducer: {
        admin: userReducer,
        system: systemReducer,
        category: categoryReducer,
        paymentMethod: paymentReducer,
        products: productReducer,
        orders: orderReducer,
        users: clientReducer,
        review: reviewReducer,
    },
});


export default store;

