import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshed: false,
  isRefreshing: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]:(state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled]: (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshed = false;
    },
    [authOperations.refreshCurrentUser.pending]: (state, action) => {
      state.isRefreshing = true;
    },
    [authOperations.refreshCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshed = true;
      state.isRefreshing = false
    },
    [authOperations.refreshCurrentUser.rejected]: (state, action) => {
      state.isRefreshing = false;
      state.isRefreshed = false;
    },
  }
})

export default authSlice;