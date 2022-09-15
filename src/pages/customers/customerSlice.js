import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    users: [],
};

const userslice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setusers: (state, { payload }) => {
            state.users = payload;
        },

    },
})

const { reducer, actions } = userslice;
export const { setusers, } = actions;

export default reducer;

