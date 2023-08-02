import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import { addItem } from "../store/PokemonSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=100")
      .then((res) => {
        setPokemons(res.data.results);
        setFilteredPokemons(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="home-container">
      <Search pokemons={pokemons} setFilteredPokemons={setFilteredPokemons} />
      <div className="card-container">
        {filteredPokemons.map((pokemon, index) => {
          const IMG_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1
          }.svg`;
          return (
            <div className="card">
              <img src={IMG_URL} height="80px" width="80px" alt="" />
              <h1 key={pokemon.name}>{pokemon.name}</h1>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  dispatch(addItem(pokemon));
                }}
              >
                Add
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
