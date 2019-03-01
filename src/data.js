/*window.pokemon = {
  pokeFilter : (dataPokemon, condition) => {
    const typePoke = dataPokemon.filter (data => data.type[0] === condition || data.type[1] === condition)
    console.log(typePoke);
    const items = typePoke.map(type => type.name);  
    console.log(items);
    return items;  
  }
  
}*/

//Nueva funcion para filtrar por tipo. CHIDA
const pokeFilter = (dataPokemon,condition) => {
      const typePoke = dataPokemon.filter (data => data.type[0] === condition || data.type[1] === condition)
      console.log(typePoke);
      const items = typePoke.map(type => type.name); 
      showCards(typePoke);
      console.log(items);
    return items;     
};


//Funcion para order. Primer intento.
const sortPoke = (filpoke,orderValue) => {
  if (orderValue === "a-z"){
    return filpoke.sort((a,b)=>{
      if(a.name > b.name){
        return 1;
      } if(a.name < b.name){
        return -1;
      } 
    });
  }
    return 0;
};




//Funcion para iterar con for y buscar pokemon. 
/*const findPoke = () => {
  let condition = "Pikachu";
  for (let i=0; i<dataPokemon.length; i++) {
    let allPokemon = dataPokemon[i];
    if (allPokemon.name === condition){
    allPokemon.name};  
    console.log(allPokemon.name);
  }
};*/









