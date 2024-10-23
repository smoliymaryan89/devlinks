import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import PublicRoute from "./guards/PublicRoute";
import PrivateRoute from "./guards/PrivateRoute";
import LinksPage from "./pages/LinksPage/LinksPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LinksPage />
            </PrivateRoute>
          }
        />

        <Route element={<AuthLayout />}>
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="registration"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>

      <Toaster position="bottom-center" toastOptions={{ duration: 2500 }} />
    </>
  );
};

export default App;
