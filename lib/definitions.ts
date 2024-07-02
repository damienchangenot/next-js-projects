
export type Pokemon = {
    name : string,
    url : string,
    types : [],
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
    name : "normal" 
  }
}