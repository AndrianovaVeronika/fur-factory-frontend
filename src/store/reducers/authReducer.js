import initialState from "../initialState";
import {createSlice} from "@reduxjs/toolkit";
import {logOut, signIn, updateCredentials, verifyUserAccess} from "../actions/auth";

const {reducer} = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // omit existing reducers here
    },
    extraReducers(builder) {
        builder
            .addCase(signIn.fulfilled, (state, action) => {
                state.auth.currentUser = action.payload;
                state.auth.isAuth = true;
                if (action.payload.roles.includes('admin')) {
                    state.auth.isAdmin = true;
                }
                if (action.payload.roles.includes('master')) {
                    state.auth.isMasterAccount = true;
                }
                sessionStorage.setItem("TOKEN", action?.payload?.accessToken);
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.auth.currentUser = {};
                state.auth.isAuth = false;
                state.auth.isAdmin = false;
                state.auth.isMasterAccount = false;
                sessionStorage.clear();
            })
            .addCase(verifyUserAccess.fulfilled, (state, action) => {
                state.auth.userLoading = false;
                state.auth.isAuth = true;
                state.auth.currentUser = action.payload;
                if (action.payload.roles.includes('admin')) {
                    state.auth.isAdmin = true;
                }
                if (action.payload.roles.includes('master')) {
                    state.auth.isMasterAccount = true;
                }
            })
            .addCase(verifyUserAccess.rejected, (state, action) => {
                state.auth.userLoading = false;
                state.auth.isAuth = false;
                state.auth.currentUser = {};
                state.auth.isAdmin = false;
                state.auth.isMasterAccount = false;
            })
            // .addCase(verifyEmailState.fulfilled, (state, action) => {
            //     state.auth.currentUser.emailChecked = true;
            // })
            .addCase(updateCredentials.fulfilled, (state, action) => {
                state.auth.currentUser = action.payload;
            })
            .addDefaultCase((state, action) => {
                return state;
            })
    }
})

export default reducer;