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

//Funcion para promediar cantidad de candy_count
const averCandy = (pokeData) => {
  let pokeAll = pokeData;
    pokeAll.filter(elemt => elemt.candy_count);
    pokeAll.map(elemt => elemt.candy_count);
    let averPokeRedu = pokeAll.reduce(function(accumalatore,valueNext){return accumalatore+valueNext;});
    let averPokeCandy = averPokeRedu/pokeAll.length;
    console.log(averPokeRedu);
    return averPokeCandy;
};


window.loversData = {
  filPokeType: filPokeType,
  sortPoke: sortPoke,
  averCandy: averCandy
};










