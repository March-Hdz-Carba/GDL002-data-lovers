/*window.pokemon = {
  filter : (dataPokemon, condition) => {
    const data = POKEMON.pokemon;
    const condition = "Grass";
    const typePoke = dataPokemon.filter (data => data.type[0] === condition || data.type[1] === condition)
    const items = typePoke.map(type => "" + type.name);  
    console.log(items);
    //return items  
  }
  
}*/

//Nueva funcion para filtrar por tipo
const filPokeType = () => {
  const tipPoken = "Grass";
  const dataPokemon = POKEMON.pokemon;
  const typePoke = dataPokemon.filter (data => data.type[0] === tipPoken || data.type[1] === tipPoken)
  const items = typePoke.map(type => "" + type.name);  
  return items; 
    
};

console.log(filPokeType());

const pruebaImpresion = () => {
  let prueba = filPokeType();
  document.getElementById("probando").innerHTML(prueba);
};

/*function fillElements (pokemonList, divElement){
  for(let i=0; i<pokemonList.length; i++) {
    let divPokemon = document.createElement("div");
    divPokemon.className = "pokemon";
    divPokemon.innerHTML = "<button><img src='" + pokemonList[i].img + "'></button>" + "<p> </p>"+ pokemonList[i].name;

    // callback function that prints/shows pokemon information
    divPokemon.addEventListener("click", ()=>showPokemonInfo(pokemonList[i]));
    divElement.insertAdjacentElement("beforeend", divPokemon);
  }
}*/

const pokeFilImg = (dataPokemon,) => {
  for (let )
}


/*filterByType (pokemon, type) {
  const filterType = [];
  for(let i= 0; i < pokemon.length; i++){
    for(let t=0; t < pokemon[i].type.length; t++){
      if (pokemon[i].type[t] === type){
        filterType.push(pokemon[i]);
*/


/*const buscar = () => {
  let pokemon = "Pikachu";
  let dataPoke = POKEMON.pokemon;
  for (let i=0; i<dataPoke.length; i++) {
    let allPokemon = dataPoke[i];
    if (pokemon.length === allPokemon.name.length)
  }
    console.log()
}*/


//Funcion para iterar con for y buscar pokemon. 
/*const findPoke = () => {
  let dataPokemon = POKEMON.pokemon;
  let condition = "Pikachu";
  for (let i=0; i<dataPokemon.length; i++) {
    let allPokemon = dataPokemon[i];
    if (allPokemon.name === condition){
    allPokemon.name};  
    console.log(allPokemon.name);
  }
};*/



//Funcion para encontrar un pokemon en especifico, con sus diferentes caracteristicas LA CHIDA
/*const findPokemon = (dataPokemon,pkm) => {
  dataPokemon.find(function(poke){
    if (poke.name === pkm) {
    document.getElementById("namePokeFind").innerHTML = poke.name
    document.getElementById("heightPokeFind").innerHTML = poke.height
    document.getElementById("weightPokeFind").innerHTML = poke.weight
    document.getElementById("typePokeFind").innerHTML = poke.type//[0] + "," + " " + poke.type[1]
    document.getElementById("weaknessesPokeFind").innerHTML = poke.weaknesses//[0] + "," + " " + poke.weaknesses[1]+ "," + " " + poke.weaknesses[2]+ "," + " " + poke.weaknesses[3]+ "," + " " + poke.weaknesses[4]+ "," + " " + poke.weaknesses[5]
    document.getElementById("imagePokeFind").src = poke.img
    } else /*if (poke.name !== pkm)*///{console.log("Pokemon No encontrado")
  //      }
  //    }
  //  )
  //};
//document.getElementById("findPkemon").addEventListener("click",findPokemon());

 






