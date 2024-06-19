'use client';

import { useState } from "react";
import ContainerPokemon from "../../components/pokemon/ContainerPokemon";

export default function page() {
  const [type, setTypes] = useState('normal');
  
  return (
    <ContainerPokemon types={type}></ContainerPokemon>
  )
}
