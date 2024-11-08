import { Pokemon, Stat, Type } from '@/lib/definitions';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CardPokemon({ pokemon} : {pokemon: Pokemon}) {
  const [data, setData] = useState<Pokemon>()
  const [isLoading, setLoading] = useState(true)
  const statsMaxValues  = {
      "hp": 714,
      "attack": 714,
      "defense": 614,
      "special-attack": 504,
      "special-defense": 614,
      "speed": 504,
  }
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
        
        <Tabs defaultValue="accaboutount" >
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="evolutions">Evolutions</TabsTrigger>
        </TabsList>
        <TabsContent value="about">        
              <ul>
                <li>Height : {data.height * 10} cm</li>
                <li>Weight : {data.weight / 10} kg</li>
              </ul>
        </TabsContent>
        <TabsContent value="stats">
          <div>
              <ul>
                {data.stats.map(( stat : Stat ) => (
                  <li key={stat.stat.name}>{stat.stat.name} : {stat.base_stat} / {statsMaxValues[stat.stat.name]}</li>
                ))}
              </ul>
            </div>
        </TabsContent>
        <TabsContent value="evolutions">Change your password here.</TabsContent>
      </Tabs>

        <DialogFooter>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
