import { Suspense, useEffect, useState } from "react";
import CardPokemon from "./CardPokemon";
import CardSkeleton from "./CardSkeleton";
import { Pokemon } from "@/lib/definitions";
import ContainerSkeleton from "./ContainerSkeleton";
import Image from "next/image";

export function ContainerPokemon({ types }: {types:string}){
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true)

  //const pokemons = await getPokemonsByType({types});
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${types}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.pokemon)
        setLoading(false)
      })
  }, [types])
  
  if (isLoading) return <Image className="animate-spin" src={'/pokeball.svg'} alt="pokeball loader" width={100} height={100} ></Image>
  if (!data) return <p>No profile data</p>
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 lg:mx-20">
      {data.map((pokemon : { pokemon: Pokemon}) => (
        <CardPokemon key={pokemon.pokemon.name}  pokemon={pokemon.pokemon}></CardPokemon>

      ))}
    </div>
  )
}
