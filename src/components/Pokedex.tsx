import React, { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '@/services/api';
import { _int, ucfirst } from '@/services/utils';
import type { BaseQueryItem, Pokemon } from '@/services/types';
import { PokemonDetails } from './PokemonDetails';

export const Pokedex = () => {
	const [pokemonSelected, setPokemonSelected] = useState(false);
	const [selectedPokemonId, setSelectedPokemonId] = useState<number>(0);
	
	const { isPending, error, data } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons
  });

	const handleClick = (id: number): void => {
		console.log("Switching to pokemon details... ", id);
		setPokemonSelected(true);
		setSelectedPokemonId(id);
	}

	return (
		<div className="pokedex">
			{data && data.results.map((item: BaseQueryItem, index: number) => 
				<Item key={index} item={item} handleClick={() => handleClick(_int(item.url?.split('/')[6]))} />
			)}
			{pokemonSelected && <PokemonDetails id={selectedPokemonId} />}
		</div>
	)
}

type ItemProps = {
	item: BaseQueryItem
	handleClick: () => void
}

const Item = ({ item, handleClick }: ItemProps) => {
	const id = item.url?.split('/')[6];

	return (
		<div className="pokedex__item" onClick={handleClick}>
			<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={item.name} />
			<p>{ucfirst(item.name)}</p>
		</div>
	)
}