import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    paymentMethods: {},
};

const paymentSlice = createSlice({
    name: "paymentMethod",
    initialState,
    reducers: {
        setPaymentMethods: (state, { payload }) => {
            state.paymentMethods = payload;
        },
    },
})

const { reducer, actions } = paymentSlice;
export const { setPaymentMethods } = actions;

export default reducer;

