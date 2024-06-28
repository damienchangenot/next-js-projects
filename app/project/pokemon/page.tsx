'use client';

import { Suspense, useState } from "react";
import { ContainerPokemon } from "@/components/pokemon/ContainerPokemon";
import Loading from "./loading";
import ContainerSkeleton from "@/components/pokemon/ContainerSkeleton";
import TypeBar from "@/components/pokemon/TypeBar";
export default function page() {
  const [type, setType] = useState('normal');

  return (
    <section>
      <h1 className="text-4xl text-center font-geist"> Pokedex Pokemon</h1>
      <Suspense fallback={<ContainerSkeleton/>}>
          <TypeBar setType={setType} type={type} ></TypeBar>
          <ContainerPokemon types={type}/>
      </Suspense>
    </section>

    
  )
}