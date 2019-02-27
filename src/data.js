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

//Template dinamico para botones con pokemones filtrados
function dinamicPoke(onePokemon){
  let dinamiCard =`
    <div class="flip-container">
      <div id="card1" class="card">
        <div class="front">
          <h2>${onePokemon.name}</h2>
          <img src="${onePokemon.img}">
        </div>
        <div class="back">
          <p id="heightPokeFind">${onePokemon.height}</p>
          <p id="weightPokeFind">${onePokemon.weight}</p>
          <p id="typePokeFind">${onePokemon.type}</p>
          <p id="weaknessesPokeFind">${onePokemon.weaknesses}</p>
        </div>
      </div>
    </div>
    `; 
  return dinamiCard;
};

//Imprime los pokemones filtrados en el template dinamico
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
console.log(arrayButtons); 

for(let i=0; i <= arrayButtons.length; i++) {
  let buttonsValue = arrayButtons[i];
  buttonsValue.addEventListener("click",() => {
    let condition = buttonsValue.value;
    console.log(condition);
    let filter = filPokeType(POKEMON.pokemon,condition); 
    showCards(filter);
  })
};

/*let pokeArrayButtons = Array.from(document.getElementsByClassName("pokeButton"));
console.log(pokeArrayButtons);

for(let i=0; i <= pokeArrayButtons.length; i++) {
  let pokeButtonCard = pokeArrayButtons[i];
  pokeButtonCard.addEventListener("click",() => {
    let condition = pokeButtonCard.id;
    console.log(condition);
    let filterPokeCard = filPokeType(POKEMON.pokemon,condition);
    showPokeCard(filterPokeCard);
  })
}*/


//Imprime los pokemones filtrados en el template dinamico. PRUEBA PARA IMPRIMIR LA INFO DE CADA POKEMON
/*const showPokeCard = (namePoke) => {
  let cardPokemon = " ";
    for (let i=0; i <= namePoke.length; i++) {
      cardPokemon = namePoke[i] += cardPokemon;
      let pokeInformation = `
        <div><p id="namePokeFind">${}</p>
        <p id="heightPokeFind"></p>
        <p id="weightPokeFind"></p>
        <p id="typePokeFind"></p>
        <p id="weaknessesPokeFind"></p>
        <img id="imagePokeFind" src=" "> 
        `

      pokemonSpace = pokemonSpace + dinamicPoke(onePokemon);
      }
    card.innerHTML = pokemonSpace;
   return pokemonSpace; 
};*/



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









