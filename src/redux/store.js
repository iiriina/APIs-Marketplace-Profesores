// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: state => {
      state.isLoggedIn = true;
    },
    logout: state => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // Agrega otros reducers si es necesario
  },
});

export default store;
