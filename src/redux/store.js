// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true' || false,
  },
  reducers: {
    login: state => {
      state.isLoggedIn = true;
      sessionStorage.setItem('isLoggedIn', 'true');
    },
    logout: state => {
      state.isLoggedIn = false;
      sessionStorage.setItem('isLoggedIn', 'false');
    },
    loginSuccess: state => {
      state.isLoggedIn = true;
      sessionStorage.setItem('isLoggedIn', 'true');
    },
  },
});


export const { login, logout, loginSuccess } = authSlice.actions;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // Agrega otros reducers si es necesario
  },
});

export default store;
