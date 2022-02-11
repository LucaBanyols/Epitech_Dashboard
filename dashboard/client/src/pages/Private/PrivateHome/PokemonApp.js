import React, { useState } from "react";
import Axios from "axios";

function PokemonApp() {

    const [pokemonName, setPokemonName] = useState("");

    const [pokemonChosen, setPokemonChosen] = useState(false);

    const [pokemon, setPokemon] = useState({
        name: "",
        species: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        specialAttack: "",
        specialDefense: "",
        speed: "",
        firstType: "",
        secondType: "",
    });

    const searchPokemon = (e) => {

        e.preventDefault();

        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`).then(
            (response) => {
                //console.log(response);
                setPokemon({
                    name: pokemonName,
                    img: response.data.sprites.front_default, 
                    hp: response.data.stats[0].base_stat,
                    attack: response.data.stats[1].base_stat,
                    defense: response.data.stats[2].base_stat,
                    specialAttack: response.data.stats[3].base_stat,
                    specialDefense: response.data.stats[4].base_stat,
                    speed: response.data.stats[5].base_stat,
                    firstType: response.data.types[0].type.name,
                    secondType: !response.data.types[1] ? "" : response.data.types[1].type.name,
                });
                setPokemonChosen(true);
            }
        );
    }

    return (
        <>
            <div className="PokemonApp">
                <div className="cards border text-light pt-4">
                    <div className="d-flex justify-content-center display-1 ">
                        {!pokemonChosen ? (<h1>Pokemon Stats : Please choose a Pokemon !</h1>) : (<h1>Pokemon Stats : {pokemonName}</h1>)}
                    </div>
                    <form onSubmit={searchPokemon} className="row my-4 justify-content-center">
                        <div className="col-3">
                            <input type="text" className="form-control" name="pokemonName" autoComplete="off" placeholder="Pokémon Name" autoFocus onChange={(event) => {
                                setPokemonName(event.target.value)
                            }}
                            />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-primary">Search Pokemon</button>
                        </div>
                    </form>
                    <img className="rounded mx-auto d-block w-25" src={pokemon.img} />
                    <div className="container text-center mb-4">
                        {!pokemon.firstType ? null :
                        !pokemon.secondType ?
                        <>
                            <h3>Type: {pokemon.firstType}</h3>
                            <h3>Hp: {pokemon.hp}</h3>
                            <h3>Attack: {pokemon.attack}</h3>
                            <h3>Defense: {pokemon.defense}</h3>
                            <h3>Special Attack: {pokemon.specialAttack}</h3>
                            <h3>Special Defense: {pokemon.specialDefense}</h3>
                            <h3>Speed: {pokemon.speed}</h3>
                        </>
                        :
                        <>
                            <h3>Types: {pokemon.firstType}, {pokemon.secondType}</h3>
                            <h3>Hp: {pokemon.hp}</h3>
                            <h3>Attack: {pokemon.attack}</h3>
                            <h3>Defense: {pokemon.defense}</h3>
                            <h3>Special Attack: {pokemon.specialAttack}</h3>
                            <h3>Special Defense: {pokemon.specialDefense}</h3>
                            <h3>Speed: {pokemon.speed}</h3>
                        </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default PokemonApp;