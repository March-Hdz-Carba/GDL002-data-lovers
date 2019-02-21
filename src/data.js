// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const tipPoken = "Grass";
const dataPokemon = POKEMON.pokemon;
const pkm = "Pikachu"; //document.getElementById("PokeFind").value;

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
/*const findPoke = (dataPoke,namePokemon) => {
  //let dataPoke = POKEMON.pokemon;
  for (let i=0; i<dataPoke.length; i++) {
    //let namePokemon = "Pikachu";
    let allPokemon = dataPoke[i];
    if (namePokemon === allPokemon.name){
    namePokemon};  
    console.log(namePokemon);
  }
};
findPoke(POKEMON.pokemon, "ivysaur");*/


//Funcion para encontrar un pokemon en especifico, con sus diferentes caracteristicas LA CHIDA
const findPokemon = (dataPokemon,pkm) => {
  dataPokemon.find(function(poke){
    if (poke.name === pkm) {
    document.getElementById("namePokeFind").innerHTML = poke.name
    document.getElementById("heightPokeFind").innerHTML = poke.height
    document.getElementById("weightPokeFind").innerHTML = poke.weight
    document.getElementById("typePokeFind").innerHTML = poke.type//[0] + "," + " " + poke.type[1]
    document.getElementById("weaknessesPokeFind").innerHTML = poke.weaknesses//[0] + "," + " " + poke.weaknesses[1]+ "," + " " + poke.weaknesses[2]+ "," + " " + poke.weaknesses[3]+ "," + " " + poke.weaknesses[4]+ "," + " " + poke.weaknesses[5]
    document.getElementById("imagePokeFind").src = poke.img
    } else /*if (poke.name !== pkm)*/{console.log("Pokemon No encontrado")
        }
      }
    )
  };
document.getElementById("findPkemon").addEventListener("click",findPokemon(dataPokemon, pkm));

//Funcion para filtrar 
const filPokemon = (dataPokemon,tipPoken) => { 
  dataPokemon.filter(function(poke){
    if (poke.type[0] === tipPoken || poke.type[1] === tipPoken){
      document.getElementById("imageFilPokem").src = poke.img
      console.log(poke.type);
    }
  })
};
console.log(filPokemon(dataPokemon,tipPoken));

/*const printFilPokemon = (dataPokemon,) => {
  const addPokemon = document.createElement ("div");
}*/

/*const dataPkm = (tipo); {
  return tipo === "Grass";
};

const filterPokemon = () => {
  const pkm = "Grass" //document.getElementById("PokeFind").value;
  const dataPokemon = POKEMON.pokemon;
  data.filter(dataPkm);
};*/


//const example = () => {
//  return 'example';
// };

//window.example = example;
