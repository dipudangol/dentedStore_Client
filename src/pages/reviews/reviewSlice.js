import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    reviews: [],
};

const reviewslice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        setReviews: (state, { payload }) => {
            state.reviews = payload;
        },

    },
})

const { reducer, actions } = reviewslice;
export const { setReviews } = actions;

export default reducer;

