import { Pokemon, Type } from '@/lib/definitions';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge"

export default function CardPokemon({ pokemon} : {pokemon: Pokemon}) {
  const [data, setData] = useState<Pokemon>()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${pokemon.url}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Image className="animate-spin" src={'/pokeball.svg'} alt="pokeball loader" width={100} height={100} ></Image>
  if (!data) return <p>No profile data</p>
  const srcSprites = data.sprites.front_default || data.sprites.other['official-artwork'].front_default || data.sprites.other.dream_world.front_default || '/pokeball.svg';
  return (
    <div className='w-full py-3 rounded-lg bg-gradient-to-tr from-red-700 to-red-400 flex flex-col justify-center items-center   '>
          <div className="h-5/6 rounded-full bg-lime-50 shadow-lg  my-2 "><Image className='transition ease-in-out hover:scale-110' src={srcSprites} alt='Image pokemon' width={200} height={200}></Image></div>
          <div className='text-center text-2xl my-3 text-secondary-foreground'>{pokemon.name}</div>
          <div className="flex">
          {data.types.map(( type : Type ) => (
            <Badge key={type.type.name} variant={type.type.name} >{type.type.name}</Badge>
          ))}
          </div>
    </div>
  )
}
