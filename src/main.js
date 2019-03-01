
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
  };
  
  //Imprime los pokemones filtrados en el template dinamico
const showCards = (data) => {
    let card = document.getElementById("listaPoke");
    let pokemonSpace = " ";
      for (let onePokemon of data) {
          console.log("for");
        pokemonSpace = pokemonSpace + dinamicPoke(onePokemon);
        }
    //card.innerHTML = pokemonSpace;
    document.getElementById("listaPoke").innerHTML=pokemonSpace;
     return pokemonSpace; 
};

  



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


//Para hacer arreglo con el valor de los botones para hacer filtrado segun tipo
 let arrayButtons = Array.from(document.getElementsByClassName("typeButton"));
 
 for(let i=0; i < arrayButtons.length; i++) {
   let buttonsValue = arrayButtons[i];
   buttonsValue.addEventListener("click",() => {
     let condition = buttonsValue.value;
     //let filpoke = window.pokemon.pokeFilter(POKEMON.pokemon,condition);
     let filpoke = pokeFilter(POKEMON.pokemon,condition); 
     showCards(filpoke);
     //orderPoke(filpoke);
   })
 };  

 //Funcion para imprimir los pokemones filtrados AL PARECER FUNCIONA
 /*function showCards (filpoke){
   let result = filpoke.forEach(onePokemon => {
    let dinamiCard =`
    <div class="card-container">
      <div class="card">
        <div class="side">
          <h2>${onePokemon.name}</h2>
          <img alt="Pokemon" src="${onePokemon.img}">
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
      document.getElementById("listaPoke").innerHTML += dinamiCard;
    });
    return result;
 };*/
 

//Opcion para imprimir pokemones
 /*let pokeShowFilt  
 const showCards = (onePoke) => {
   pokeShowFilt= window.pokeFilter(onePoke);
   pokeShowFilt.map(element => { element;
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
       document.getElementById("listaPoke").innerHTML += dinamiCard;
        
       });
       return pokeShowFilt; 
   };*/

 //Funcion para order. Primer intento.
 function orderPoke (filpoke) {
    let howOrder = document.getElementById("pokemonOrder");
    howOrder.addEventListener("click", () =>{
        let orderValue = howOrder.value;
        let ordenPoke = window.pokemon.sortPoke(filpoke,orderValue);
        showCards (ordenPoke);   
    })
 };


/*const searchPokemon = () => {
    const dataPokemon = POKEMON.pokemon;
    const condition = document.getElementById("PokeFind").value;
    let pokefind = window.pokemon.filter(dataPokemon, condition);
    document.getElementById("namePokeFind").innerHTML = pokefind;
    console.log(pokefind);
    //return pokefind;
};
document.getElementById("findPkemon").addEventListener("click",searchPokemon);*/ 