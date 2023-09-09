import Pokemon from "./Pokemon";
import { useState } from "react";

const POKEMON = [
  {
    name: "Bulbasaur",
    type: "Grass/Poison",
    level: 0,
  },
  {
    name: "Ivysaur",
    type: "Grass/Poison",
    level: 0,
  },
  {
    name: "Venusaur",
    type: "Grass/Poison",
    level: 0,
  },
];



function List() {
  const [pokemon, setPokemon] = useState(POKEMON);

  function levelUp(name) {
    setPokemon(prev => 
      prev.map(pok => {
        if (pok.name === name) {
          return { ...pok, level: pok.level + 1 };
        }
        return pok;
      })
    );
  }

  return (
    <ul>
      {pokemon.map(function (pok, k) {
        return (
          <Pokemon poke={pok} key={pok.name} levelUp={levelUp}/>
        )
      })}
    </ul>
  );
}

export default List;



