
export type Pokemon = {
    name : string,
    url : string,
    types : [],
    stats :[],
    sprites : {
      front_default : string,
      other : {
          "official-artwork" : {
            front_default : string
          },
          dream_world : {
            front_default : string
          }
        }
      }
    }

export type Type = {
  type: {
    name : "normal" | "bug" | "dark" | "dragon" | "electric" | "fire" | "fairy" | "fighting" | "flying" | "ghost" | "grass" | "ground" | "ice" | "poison" | "psychic" | "rock" | "steel" | "water"
  }
}

export type Stat = {
  base_stat: number,
  effort : number,
  stat : {
    name: "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed",
    url: string
  }
}