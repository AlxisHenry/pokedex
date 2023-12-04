export const getPokemons = async () => {
	let limit = 9 * 3;
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit);
	const data = await response.json();
	return data.results;
}