import { Suspense, useEffect, useState } from "react";
import CardPokemon from "./CardPokemon";
import CardSkeleton from "./CardSkeleton";
import { Pokemon } from "@/lib/definitions";
import ContainerSkeleton from "./ContainerSkeleton";

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
  
  if (isLoading) return <ContainerSkeleton/>
  if (!data) return <p>No profile data</p>
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 lg:mx-20">
      {data.map((pokemon : { pokemon: Pokemon}) => (
        <Suspense  key={pokemon.pokemon.name} fallback={<CardSkeleton/> }>
          <CardPokemon  pokemon={pokemon.pokemon}></CardPokemon>
        </Suspense>
      ))}
    </div>
  )
}
