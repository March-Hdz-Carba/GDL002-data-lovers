require('../src/data.js');
const POKEMON = require("../src/data/pokemon/pokemon.json");
const pokemonGrassFilterMock = require("../src/data/pokemon/pokemonGrass.json");

describe('Pokemon', () => {
  it('should be an object', () => {
    expect(typeof POKEMON).toBe('object');
  });
});

describe("filPokeType", () => {
  it ("should be a function",() => {
        expect(typeof loversData.filPokeType).toBe('function');
  });

  it ("should be a return an array when filter Grass",() => {
        expect(loversData.filPokeType(POKEMON.pokemon,"Grass")).toEqual(pokemonGrassFilterMock);
  });
});

describe("sortPoke", () => {
  it ("should be a function",() => {
        expect(typeof loversData.sortPoke).toBe('function');
  });

  it ("should be return an order array when order filter Ice",() => {
        expect(loversData.orderPoke())
  })
});


