import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";

import PokemonCard from "../components/PokemonCard";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((res) => {
        setPokemons(res.data.results);
        setFilteredPokemons(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home-container">
      <Search pokemons={pokemons} setFilteredPokemons={setFilteredPokemons} />
      <div className="card-container">
        {filteredPokemons.map((pokemon, index) => {
          const IMG_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1
          }.svg`;
          return <PokemonCard pokemon={pokemon} IMG_URL={IMG_URL} />;
        })}
      </div>
    </div>
  );
};

export default Home;
