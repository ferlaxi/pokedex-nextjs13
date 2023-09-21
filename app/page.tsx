import Nav from "@/components/Nav";
import GridPokemon from "@/components/grid.pokemon";
import { listPokemon } from "@/lib/pokemon.API";

export default async function Home() {
  const pokemonList = await listPokemon() 
  return (
    <>
      <Nav />
      <GridPokemon data={pokemonList} />
    </>
  )
}
