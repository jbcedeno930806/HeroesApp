import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <PublicRoutes
          exact
          isAuthenticated={logged}
          path="/HeroesApp/login"
          component={LoginScreen}
        />
        <PrivateRoutes
          path="/HeroesApp/home"
          isAuthenticated={logged}
          component={DashboardRoutes}
        />
        <Redirect to="/HeroesApp/login" />
      </Switch>
    </Router>
  );
};
