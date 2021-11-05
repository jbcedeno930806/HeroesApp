import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

export const PrivateRoutes = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  //   console.log(rest);
  localStorage.setItem(
    "lastPage",
    rest.location.pathname + rest.location.search
  );

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/HeroesApp/login" />
        )
      }
    />
  );
};

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
