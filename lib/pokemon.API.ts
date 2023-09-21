

const URL_POKEMON = 'https://pokeapi.co/api/v2/'

//Listado de pokemons
export async function listPokemon() {
    const res = await fetch(URL_POKEMON + 'pokemon?limit=151&offset=0')
    const data = await res.json();
    return data.results
}

//detalle de pokemon en home e individual
export async function homePokemon(name : string) {
    const res = await fetch(URL_POKEMON + 'pokemon/' + name);
    const data = await res.json();
    return data
}