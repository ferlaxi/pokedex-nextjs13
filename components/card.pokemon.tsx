import { homePokemon } from "@/lib/pokemon.API";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  name: string;
}

export async function PokemonCard({ name }: PokemonCardProps) {
  const dataDetail = await homePokemon(name);
  return (
    <div className="flex flex-wrap hover:-translate-y-2 transition-transform duration-500">
      <Link
        href={name}
        className={`h-48 w-[190px] rounded-xl flex-col relative pl-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            ${dataDetail.types[0].type.name == 'normal' ? 'bg-bg_normal' : ''}
            ${dataDetail.types[0].type.name == 'fire' ? 'bg-bg_fire' : ''}
            ${dataDetail.types[0].type.name == 'water' ? 'bg-bg_water' : ''}
            ${dataDetail.types[0].type.name == 'electric' ? 'bg-bg_electric' : ''}
            ${dataDetail.types[0].type.name == 'grass' ? 'bg-bg_grass' : ''}
            ${dataDetail.types[0].type.name == 'ice' ? 'bg-bg_ice' : ''}
            ${dataDetail.types[0].type.name == 'fighting' ? 'bg-bg_fighting' : ''}
            ${dataDetail.types[0].type.name == 'poison' ? 'bg-bg_poison' : ''}
            ${dataDetail.types[0].type.name == 'ground' ? 'bg-bg_ground' : ''}
            ${dataDetail.types[0].type.name == 'flying' ? 'bg-bg_flying' : ''}
            ${dataDetail.types[0].type.name == 'psychic' ? 'bg-bg_psychic' : ''}
            ${dataDetail.types[0].type.name == 'bug' ? 'bg-bg_bug' : ''}
            ${dataDetail.types[0].type.name == 'rock' ? 'bg-bg_rock' : ''}
            ${dataDetail.types[0].type.name == 'ghost' ? 'bg-bg_ghost' : ''}
            ${dataDetail.types[0].type.name == 'dragon' ? 'bg-bg_dragon' : ''}
            ${dataDetail.types[0].type.name == 'dark' ? 'bg-bg_dark' : ''}
            ${dataDetail.types[0].type.name == 'steel' ? 'bg-bg_steel' : ''}
            ${dataDetail.types[0].type.name == 'fairy' ? 'bg-bg_fairy' : ''}
        `}
        key={name}
      >
        <Image
          className="absolute -mt-16"
          src={dataDetail.sprites.other["official-artwork"].front_default}
          alt={dataDetail.name}
          width={160}
          height={160}
          priority={true}
        />

        <div className="flex-col flex gap-y-1 mt-24">
          {dataDetail.id <= 9 ? (
            <p className="text-[14px] text-gray-700">#00{dataDetail.id}</p>
          ) : dataDetail.id > 9 && dataDetail.id <= 99 ? (
            <p className="text-[14px] text-gray-700">#0{dataDetail.id}</p>
          ) : (
            <p className="text-[14px] text-gray-700">#{dataDetail.id}</p>
          )}

          <h2 className="font-semibold text-gray-800">{name.charAt(0).toUpperCase() + name.slice(1)}</h2>

          <div className="flex gap-x-3">
            <div className={`px-3 py-[1.5px] rounded-2xl text-gray-800 font-medium 
            ${dataDetail.types[0].type.name == 'normal' ? 'bg-normal' : ''}
            ${dataDetail.types[0].type.name == 'fire' ? 'bg-fire' : ''}
            ${dataDetail.types[0].type.name == 'water' ? 'bg-water' : ''}
            ${dataDetail.types[0].type.name == 'electric' ? 'bg-electric' : ''}
            ${dataDetail.types[0].type.name == 'grass' ? 'bg-grass' : ''}
            ${dataDetail.types[0].type.name == 'ice' ? 'bg-ice' : ''}
            ${dataDetail.types[0].type.name == 'fighting' ? 'bg-fighting' : ''}
            ${dataDetail.types[0].type.name == 'poison' ? 'bg-poison' : ''}
            ${dataDetail.types[0].type.name == 'ground' ? 'bg-ground' : ''}
            ${dataDetail.types[0].type.name == 'flying' ? 'bg-flying' : ''}
            ${dataDetail.types[0].type.name == 'psychic' ? 'bg-psychic' : ''}
            ${dataDetail.types[0].type.name == 'bug' ? 'bg-bug' : ''}
            ${dataDetail.types[0].type.name == 'rock' ? 'bg-rock' : ''}
            ${dataDetail.types[0].type.name == 'ghost' ? 'bg-ghost' : ''}
            ${dataDetail.types[0].type.name == 'dragon' ? 'bg-dragon' : ''}
            ${dataDetail.types[0].type.name == 'dark' ? 'bg-dark' : ''}
            ${dataDetail.types[0].type.name == 'steel' ? 'bg-steel' : ''}
            ${dataDetail.types[0].type.name == 'fairy' ? 'bg-fairy' : ''}
            `}>
              {dataDetail.types[0].type.name.charAt(0).toUpperCase() + dataDetail.types[0].type.name.slice(1)}
            </div>
            {dataDetail.types[1] != null ? (
              <div className={`px-3 py-[1.5px] rounded-2xl text-gray-800 font-medium
              ${dataDetail.types[1].type.name == 'normal' ? 'bg-normal' : ''}
              ${dataDetail.types[1].type.name == 'fire' ? 'bg-fire' : ''}
              ${dataDetail.types[1].type.name == 'water' ? 'bg-water' : ''}
              ${dataDetail.types[1].type.name == 'electric' ? 'bg-electric' : ''}
              ${dataDetail.types[1].type.name == 'grass' ? 'bg-grass' : ''}
              ${dataDetail.types[1].type.name == 'ice' ? 'bg-bg_ice' : ''}
              ${dataDetail.types[1].type.name == 'fighting' ? 'bg-fighting' : ''}
              ${dataDetail.types[1].type.name == 'poison' ? 'bg-poison' : ''}
              ${dataDetail.types[1].type.name == 'ground' ? 'bg-ground' : ''}
              ${dataDetail.types[1].type.name == 'flying' ? 'bg-flying' : ''}
              ${dataDetail.types[1].type.name == 'psychic' ? 'bg-psychic' : ''}
              ${dataDetail.types[1].type.name == 'bug' ? 'bg-bug' : ''}
              ${dataDetail.types[1].type.name == 'rock' ? 'bg-rock' : ''}
              ${dataDetail.types[1].type.name == 'ghost' ? 'bg-ghost' : ''}
              ${dataDetail.types[1].type.name == 'dragon' ? 'bg-dragon' : ''}
              ${dataDetail.types[1].type.name == 'dark' ? 'bg-dark' : ''}
              ${dataDetail.types[1].type.name == 'steel' ? 'bg-steel' : ''}
              ${dataDetail.types[1].type.name == 'fairy' ? 'bg-fairy' : ''}
              `}>
                {dataDetail.types[1].type.name.charAt(0).toUpperCase() + dataDetail.types[1].type.name.slice(1)}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
