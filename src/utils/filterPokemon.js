export default function filterPokemon(pokeList, name) {
  if (name === "" || typeof name !== "string") return [];
  return Array.isArray(pokeList)
    ? pokeList.filter((pokemon) => {
        return pokemon.name.includes(name);
      })
    : [];
}
