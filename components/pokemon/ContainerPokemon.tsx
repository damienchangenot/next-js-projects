async function getTypes(types: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${types}`)
    if(!res.ok){
      throw new Error('Erreur');
    }
    return res.json();
  }

export default async function ContainerPokemon(types :string) {

    const pokemon = await getTypes(types);
  return (
    <div>Container</div>
  )
}
