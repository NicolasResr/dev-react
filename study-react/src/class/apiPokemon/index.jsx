import { useState } from "react";
import "./apiPokemon.css";

export default function ApiPokemon() {
  const arrayTypes = {
    normal: "#D3D3D3",
    fighting: "#C22E28",
    flying: "#A98FF3",
    poison: "#A33EA1",
    ground: "#E2BF65",
    rock: "#B6A136",
    bug: "#A6B91A",
    ghost: "#735797",
    steel: "#B7B7CE",
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#7AC74C",
    electric: "#F7D02C",
    psychic: "#F95587",
    ice: "#96D9D6",
    dragon: "#6F35FC",
    dark: "#705746",
    fairy: "#D685AD",
    stellar: "#8A2BE2",
  };

  const [pokemon, setPokemon] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const handleGetPokemon = () => {
    if (!pokemon) return;
    setData(null);
    setErro(false);
    setLoading(true);
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setLoading(false);
        })
        .catch(() => {
          setErro("Ocorreu um erro ao buscar o pokemon");
          setLoading(false);
        });
    }, 1000);
  };

  const handleTypeColor =
    data && arrayTypes[data?.types?.[0].type?.name];

  return (
    <div
      className="card"
      style={{ backgroundColor: handleTypeColor }}
    >
      <h1>Busque seu Pokémon favorito</h1>
      <input
        type="text"
        placeholder="Quem é esse Pokémon?"
        onChange={(e) => setPokemon(e.target.value)}
        value={pokemon}
      />
      <button
        disabled={pokemon.length <= 0 ? true : false}
        onClick={handleGetPokemon}
      >
        Gotta Catch 'Em All
      </button>
      {loading && <p className="carregando">Carregando...</p>}
      {erro && <p>{erro}</p>}
      {data && (
        <div className="pokemon-info">
          <img
            src={
              data.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
            alt={`Foto do ${pokemon}`}
          />
          <p className="name">{data.name}</p>
          <p className="type">
            Tipo: {data.types[0].type.name}
          </p>
        </div>
      )}
    </div>
  );
}
