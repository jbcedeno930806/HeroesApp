import { heroes } from "../mock-heroes";

export const getHeroesByName = (name) => {
  if (name === "") {
    return [];
  }
  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );
};
