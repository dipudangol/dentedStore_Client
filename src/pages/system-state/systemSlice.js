import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    showSideMenu: false,
    modelShow: true,
};

const systemSlice = createSlice({
    name: "adminSystem",
    initialState,
    reducers: {
        setShowSideMenu: (state, { payload }) => {
            state.showSideMenu = payload;
        },
        setModalShow: (state) => {
            state.modelShow = !state.modelShow;
        },
    },
})

const { reducer, actions } = systemSlice;
export const { setShowSideMenu, setModalShow } = actions;

export default reducer;

