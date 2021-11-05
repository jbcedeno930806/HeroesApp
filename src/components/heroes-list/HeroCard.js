import React from "react";
import { NavLink } from "react-router-dom";
import "./heroCard.css";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
}) => {
  return (
    <div className="card">
      <div className="d-flex">
        <div className="col-4 p-0">
          {/* process.env.PUBLIC_URL + "./assets/imgs/cart.svg" */}
          <img
            className="card-img-top"
            src={process.env.PUBLIC_URL + `/HeroesApp/assets/heroes/${id}.jpg`}
            alt={alter_ego}
          />
        </div>
        <div className="col py-2 px-2">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text"> {publisher}</p>
          <p className="card-text"> {alter_ego}</p>
          <p className="card-text"> {first_appearance}</p>
          {/* <p className="card-text"> {characters}</p> */}
          <NavLink
            className="btn btn-outline-success"
            to={`/HeroesApp/home/hero/${id}`}
          >
            Read more
          </NavLink>
        </div>
      </div>
    </div>
  );
};
