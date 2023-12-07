import type { BaseQuery, BaseQueryItem, Pokemon } from "./types";
import { baseQuerySchema, pokemonSchema } from "./schemas";

const SEARCH_LIMIT = 8;
const MAX_LIMIT = 2000;
const ENDPOINT = "https://pokeapi.co/api/v2";

export const searchPokemons = async (search: string): Promise<BaseQueryItem[]> => {
	const response: Response = await fetch(`${ENDPOINT}/pokemon?limit=${MAX_LIMIT}`);
	const data: BaseQuery = await response.json();	
	if (baseQuerySchema.safeParse(data)) {
		return data.results.filter((pokemon: BaseQueryItem) => {
			return pokemon.name.replaceAll('-', ' ').includes(search);
		}).slice(0, SEARCH_LIMIT);
	}
	throw new Error('Invalid date received from the API');
}

export const getPokemon = async (id: number): Promise<Pokemon> => {
	const response = await fetch(`${ENDPOINT}/pokemon/${id}`);
	const data: Pokemon = await response.json();
	if (pokemonSchema.safeParse(data)) {
		return data;
	}
	throw new Error('Invalid date received from the API');
}