import { TextField } from "@mui/material";
import React from "react";

const Search = ({ pokemons, setFilteredPokemons }) => {
  const filterData = (value, pokemons) => {
    return pokemons.filter((pokemon) => pokemon.name.includes(value));
  };

  return (
    <div className="search">
      <TextField
        autoComplete="off"
        className="input"
        label="Search"
        variant="standard"
        onChange={(e) => {
          const data = filterData(e.target.value.toLowerCase(), pokemons);

          setFilteredPokemons(data);
        }}
      />
    </div>
  );
};

export default Search;
