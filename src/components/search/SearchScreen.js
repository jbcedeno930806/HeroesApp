import React, { useMemo } from "react";
import { useHistory, useLocation } from "react-router";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";

import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../heroes-list/HeroCard";

export const SearchScreen = () => {
  let history = useHistory();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [{ searchText }, handleInputChange] = useForm({ searchText: q });
  const heroesList = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3">Search Heroes</h1>
      <hr />
      <div className="row">
        <form onSubmit={handleSubmit} className="col-5">
          <h2>Search form</h2>
          <input
            type="text"
            value={searchText}
            name="searchText"
            autoComplete="off"
            placeholder="Hero's name"
            onChange={handleInputChange}
            className="form-control"
          ></input>
          <button type="submit" className="btn btn-outline-success mt-3">
            Search
          </button>
        </form>
        <div className="col-7">
          <h2>Search results</h2>
          {q === "" && (
            <div className="alert alert-info py-2">Search a hero</div>
          )}
          {q !== "" && heroesList.length === 0 && (
            <div className="alert alert-info py-2">
              There are no heroes with that name
            </div>
          )}

          {heroesList.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
