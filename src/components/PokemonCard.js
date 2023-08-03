import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../store/PokemonSlice";

const PokemonCard = ({ pokemon, IMG_URL }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/${pokemon.name}`)}>
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
};

export default PokemonCard;
