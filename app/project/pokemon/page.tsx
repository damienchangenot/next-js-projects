'use client';

import { Suspense, useState } from "react";
import { ContainerPokemon } from "@/components/pokemon/ContainerPokemon";
import Loading from "./loading";
import ContainerSkeleton from "@/components/pokemon/ContainerSkeleton";
import TypeBar from "@/components/pokemon/TypeBar";
export default function page() {
  const [type, setType] = useState('normal');

  return (
    <Suspense fallback={<ContainerSkeleton/>}>
        <TypeBar setType={setType} type={type} ></TypeBar>
        <ContainerPokemon types={type}/>
    </Suspense>
    
  )
}