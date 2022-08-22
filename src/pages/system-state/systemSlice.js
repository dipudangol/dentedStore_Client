import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    showSideMenu: false,
};

const systemSlice = createSlice({
    name: "adminSystem",
    initialState,
    reducers: {
        setShowSideMenu: (state, { payload }) => {
            state.showSideMenu = payload;
        },
    },
})

const { reducer, actions } = systemSlice;
export const { setShowSideMenu } = actions;

export default reducer;

