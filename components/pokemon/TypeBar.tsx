import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
export default function TypeBar({ setType, type} : { setType: Dispatch<SetStateAction<string>>, type: string}) {

    function handleType( newType : string){
        return setType( newType);
      }
  return (
    <ul className=" flex gap-2 justify-center my-5">
        <li><button onClick={() => handleType('fighting') }>Combat</button></li>
        <li><button onClick={() => handleType('flying')}  >Vol</button></li>
        <li><button onClick={() => handleType('poison')}>Poison</button></li>
        <li><button onClick={() => handleType('bug')}>Insecte</button></li>
        <li><button onClick={() => handleType('fighting')}>Combat</button></li>
        <li><button className="fighting rounded-full "  onClick={() => handleType('fighting')}><Image  src={'/icon-pokemon/fighting.svg'} alt="combat type icon" width={60} height={60}></Image></button></li>
        <li><button className="bg-gray-400 rounded-full" onClick={() => handleType('normal')}><Image   src={'/icon-pokemon/normal.svg'} alt="normal type icon" width={60} height={60}></Image></button></li>
    </ul>
  )
}
