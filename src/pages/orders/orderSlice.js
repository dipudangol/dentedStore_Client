import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    orders: [],
    selectedOrder: {},
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setOrders: (state, { payload }) => {
            state.orders = payload;
        },
        setSelectedOrders: (state, { payload = {} }) => {
            state.selectedOrder = payload;
        },
    },
})

const { reducer, actions } = orderSlice;
export const { setOrders, setSelectedOrders } = actions;

export default reducer;

