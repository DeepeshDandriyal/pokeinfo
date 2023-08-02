import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState({});
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => setPokemonData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="pokemonDetail">
      <img
        src={pokemonData?.sprites?.other?.dream_world?.front_default}
        alt=""
        height="300px"
        width="300px"
      />
      <h1>{pokemonData?.species?.name}</h1>
      <div className="footer">
        <div className=" text">
          <p>{pokemonData?.weight}0g</p>
          <h3>Weight</h3>
        </div>
        <div className=" text">
          <p>{pokemonData?.height}0cm</p>
          <h3>Height</h3>
        </div>
        <div className=" text">
          <p>{pokemonData?.types?.type?.name}</p>
          <h3>Type</h3>
        </div>
        <div className=" text">
          <p>{pokemonData?.moves?.move?.name}</p>
          <h3>Move</h3>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
