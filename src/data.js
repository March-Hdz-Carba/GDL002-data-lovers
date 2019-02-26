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

let tarjeta = document.getElementById("listaPoke");

//Template dinamico para tarjeta
function pokeDinamico(cadaPokemon){
let tarjetaDinamica = `
<div id= "info" class="cadaPokemon">
<h1 class= pokeName">${cadaPokemon.name}</h1>
<img src="${cadaPokemon.img}">
</div>
`;
return tarjetaDinamica;
}

const mostrarCartas = (data, HTMLElement) => {
let contenedor = " ";
for (let cadaPokemon of data) {
contenedor = contenedor + pokeDinamico(cadaPokemon);
}
tarjeta.innerHTML = contenedor;
}
mostrarCartas(POKEMON.pokemon, tarjeta);

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
  let dataPokemon = POKEMON.pokemon;
  let condition = "Pikachu";
  for (let i=0; i<dataPokemon.length; i++) {
    let allPokemon = dataPokemon[i];
    if (allPokemon.name === condition){
    allPokemon.name};  
    console.log(allPokemon.name);
  }
};*/




 






