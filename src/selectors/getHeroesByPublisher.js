import { heroes } from "../mock-heroes";

export const getHeroesByPublisher = (publisher) => {
  const publishers = ["Marvel Comics", "DC Comics"];

  if (!publishers.includes(publisher)) {
    throw new Error(`Publisher: ${publisher} no es válido `);
  } else {
    return heroes.filter((hero) => hero.publisher === publisher);
  }
};
