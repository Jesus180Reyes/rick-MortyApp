import { useState } from "react";

export const useFetchPokemon = () => {
    const random = Math.floor(Math.random() * 100);
    const [setNewPokemon, setSetNewPokemon] = useState(random);

    const [pokemons, setPokemons] = useState([]);
    const getPokemonByName = async () => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${setNewPokemon}`);
        const data = await resp.json();
        setPokemons(data);
    }


    return {
        // * Propiedades
        setNewPokemon,
        pokemons,

        // * Metodos
        getPokemonByName

    }
}
