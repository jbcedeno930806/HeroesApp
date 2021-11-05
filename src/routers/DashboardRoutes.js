import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from "../components/heroes-list/HeroScreen";

export const DashboardRoutes = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path={`${path}/hero/:heroId`}>
          <HeroScreen />
        </Route>
        <Route exact path={`${path}/marvel`}>
          <MarvelScreen />
        </Route>
        <Route exact path={`${path}/dc`}>
          <DcScreen />
        </Route>
        <Route exact path={`${path}/search`}>
          <SearchScreen />
        </Route>

        <Redirect to={`${path}/marvel`} />
      </Switch>
    </>
  );
};
