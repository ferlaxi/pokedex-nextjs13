  
import { PokemonCard } from "./card.pokemon"

interface pokemonGridProps {
  data: any
}

const GridPokemon = ({ data } : pokemonGridProps) => {
  return (
    <>
        <div className="flex flex-wrap gap-x-10 gap-y-20 w-full h-screen justify-center items-center mt-24">
          {data.map((pokemon : any) => {
            return <PokemonCard key={pokemon.id} name={pokemon.name} />
          })}
        </div>
    </>
  )
}

export default GridPokemon