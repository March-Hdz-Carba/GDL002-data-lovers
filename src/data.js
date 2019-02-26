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


/*const pruebaImpresion = (items) => {
  console.log(items);
  const tipPokePrueba = "Grass"
  for(i=0; i<=items.length; i++) {
    if (items[i]===tipPokePrueba){
      const markup = `
      <div class="pokemoFiltrados">
        <h2>
          ${items.name}
        </h2>
        <img src=${items.img}>
      </div>
      `;
      document.body.innerHTML = markup;
    }  
  }
  markup= document.innerHTML()

  const prueba = document.getElementById("prueba");
  const parrafo = document.createElement("img");
  const atributo = document.createAttribute("src");
  atributo.value = url ("www.serebii.net/pokemongo/pokemon/004.png");
  prueba.appendChild(parrafo);
  parrafo.setAttributeNode(atributo);
  //parrafo.src = "chamander.jpg"
  //const contenidoParrafo = document.createTextNode("Hola");
  //parrafo.appendChild(contenidoParrafo);
  //prueba.appendChild(parrafo);
};*/


//Nueva funcion para filtrar por tipo
const filPokeType = (dataPokemon,tipPoken) => {
    //const tipPoken = "Fire";
    //const dataPokemon = POKEMON.pokemon;
    const typePoke = dataPokemon.filter (data => data.type[0] === tipPoken || data.type[1] === tipPoken)
    console.log(typePoke);
    const items = typePoke.map(type => "" + type.name + type.img); 
    pruebaImpresion(items);
  return items; 
    //return Object.value(items);
};
 console.log(filPokeType(POKEMON.pokemon, "Fire"));



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

 






