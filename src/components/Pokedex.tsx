import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '@/services/api';

export const Pokedex = () => {
	const { isPending, data } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons
  });
	
	return (
		<div className="pokedex">
			{ isPending ? (
				<p>Loading...</p>
			) : (
				<>
					<div className="pokedex__items">
						{data?.map((pokemon: any) => (
							<Pokemon key={pokemon.name} pokemon={pokemon} />
						))}
					</div>
					<div className='pokedex__buttons'>
						<button className='pokedex__button'>Previous</button>
						<button className='pokedex__button'>Next</button>
					</div>
				</>
			)}
		</div>
	)
}

type PokemonProps = {
	pokemon: any
}

const Pokemon = ({ pokemon }: PokemonProps) => {
	return (
		<div className="pokedex__item">
			<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
			<p>{ucfirst(pokemon.name)}</p>
		</div>
	)
}

const ucfirst = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
}