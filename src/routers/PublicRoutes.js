import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";

const PublicRoutes = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/HeroesApp/home" />
        )
      }
    />
  );
};

PublicRoutes.propTypes = {};

export default PublicRoutes;
