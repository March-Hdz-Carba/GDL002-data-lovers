
//Funciones de Botones, cambio de pantallas
const pageStar = () => {
  document.getElementById("card").style.display="block";
  document.getElementById("cardPokemon").style.display="none";
  document.getElementById("listPokemon").style.display="none";
  document.getElementById("listaPoke").innerHTML = " ";
  document.getElementById("candy").innerHTML = " ";
  document.getElementById("pokemon").innerHTML = " ";
  document.getElementById("namePoke").value = " ";
};

document.getElementById("backStart").addEventListener("click",pageStar);
document.getElementById("start").addEventListener("click",pageStar);

const pageFindPoke = () => { 
  document.getElementById("card").style.display="none";
  document.getElementById("cardPokemon").style.display="block";
};

document.getElementById("findPkemon").addEventListener("click",pageFindPoke);

const pokelist = () => {
  document.getElementById("card").style.display="none";
  document.getElementById("cardPokemon").style.display="none";
  document.getElementById("listPokemon").style.display="block";
};

document.getElementById("pokelist").addEventListener("click",pokelist);
document.getElementById("backPokelist").addEventListener("click",pokelist);

//Template dinamico para flip card con pokemones filtrados
function dinamicPoke(onePokemon){
    let dinamiCard =`
      <div class="card-container">
        <div class="card">
          <div class="side">
            <h2>${onePokemon.name}</h2>
            <img src="${onePokemon.img}">
          </div>
          <div class="back">
            <p id="heightPokeFind">Talla:${onePokemon.height}</p>
            <p id="weightPokeFind">Peso:${onePokemon.weight}</p>
            <p id="typePokeFind">Tipo:${onePokemon.type}</p>
            <p id="weaknessesPokeFind">Debilidades:${onePokemon.weaknesses}</p>
          </div>
        </div>
      </div>
      `; 
    return dinamiCard;
  }
  
  //Imprime los pokemones filtrados en el template dinamico
  let card = document.getElementById("listaPoke");

  function showCards (data,card) {
    let pokemonSpace = " ";
      for (let onePokemon of data) {
        pokemonSpace = pokemonSpace + dinamicPoke(onePokemon);
        }    
    card.innerHTML = pokemonSpace;
     return pokemonSpace; 
}

//Para hacer arreglo con el valor de los botones para hacer filtrado segun tipo
let arrayButtons = Array.from(document.getElementsByClassName("typeButton"));
const pokeData = POKEMON.pokemon;

for(let i=0; i < arrayButtons.length; i++) {
  let buttonsValue = arrayButtons[i];
  buttonsValue.addEventListener("click",() => {
    let condition = buttonsValue.value;
    let filter = window.loversData.filPokeType(pokeData,condition); 
    showCards(filter,card);
    orderPoke(filter);
    averCandyPrint(filter);
  });
}   

//Funcion para order. FUNCIONA.
const orderPoke = (filter) => {
    let howOrder = document.getElementById("pokemonOrder");
    howOrder.addEventListener("click", () =>{
        let orderValue = howOrder.value;
        let ordenPoke = window.loversData.sortPoke(filter,orderValue);
        showCards(ordenPoke,card);
        console.log(ordenPoke);
        return ordenPoke;  
    });
 };

//Funcion para mandar llamar la funcion de promediar cantidad de candys por tipo de pokemon
const averCandyPrint = (filter) => {
  let averResul = window.loversData.averCandy(filter);
  document.getElementById("candy").innerHTML = averResul;
};

//Funcion para mandar llamar funcion buscar pokemon
const showFindPokemon = () => {
  let namePoke = document.getElementById("namePoke").value.trim();
  let pokeFind = loversData.findPokemon(POKEMON.pokemon,namePoke);
    let cardPokeFind = ` <div class="cardPokeSearch">
        <h2>${pokeFind.name}</h2>
        <img src="${pokeFind.img}">
        <p id="heightPokeFind">Talla:${pokeFind.height}</p>
        <p id="weightPokeFind">Peso:${pokeFind.weight}</p>
        <p id="typePokeFind">Tipo:${pokeFind.type}</p>
        <p id="weaknessesPokeFind">Debilidades:${pokeFind.weaknesses}</p>
      </div>`;
    document.getElementById("pokemon").innerHTML = cardPokeFind;  
}; 

document.getElementById("findPkemon").addEventListener("click", showFindPokemon);

/*const  selectName = (dataPokeName) => {
  let dataPokeName = POKEMON.pokemon;
  let filterNamePoke = dataPokeName.filter((obj) => (obj.name));
  let arrayNamePoke = filterNamePoke.map((obj) => (obj.name));
  console.log(arrayNamePoke);
}*/