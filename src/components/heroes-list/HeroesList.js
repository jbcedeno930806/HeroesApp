import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publisher }) => {
  const heroesList = getHeroesByPublisher(publisher);

  return (
    <div className="row no-gutters">
      {heroesList.map((hero) => (
        <div className="col-6 col-lg-4 p-2" key={hero.id}>
          <HeroCard key={hero.id} {...hero} />
        </div>
      ))}
    </div>
  );
};
