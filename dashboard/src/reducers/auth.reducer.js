import { createSlice } from "@reduxjs/toolkit";

const AuthReducer = createSlice({
    name: 'auth',
    initialState: {
        _id: '',
        name: '',
        username: '',
        refresh: false,
    },
    reducers: {
        setRefreshAuth: (state) => {
            state.refresh = !state.refresh;
        },
        setInfoAuth: (state, { payload: { _id, name, username } }) => {
            state._id = _id;
            state.name = name;
            state.username = username;
        }
    }
});
export const { setInfoAuth, setRefreshAuth } = AuthReducer.actions;
export default AuthReducer.reducer;