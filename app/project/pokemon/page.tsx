import { Suspense} from "react";
import { ContainerPokemon } from "@/components/pokemon/ContainerPokemon";
import ContainerSkeleton from "@/components/pokemon/ContainerSkeleton";

export default function Pokemon() {

  return (
    <section>
      <h1 className="text-4xl text-center font-geist"> Pokedex Pokemon</h1>
      <Suspense fallback={<ContainerSkeleton/>}>
     
          <ContainerPokemon/>
      </Suspense>
    </section>
  )
}