import { configureStore } from "@reduxjs/toolkit";
import PokemonSlice from "./PokemonSlice";

const store = configureStore({
  reducer: {
    pokemonItem: PokemonSlice,
  },
});

export default store;
