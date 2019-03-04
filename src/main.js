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
  });
}   

//Funcion para order. FUNCIONA.
const orderPoke = (filter) => {
    let howOrder = document.getElementById("pokemonOrder");
    howOrder.addEventListener("click", () =>{
        let orderValue = howOrder.value;
        let ordenPoke = window.loversData.sortPoke(filter,orderValue);
        console.log(ordenPoke);
        return ordenPoke;  
    });
 };

const showOrderPoke = (poke) => {
    let printPokeOrder = orderPoke(filter);
    printPokeOrder.map(element => {element;
        let dinamiCard =`
        <div class="card-container">
          <div class="card">
            <div class="side">
              <h2>${poke.name}</h2>
              <img src="${poke.img}">
            </div>
            <div class="back">
              <p id="heightPokeFind">Talla:${poke.height}</p>
              <p id="weightPokeFind">Peso:${poke.weight}</p>
              <p id="typePokeFind">Tipo:${poke.type}</p>
              <p id="weaknessesPokeFind">Debilidades:${poke.weaknesses}</p>
            </div>
          </div>
        </div>
        `; 
        document.getElementById("listaPoke").innerHTML += dinamiCard;
    });
    orderPoke(filter);
};

document.getElementById("pokemonOrder").addEventListener("click",showOrderPoke);

const averCandyPrint = () => {
  let averResul = window.loversData.averCandy(POKEMON.pokemon);
  document.getElementById("candy").innerHTML = averResul;
  console.log(averResul);
};
document.getElementById("candys").addEventListener("click",averCandyPrint);


//Funciones de Botones, cambio de pantallas
const pageStar = () => {
    document.getElementById("card").style.display="block";
    document.getElementById("cardPokemon").style.display="none";
    document.getElementById("listPokemon").style.display="none";
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



