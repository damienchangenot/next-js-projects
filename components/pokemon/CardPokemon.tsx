import { Pokemon, Stat, Type } from '@/lib/definitions';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"
import PokemonStat from './PokemonStat';

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
    <Dialog>
      <DialogTrigger asChild>
        <div className={`cursor-pointer w-full py-3 rounded-lg bg-gradient-to-t from-red-700 to-red-400 flex flex-col justify-between items-center`}>
              <div className=" rounded-full bg-lime-50 shadow-lg  my-2 p-3"><Image className='transition ease-in-out hover:scale-110 m-2' src={srcSprites} alt='Image pokemon' width={200} height={200}></Image></div>
              <div className='text-center text-2xl my-3 text-secondary-foreground'>{pokemon.name}</div>
              <div className="flex">
              {data.types.map(( type : Type ) => (
                <Badge key={type.type.name} variant={type.type.name} >{type.type.name}</Badge>
              ))}
              </div>
        </div>
      </DialogTrigger>
      <DialogContent className='pt-3'>

        <DialogHeader>
          <DialogTitle>{pokemon.name}</DialogTitle>
        </DialogHeader>
        <div className='flex justify-center items-center'>
          <Image className='transition ease-in-out hover:scale-110' src={srcSprites} alt='Image pokemon' width={150} height={150}></Image>
          <div >
            <p>#{String(data.id).padStart(3,'0')}</p>
            <p className='text-xl'>{pokemon.name}</p> 
            {data.types.map(( type : Type ) => (
                <Badge key={type.type.name} variant={type.type.name} >{type.type.name}</Badge>
              ))}
          </div>
        </div>
        <div className='bg-white text-black rounded-md m-1 py-4 px-5'>
            <div className='grid grid-cols-2 gap:8 divide-x mb-3'>        
                <div className='text-center'>Height : {data.height * 10} cm</div>
                <div className='text-center'>Weight : {data.weight / 10} kg</div>
            </div>
            <div>
                {data.stats.map(( stat : Stat ) => (
                    <PokemonStat key={stat.stat.name} name={stat.stat.name} value={stat.base_stat}/>
                ))}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
