import { Outlet, useLocation } from "react-router-dom";

import Logo from "../../components/Logo/Logo";
import InfoPanel from "../../components/InfoPanel/InfoPanel";
import Container from "../../components/Container/Container";
import AuthPrompt from "../../components/AuthPrompt/AuthPrompt";
import styles from "./AuthLayout.module.scss";

const AuthLayout = () => {
  const { pathname } = useLocation();

  const isLoginPage = pathname === "/login";

  return (
    <Container className={styles.container}>
      <Logo />

      <div className={styles.wrapper}>
        <InfoPanel
          title={isLoginPage ? "Login" : "Create account"}
          text={
            isLoginPage
              ? "Add your details below to get back into the app"
              : "Let's get you started sharing your links!"
          }
        />

        <Outlet />

        <AuthPrompt
          text={
            isLoginPage ? "Don't have an account?" : "Already have an account?"
          }
          label={isLoginPage ? "Create account" : "Login"}
          path={isLoginPage ? "/registration" : "/login"}
        />
      </div>
    </Container>
  );
};

export default AuthLayout;
