import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  let history = useHistory();
  const { dispatch } = useContext(AuthContext);

  const lastPage = localStorage.getItem("lastPage") || "/HeroesApp/home";

  const handleClick = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Jorge",
        logged: true,
      },
    });
    history.replace(lastPage);
  };

  return (
    <div className="container">
      <h1>LoginPage</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};
