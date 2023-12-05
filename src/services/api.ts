import type { BaseQuery, Pokemon } from "./types";
import { baseQuerySchema, pokemonSchema } from "./schemas";

export const getPokemons = async (): Promise<BaseQuery> => {
	let limit = 9 * 3;
	const response: Response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit);
	const data: BaseQuery = await response.json();
	if (baseQuerySchema.safeParse(data)) {
		return data;
	}
	throw new Error('Invalid date received from the API');
}

export const getPokemon = async (id: number): Promise<Pokemon> => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
	const data: Pokemon = await response.json();
	if (pokemonSchema.safeParse(data)) {
		return data;
	}
	throw new Error('Invalid date received from the API');
}