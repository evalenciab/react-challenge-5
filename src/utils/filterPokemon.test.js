import filterPokemon from "./filterPokemon";
import { mockPokemonsData } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array", () => {
    /* Your solution comes here */
    expect(filterPokemon(mockPokemonsData, "ditto")).toHaveLength(1);
  });

  test("it should return an empty array", () => {
    /* Your solution comes here */
    expect(filterPokemon(mockPokemonsData, "")).toHaveLength(0);
  });

  test("it should return an array with charizard object", () => {
    /* Your solution comes here */

    expect(filterPokemon(mockPokemonsData, "charizard")[0].name).toBe(
      "charizard"
    );
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {
    /* Your solution comes here */
    expect(filterPokemon(null, "ditto")).toHaveLength(0);
    expect(filterPokemon(undefined, "ditto")).toHaveLength(0);
    expect(filterPokemon(5, "ditto")).toHaveLength(0);
  });

  test("it should validate the 'name' argument", () => {
    /* Your solution comes here */
    expect(filterPokemon(mockPokemonsData, null)).toHaveLength(0);
    expect(filterPokemon(mockPokemonsData, undefined)).toHaveLength(0);
    expect(filterPokemon(mockPokemonsData, 5)).toHaveLength(0);
  });
});
