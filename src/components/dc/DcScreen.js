import React from "react";
import { HeroesList } from "../heroes-list/HeroesList";

export const DcScreen = () => {
  return (
    <div className="container">
      <h1>DC Heroes</h1>
      <HeroesList publisher={"DC Comics"} />
    </div>
  );
};
