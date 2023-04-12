import {Pokemon} from "./Pokemon"

import { section } from './Pokemon.styled';

export const PokemonList = ({ pokemons }) => {
    return (
    <section>
        <ul>
            {pokemons.map((pokemon) => (
                <li key={pokemon.id}>
                    <Pokemon pokemon={pokemon}/>
                </li>))}
        </ul>
    </section>
    )
}