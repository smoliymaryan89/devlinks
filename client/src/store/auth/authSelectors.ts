import { AuthState } from "../../types/auth";

export const selectToken = (state: { auth: AuthState }) => state.auth.token;

export const selectIsLoggedIn = (state: { auth: AuthState }) =>
  state.auth.isLoggedIn;

export const selectIsLoading = (state: { auth: AuthState }) =>
  state.auth.isLoading;

export const selectError = (state: { auth: AuthState }) => state.auth.error;

export const selectUserEmail = (state: { auth: AuthState }) =>
  state.auth.user.email;

export const selectIsRefreshing = (state: { auth: AuthState }) =>
  state.auth.isRefreshing;

export const selectUserId = (state: { auth: AuthState }) => state.auth.user.id;
