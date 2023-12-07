import { searchPokemons } from "@/services/api";
import { BaseQueryItem } from "@/services/types";
import { ucfirst } from "@/services/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const CHARACTERS_NEEDED = 2;

type SearchProps = {
	setPokemonId: React.Dispatch<React.SetStateAction<number>>;
};

export const Search = ({ setPokemonId }: SearchProps) => {
  const [hasResults, setHasResults] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  return (
    <div className={`search ${hasResults ? "search--has-results" : ""}`}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
          if (e.target.value.length >= CHARACTERS_NEEDED) {
            setHasResults(true);
          } else {
            setHasResults(false);
          }
        }}
      />
      {query.length >= CHARACTERS_NEEDED && <Results query={query} setPokemonId={setPokemonId} />}
    </div>
  );
};

type SearchResults = {
  query: string;
	setPokemonId: React.Dispatch<React.SetStateAction<number>>;
};

const Results = ({ query, setPokemonId }: SearchResults): JSX.Element => {
  const { isLoading, data } = useQuery({
    queryKey: ["pokemons", query],
    queryFn: () => searchPokemons(query),
  });

  if (isLoading) {
    return <ul className="results"></ul>;
  }

  return (
    <ul className="results">
      {data?.length === 0 && <li className="no-results">No results found</li>}
      {data?.map((pokemon: BaseQueryItem) => (
        <li
          key={pokemon.name}
          className="results__item"
          data-id={pokemon.url.split("/")[6]}
					onClick={() => {
						setPokemonId(parseInt(pokemon.url.split("/")[6]));
					}}
        >
          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
              pokemon.url.split("/")[6] +
              ".png"
            }
          />
          <span>{ucfirst(pokemon.name.replaceAll("-", " "))}</span>
        </li>
      ))}
    </ul>
  );
};
