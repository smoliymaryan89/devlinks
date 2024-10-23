import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { AuthState } from "../types/auth";

import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer<AuthState>(persistConfig, authReducer);

export const reducer = combineReducers({
  auth: persistedReducer,
});

export type RootState = ReturnType<typeof reducer>;
