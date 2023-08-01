import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=100")
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(pokemons);
  return (
    <div className="card-container">
      {pokemons.map((pokemon, index) => {
        const IMG_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          index + 1
        }.svg`;
        return (
          <div className="card">
            <img src={IMG_URL} height="80px" width="80px" alt="" />
            <h1 key={pokemon.name}>{pokemon.name}</h1>
            <Button variant="contained" color="success">
              Add
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
