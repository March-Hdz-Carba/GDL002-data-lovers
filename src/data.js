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
};

const showCards = (data,card) => {
  let pokemonSpace = " ";
    for (let onePokemon of data) {
      pokemonSpace = pokemonSpace + dinamicPoke(onePokemon);
      }
    card.innerHTML = pokemonSpace;
   return pokemonSpace; 
};

//Nueva funcion para filtrar por tipo
const filPokeType = (dataPokemon,condition) => {
      console.log();
      const typePoke = dataPokemon.filter (data => data.type[0] === condition || data.type[1] === condition)
      console.log(typePoke);
      const items = typePoke.map(type => "" + type.name + type.img); 
      showCards(typePoke, card);
    return items;     
};

let arrayButtons = Array.from(document.getElementsByClassName("typeButton"));
  
for(let i=0; i <= arrayButtons.length; i++) {
  let buttonsValue = arrayButtons[i];
  buttonsValue.addEventListener("click",() => {
    let condition = buttonsValue.value;
    console.log(condition);
    let filter = filPokeType(POKEMON.pokemon,condition); 
    showCards(filter);
  })
}





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









