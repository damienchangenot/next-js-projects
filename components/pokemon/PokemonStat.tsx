import React from 'react'

type Props = {
    value : number,
    name: string
}

function statShortName(name: string): string{
    return name
        .replaceAll("special", "S")
        .replaceAll("-", "")
        .replaceAll("attack", "ATK")
        .replaceAll("defense", "DEF")
        .replaceAll('speed', 'SPD')
        .toUpperCase()
}

export default function PokemonStat({name, value, ...rest}: Props) {
    const ratioValue = Math.round(value/255*100);
  return (
    <div className="flex flex-row items-center gap-8 ">
        <div className=" w-16 border-r-2 border-r-gray-400">{statShortName(name)}</div>
        <div className='w-full flex items-center'>
            <div className='w-10'>{value}</div>
            <div className=' w-full bg-zinc-500 rounded-full h-2.5 mr-10'>
                <div className="bg-red-700 rounded-full h-2.5" style={{width: `${ratioValue}%`}} ></div>
            </div>
        </div>
    </div>
  )
}
