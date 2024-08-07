// authSlice.js
import { AuthState, User } from '@/types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action : PayloadAction<User | null>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
