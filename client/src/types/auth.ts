export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export type RegisterData = Omit<RegisterFormData, "confirmPassword">;

export type LoginData = Omit<RegisterFormData, "confirmPassword">;

export interface User {
  id: string;
  email: string;
}

export interface Error {
  message: string;
}

export interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: null | Error | string;
}

export interface LoginResponse {
  token: string;
  user: {
    _id: string;
    email: string;
  };
}

export interface RegisterResponse {
  user: {
    email: string;
  };
}

export type AuthResponse = LoginResponse;
