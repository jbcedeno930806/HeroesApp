import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import { useHistory } from "react-router";

export const HeroScreen = () => {
  let history = useHistory();
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Redirect to="/HeroesApp/home" />;
  }

  const handleReturn = () => {
    if (history.length <= 1) {
      history.push("/HeroesApp/");
    } else {
      history.goBack();
    }
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  return (
    <div className="row mt-5 container">
      <div className="col-3">
        <img
          src={
            process.env.PUBLIC_URL + `/HeroesApp/assets/heroes/${heroId}.jpg`
          }
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3> {superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b> Alter ego: </b> {alter_ego}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b> Publisher: </b> {publisher}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b> First appearance: </b> {first_appearance}{" "}
          </li>
        </ul>

        <h5> Characters </h5>
        <p> {characters} </p>

        <button className="btn btn-outline-success" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
