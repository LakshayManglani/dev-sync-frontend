import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AuthState {
  authUserId: string | null;
  accessToken: string | null;
  username: string | null;
  email: string | null;
  givenName: string | null;
  familyName: string | null;
  password: string | null;
  role: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  authUserId: null,
  accessToken: null,
  username: null,
  email: null,
  givenName: null,
  familyName: null,
  password: null,
  role: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<Partial<AuthState>>) => {
      const {
        authUserId,
        accessToken,
        username,
        email,
        givenName,
        familyName,
        role,
      } = action.payload;
      Object.assign(state, {
        authUserId,
        accessToken,
        username,
        email,
        givenName,
        familyName,
        role,
        isLoggedIn: true,
      });
    },
    logout: () => initialState,
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth;

export const authReducer = authSlice.reducer;
