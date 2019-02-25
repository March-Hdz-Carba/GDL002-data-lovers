//Botones, cambio de pantallas
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
document.getElementById("backpokelist").addEventListener("click",pokelist);

/*const searchPokemon = () => {
    const dataPokemon = POKEMON.pokemon;
    const condition = document.getElementById("PokeFind").value;
    let pokefind = window.pokemon.filter(dataPokemon, condition);
    document.getElementById("namePokeFind").innerHTML = pokefind;
    console.log(pokefind);
    //return pokefind;
};
document.getElementById("findPkemon").addEventListener("click",searchPokemon);*/