require('../src/data.js');
const pokemon = require("../src/data/pokemon/pokemon.json");

describe('Pokemon', () => {
  it('should be an object', () => {
    expect(typeof pokemon).toBe('object');
  });
});

    describe("Filtado", () => {
      it ("should filter my Pokemon by name",() => {
        expect(filterPokemon(pokemon, "nombre")).toBe();

  });
});
