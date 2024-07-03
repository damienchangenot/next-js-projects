import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
export default function TypeBar({ setType, type} : { setType: Dispatch<SetStateAction<string>>, type: string}) {

    function handleType( newType : string){
        return setType( newType);
      }
  return (
    <ul className=" grid grid-cols-9 p-2 max-w-4xl gap-2 my-5 bg-gradient-to-tr from-red-700 to-red-400 mx-auto rounded-full">
        <li className="flex justify-center"><button className="normal rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('normal')}><Image src={'/icon-pokemon/normal.svg'} alt="normal type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="water rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('water')}><Image src={'/icon-pokemon/water.svg'} alt="water type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="fire rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('fire')}><Image src={'/icon-pokemon/fire.svg'} alt="fire type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="grass rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('grass')}><Image src={'/icon-pokemon/grass.svg'} alt="grass type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="fighting rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('fighting')}><Image src={'/icon-pokemon/fighting.svg'} alt="combat type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="rock rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('rock') }><Image src={'/icon-pokemon/rock.svg'} alt="rock type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="electric rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('electric')}><Image src={'/icon-pokemon/electric.svg'} alt="electric type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="psychic rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('psychic')}><Image src={'/icon-pokemon/psychic.svg'} alt="psychic type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="ice rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('ice')}><Image src={'/icon-pokemon/ice.svg'} alt="ice type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="dark-type rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('dark')}><Image src={'/icon-pokemon/dark.svg'} alt="dark type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="dragon rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('dragon')}><Image src={'/icon-pokemon/dragon.svg'} alt="dragon type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="bug rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('bug')}><Image src={'/icon-pokemon/bug.svg'} alt="bug type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="fairy rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('fairy')}><Image src={'/icon-pokemon/fairy.svg'} alt="fairy type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="flying rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('flying')}><Image src={'/icon-pokemon/flying.svg'} alt="flying type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="ghost rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('ghost')}><Image src={'/icon-pokemon/ghost.svg'} alt="ghost type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="ground rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('ground')}><Image src={'/icon-pokemon/ground.svg'} alt="ground type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="poison rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('poison')}><Image src={'/icon-pokemon/poison.svg'} alt="poison type icon" width={40} height={40}></Image></button></li>
        <li className="flex justify-center"><button className="steel rounded-full p-2 transition ease-in-out hover:scale-125 m-1" onClick={() => handleType('steel')}><Image src={'/icon-pokemon/steel.svg'} alt="steel type icon" width={40} height={40}></Image></button></li>
    </ul>
  )
}
