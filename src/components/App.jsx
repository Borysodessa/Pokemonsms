import { Pokemon } from "./Pokemon";
import './styles.css'
import { useState } from 'react';
 
// https://react.dev/learn/passing-props-to-a-component#passing-props-to-a-component
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
const pokemons = [
  {
    name: "bulbasaur",
    id: "1"
  },
  {
    name: "ivysaur",
    id: "2"
  },
  {
    name: "venusaur",
    id: "3"
  },
  {
    name: "charmander",
    id: "4"
  },
  {
    name: "charmeleon",
    id: "5"
  },
  {
    name: "charizard",
    id: "6"
  },
  {
    name: "squirtle",
    id: "7"
  },
  {
    name: "wartortle",
    id: "8"
  },
  {
    name: "blastoise",
    id: "9"
  },
  {
    name: "caterpie",
    id: "10"
  },
  {
    name: "metapod",
    id: "11"
  },
  {
    name: "butterfree",
    id: "12"
  },
  {
    name: "weedle",
    id: "13"
  },
  {
    name: "kakuna",
    id: "14"
  },
  {
    name: "beedrill",
    id: "15"
  },
  {
    name: "pidgey",
    id: "16"
  },
  {
    name: "pidgeotto",
    id: "17"
  },
  {
    name: "pidgeot",
    id: "18"
  },
  {
    name: "rattata",
    id: "19"
  },
  {
    name: "raticate",
    id: "20"
  }
];

// https://react.dev/learn/rendering-lists
const obj = {};
for (let i = 0; i < pokemons.length; i += 1) {
   obj[pokemons[i].id] = false; 
}
obj[3] = true
obj[6] = true
console.log(obj);


export const App = () => {
  const [caught, setCaught] = useState(obj);

  function handleClick(id) {

    const newCaught = { ...caught };

    console.log()
    newCaught[id] = !newCaught[id]
    setCaught(newCaught);
  }  


  const counter = Object.values(caught).filter(el => el === true).length
    
  console.log('counter', counter)
 return (
    <section className="section">
      <h1 class="count">{ counter }/20</h1>

      {pokemons.map(pokemon => (

        <Pokemon
          handleClick={() => handleClick(pokemon.id)} 
          caught={caught[pokemon.id]}
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id}
        />
      ))}
    </section>
  );
};
