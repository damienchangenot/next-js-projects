"use client";

import { useEffect, useState } from "react";
import CardPokemon from "./CardPokemon";
import { Pokemon } from "@/lib/definitions";
import Image from "next/image";
import TypeBar from "./TypeBar";

export function ContainerPokemon(){
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [type, setType] = useState('normal');

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.pokemon)
        setLoading(false)
      })
  }, [type])
  
  if (isLoading) return <div className="flex justify-center items-center "><Image className="animate-spin" src={'/pokeball.svg'} alt="pokeball loader" width={100} height={100} ></Image></div>
  if (!data) return <p>No profile data</p>
  
  return (
    <>
      <TypeBar setType={setType} type={type} ></TypeBar>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7 gap-y-10 lg:mx-20 ">
        {data.map((pokemon : { pokemon: Pokemon}) => (
          <CardPokemon key={pokemon.pokemon.name}  pokemon={pokemon.pokemon}></CardPokemon>
        ))}
      </div>
    </>
  )
}
