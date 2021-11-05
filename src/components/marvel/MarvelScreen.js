import React from "react";
import { HeroesList } from "../heroes-list/HeroesList";

export const MarvelScreen = () => {
  return (
    <div className="container">
      <h1>Marvel</h1>
      <HeroesList publisher={"Marvel Comics"} />
    </div>
  );
};
