import pokemons from '../pokemons.json';
import { PokemonList } from "./PokemonsList";

export const App = () => {
  return (
    <div>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
};
