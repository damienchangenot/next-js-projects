import { Pokemon } from '@/lib/definitions';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CardSkeleton from './CardSkeleton';

export default function CardPokemon({ pokemon} : {pokemon: Pokemon}) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  //const sprites = await getSprites({ url : pokemon.url});
  useEffect(() => {
    fetch(`${pokemon.url}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.sprites.front_default)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <CardSkeleton/>
  if (!data) return <p>No profile data</p>

  return (
    <div className='w-full h-[250px] rounded-lg bg-gradient-to-t from-cyan-500 to-blue-500 flex flex-col justify-center items-center  '>
          <div className="h-5/6"><Image src={data} alt='Image pokemon' width={200} height={200}></Image></div>
          <div className='text-center text-xl mb-5'>{pokemon.name}</div>
    </div>
  )
}
