import { createSlice } from "@reduxjs/toolkit";

const LoaderReducer = createSlice({
    name: 'loader',
    initialState: {
        show: false
    },
    reducers: {
        setLoader: (state, { payload }) => {
            state.show = payload
        }
    }
});
export const { setLoader } = LoaderReducer.actions;
export default LoaderReducer.reducer;