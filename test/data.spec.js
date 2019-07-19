require('../src/data.js');
const POKEMON = require("../src/data/pokemon/pokemon.json");
const pokemonGrassFilterMock = require("../src/data/pokemon/pokemonGrass.json");
const orderPokemonFilterDragonMock = require ("../src/data/pokemon/orderPokemonFilterDragon.json");
const pikachuMock = require ("../src/data/pokemon/pikachu.json");

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

  it ("should be return an array when I sort dragon",() => {
        expect(typeof loversData.sortPoke((loversData.filPokeType(POKEMON.pokemon,"Dragon")), 'a-z')).toBe('object');
  });

  it ("should be return an array in order alphabetic information when I sort dragon",() => {
    expect(loversData.sortPoke((loversData.filPokeType(POKEMON.pokemon,"Dragon")), 'a-z')).toEqual(orderPokemonFilterDragonMock);
});
});

describe("averCandy", () => {
  it ("should be a function",() => {
        expect(typeof loversData.averCandy).toBe('function');
  });

  it ("should be a number", () => {
        expect(loversData.averCandy(loversData.filPokeType(POKEMON.pokemon,"Dragon"))).toBe(62.5);
  });
});

describe("findPokemon", () => {
  it ("should be a function",() => {
        expect(typeof loversData.findPokemon).toBe('function');
  });

  it ("should be return information about Pikachu if you find Pikachu",() => {
    expect(loversData.findPokemon(POKEMON.pokemon,"Pikachu")).toEqual(pikachuMock);
});  
});

