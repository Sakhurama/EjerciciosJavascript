const url = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(url)
.then((response) => response.json())
.then(data => {
    console.log(data);
    mostrarPokemon(data);
});


function mostrarPokemon(data){
    alert(`Su pokemon es ${data.name}`)
}