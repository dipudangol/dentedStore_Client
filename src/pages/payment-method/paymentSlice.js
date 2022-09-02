import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    paymentMethods: {},
    selectedPM: {},
};

const paymentSlice = createSlice({
    name: "paymentMethod",
    initialState,
    reducers: {
        setPaymentMethods: (state, { payload }) => {
            state.paymentMethods = payload;
        },
        setSelectedPM: (state, { payload }) => {
            state.selectedPM = payload;
        },
    },
})

const { reducer, actions } = paymentSlice;
export const { setPaymentMethods, setSelectedPM } = actions;

export default reducer;

