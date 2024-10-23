import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "../../services/axiosInstance";
import {
  RegisterResponse,
  Error,
  RegisterData,
  LoginResponse,
  LoginData,
  AuthState,
  AuthResponse,
} from "../../types/auth";
import { clearAuthHeader, setAuthHeader } from "../../services/axiosHeader";

export const register = createAsyncThunk<
  RegisterResponse,
  RegisterData,
  { rejectValue: Error }
>("auth/register", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await instance.post<RegisterResponse>(
      "/api/auth/register",
      credentials
    );

    return data;
  } catch (error) {
    return rejectWithValue(error as Error);
  }
});

export const login = createAsyncThunk<
  LoginResponse,
  LoginData,
  { rejectValue: Error }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await instance.post<LoginResponse>(
      "/api/auth/login",
      credentials
    );

    if (data.token) {
      setAuthHeader(data.token);
    }

    return data;
  } catch (error) {
    return rejectWithValue(error as Error);
  }
});

export const logOut = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: Error }
>("auth/logOut", async (_, { rejectWithValue }) => {
  try {
    await instance.post("/api/auth/logout");
    clearAuthHeader();
  } catch (error) {
    return rejectWithValue(error as Error);
  }
});

export const currentUser = createAsyncThunk<
  AuthResponse,
  undefined,
  { state: { auth: AuthState }; rejectValue: Error | string }
>("auth/refresh", async (_, { rejectWithValue, getState }) => {
  const state = getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(persistedToken);
    const { data } = await instance.get("/api/auth/current");
    return data;
  } catch (error) {
    return rejectWithValue(error as Error);
  }
});
