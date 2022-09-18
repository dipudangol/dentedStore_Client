import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: {},
    adminUsers: [],
};

const userSlice = createSlice({
    name: "adminUser",
    initialState,
    reducers: {
        setAdminUser: (state, { payload }) => {
            state.user = payload;
        },
        setAllAdminUser: (state, { payload }) => {
            state.adminUsers = payload;
        },
    }, 
})

const { reducer, actions } = userSlice;
export const { setAdminUser, setAllAdminUser } = actions;

export default reducer;

