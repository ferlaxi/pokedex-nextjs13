import { homePokemon } from "@/lib/pokemon.API";
import Image from "next/image";
import Link from "next/link";

export default async function PokemonPage({
  params,
}: {
  params: { idPokemon: string };
}) {
  const { idPokemon } = params;

  const pokemonObject = await homePokemon(idPokemon);

  return (
    <>
      <div
        className={`relative flex justify-center items-center h-[20rem] rounded-b-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      ${pokemonObject.types[0].type.name == "normal" ? "bg-bg_normal" : ""}
      ${pokemonObject.types[0].type.name == "fire" ? "bg-bg_fire" : ""}
      ${pokemonObject.types[0].type.name == "water" ? "bg-bg_water" : ""}
      ${pokemonObject.types[0].type.name == "electric" ? "bg-bg_electric" : ""}
      ${pokemonObject.types[0].type.name == "grass" ? "bg-bg_grass" : ""}
      ${pokemonObject.types[0].type.name == "ice" ? "bg-bg_ice" : ""}
      ${pokemonObject.types[0].type.name == "fighting" ? "bg-bg_fighting" : ""}
      ${pokemonObject.types[0].type.name == "poison" ? "bg-bg_poison" : ""}
      ${pokemonObject.types[0].type.name == "ground" ? "bg-bg_ground" : ""}
      ${pokemonObject.types[0].type.name == "flying" ? "bg-bg_flying" : ""}
      ${pokemonObject.types[0].type.name == "psychic" ? "bg-bg_psychic" : ""}
      ${pokemonObject.types[0].type.name == "bug" ? "bg-bg_bug" : ""}
      ${pokemonObject.types[0].type.name == "rock" ? "bg-bg_rock" : ""}
      ${pokemonObject.types[0].type.name == "ghost" ? "bg-bg_ghost" : ""}
      ${pokemonObject.types[0].type.name == "dragon" ? "bg-bg_dragon" : ""}
      ${pokemonObject.types[0].type.name == "dark" ? "bg-bg_dark" : ""}
      ${pokemonObject.types[0].type.name == "steel" ? "bg-bg_steel" : ""}
      ${pokemonObject.types[0].type.name == "fairy" ? "bg-bg_fairy" : ""}
      `}
      >
        <Link
          className="flex justify-center items-center absolute w-14 h-14 rounded-full top-4 left-4 bg-slate-700"
          href={"/"}
        >
          <svg
            className="w-8"
            fill="none"
            stroke="#fff"
            strokeWidth={3}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>

        <Image
          priority
          src={pokemonObject.sprites.other["official-artwork"].front_default}
          alt={pokemonObject.name}
          width={310}
          height={310}
        />
      </div>

      <div className="flex gap-x-12 w-full justify-center items-center mt-7">
        <p className="text-2xl font-bold text-gray-700">
          {pokemonObject.name.toUpperCase()}
        </p>

        <div className="flex gap-x-3">
          <div
            className={`px-3 py-[1.5px] rounded-2xl text-gray-800 font-medium 
            ${pokemonObject.types[0].type.name == "normal" ? "bg-normal" : ""}
            ${pokemonObject.types[0].type.name == "fire" ? "bg-fire" : ""}
            ${pokemonObject.types[0].type.name == "water" ? "bg-water" : ""}
            ${
              pokemonObject.types[0].type.name == "electric"
                ? "bg-electric"
                : ""
            }
            ${pokemonObject.types[0].type.name == "grass" ? "bg-grass" : ""}
            ${pokemonObject.types[0].type.name == "ice" ? "bg-ice" : ""}
            ${
              pokemonObject.types[0].type.name == "fighting"
                ? "bg-fighting"
                : ""
            }
            ${pokemonObject.types[0].type.name == "poison" ? "bg-poison" : ""}
            ${pokemonObject.types[0].type.name == "ground" ? "bg-ground" : ""}
            ${pokemonObject.types[0].type.name == "flying" ? "bg-flying" : ""}
            ${pokemonObject.types[0].type.name == "psychic" ? "bg-psychic" : ""}
            ${pokemonObject.types[0].type.name == "bug" ? "bg-bug" : ""}
            ${pokemonObject.types[0].type.name == "rock" ? "bg-rock" : ""}
            ${pokemonObject.types[0].type.name == "ghost" ? "bg-ghost" : ""}
            ${pokemonObject.types[0].type.name == "dragon" ? "bg-dragon" : ""}
            ${pokemonObject.types[0].type.name == "dark" ? "bg-dark" : ""}
            ${pokemonObject.types[0].type.name == "steel" ? "bg-steel" : ""}
            ${pokemonObject.types[0].type.name == "fairy" ? "bg-fairy" : ""}
            `}
          >
            {pokemonObject.types[0].type.name.charAt(0).toUpperCase() +
              pokemonObject.types[0].type.name.slice(1)}
          </div>
          {pokemonObject.types[1] != null ? (
            <div
              className={`px-3 py-[1.5px] rounded-2xl text-gray-800 font-medium
              ${pokemonObject.types[1].type.name == "normal" ? "bg-normal" : ""}
              ${pokemonObject.types[1].type.name == "fire" ? "bg-fire" : ""}
              ${pokemonObject.types[1].type.name == "water" ? "bg-water" : ""}
              ${
                pokemonObject.types[1].type.name == "electric"
                  ? "bg-electric"
                  : ""
              }
              ${pokemonObject.types[1].type.name == "grass" ? "bg-grass" : ""}
              ${pokemonObject.types[1].type.name == "ice" ? "bg-bg_ice" : ""}
              ${
                pokemonObject.types[1].type.name == "fighting"
                  ? "bg-fighting"
                  : ""
              }
              ${pokemonObject.types[1].type.name == "poison" ? "bg-poison" : ""}
              ${pokemonObject.types[1].type.name == "ground" ? "bg-ground" : ""}
              ${pokemonObject.types[1].type.name == "flying" ? "bg-flying" : ""}
              ${
                pokemonObject.types[1].type.name == "psychic"
                  ? "bg-psychic"
                  : ""
              }
              ${pokemonObject.types[1].type.name == "bug" ? "bg-bug" : ""}
              ${pokemonObject.types[1].type.name == "rock" ? "bg-rock" : ""}
              ${pokemonObject.types[1].type.name == "ghost" ? "bg-ghost" : ""}
              ${pokemonObject.types[1].type.name == "dragon" ? "bg-dragon" : ""}
              ${pokemonObject.types[1].type.name == "dark" ? "bg-dark" : ""}
              ${pokemonObject.types[1].type.name == "steel" ? "bg-steel" : ""}
              ${pokemonObject.types[1].type.name == "fairy" ? "bg-fairy" : ""}
              `}
            >
              {pokemonObject.types[1].type.name.charAt(0).toUpperCase() +
                pokemonObject.types[1].type.name.slice(1)}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* stats */}
      <div className="flex flex-col items-center justify-between mt-10 text-[14px] font-medium">
        {pokemonObject.stats.map((stat: any) => {
          return (
              <div className="flex items-center py-1 justify-center">
                <p className="w-[8rem] font-bold">{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</p>

                <div className={`w-[2.5rem] h-[2.5rem] mt-0.5 flex items-center justify-center rounded-full  
                    ${stat.base_stat < 29 ? `bg-red-500` : '' }
                    ${stat.base_stat >= 30 && stat.base_stat <= 59 ? `bg-orange-500` : '' }
                    ${stat.base_stat >= 60 && stat.base_stat < 89 ? `bg-yellow-300` : '' }
                    ${stat.base_stat >= 90 && stat.base_stat < 119 ? `bg-green-400` : '' }
                    ${stat.base_stat >= 120 && stat.base_stat < 149 ? `bg-green-600` : '' }
                    ${stat.base_stat >= 150 && stat.base_stat <= 255 ? `bg-blue-500` : '' }
                    `}>
                      <div className="font-bold">{stat.base_stat}</div>
                </div>

              </div>
          );
        })}
      </div>
    </>
  );
}
