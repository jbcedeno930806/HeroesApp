import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const NavBar = () => {
  let history = useHistory();
  let { url } = useRouteMatch();

  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const handleLogout = () => {
    // history.replace("/login");
    dispatch({
      type: types.logout,
    });
    history.replace("/HeroesApp/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark ">
        <div className="container">
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav d-flex ">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to={`${url}/marvel`}
                >
                  Marvel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to={`${url}/dc`}
                >
                  DC
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to={`${url}/search`}
                >
                  Search
                </NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <p className="nav-item nav-link text-info d-inline m-0">{name}</p>

              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
