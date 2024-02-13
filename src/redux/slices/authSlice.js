import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
    },
    reducers: {
        loginSuccess(state, action) {
            const { user } = action.payload;
            state.user = user;
        },
    }
});

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authActions, authReducer };