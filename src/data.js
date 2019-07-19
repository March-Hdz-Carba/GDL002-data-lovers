//Nueva funcion para filtrar por tipo.
const filPokeType = (dataPokemon,condition) => {
      const typePoke = dataPokemon.filter (data => data.type[0] === condition || data.type[1] === condition);
      console.log(typePoke);
      return typePoke;     
};

//Funcion para order. FUNCIONA.
const sortPoke = (filter,orderValue) => {
  if (orderValue === "a-z"){
    return filter.sort((a,b)=>{
      if(a.name > b.name){
        return 1;
      } if(a.name < b.name){
        return -1;
      } 
    });
  }
    return 0;
};

//Funcion para promediar cantidad de candy_count por tipo pokemon
const averCandy = (pokeData) => {
  let pokeAll = pokeData;
  let pokeAllFilterCandy = pokeAll.filter((elemt) => (elemt.candy_count));
  let NewPokeAllFilterCandy = pokeAllFilterCandy.map((elemt) => (elemt.candy_count));
  let averPokeRedu = NewPokeAllFilterCandy.reduce(function(accumalatore,valueNext){return accumalatore+valueNext;});
  let averPokeCandy = averPokeRedu/pokeAllFilterCandy.length;
  return averPokeCandy;
};

//Funcion para buscar pokemon
 const findPokemon = (dataPokemon, condition) => {
   const especificPoke = dataPokemon.find (data => data.name === condition);
   return especificPoke;
};


window.loversData = {
  filPokeType: filPokeType,
  sortPoke: sortPoke,
  averCandy: averCandy,
  findPokemon: findPokemon
};










