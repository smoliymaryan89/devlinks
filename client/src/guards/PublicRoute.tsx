import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { token } = useAuth();
  const location = useLocation();

  return !token ? children : <Navigate to={location.state ?? "/"} />;
};

export default PublicRoute;
