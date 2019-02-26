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
let card = document.getElementById("listaPoke");

//Template dinamico para tarjeta
function dinamicPoke(onePokemon){
let dinamiCard = `
<div id= "info" class="onePokemon">
<h1 class= pokeName">${onePokemon.name}</h1>
<img src="${onePokemon.img}">
</div>
`;
return dinamiCard;
}

const showCards = (data, HTMLElement) => {
let pokemonSpace = " ";
for (let onePokemon of data) {
pokemonSpace = pokemonSpace + dinamicPoke(onePokemon);
}
card.innerHTML = pokemonSpace;
}
showCards(POKEMON.pokemon, card);



const pruebaImpresion = (items) => {
  console.log(items);
  const prueba = document.getElementById("prueba");
  const parrafo = document.createElement("P");
  const contenidoParrafo = document.createTextNode("Hola");
  parrafo.appendChild(contenidoParrafo);
  prueba.appendChild(parrafo);
  //let prueba = filPokeType();
  //document.getElementById("probando").innerHTML(prueba);
};


//Nueva funcion para filtrar por tipo
const filPokeType = () => {
    let tipPoken = "Fire";
    let dataPokemon = POKEMON.pokemon;
    const typePoke = dataPokemon.filter (data => data.type[0] === tipPoken || data.type[1] === tipPoken)
    console.log(typePoke);
    const items = typePoke.map(type => "" + type.name + type.img); 
    pruebaImpresion(items);
    return items; 
    
};
 console.log(filPokeType());





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









