import { getPokemon } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

type PokemonDetailsProps = {
	id: number
}

export const PokemonDetails = ({ id }: PokemonDetailsProps) => {
	const { isPending, error, data } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id)
  });

	return (
		<div className="pokemon">
			<h1>{data?.name}</h1>

			<div className="pokemon__image">
				<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={data?.name} />
			</div>

			<div className="pokemon__details">
				<p>Height: {data?.height}</p>
				<p>Weight: {data?.weight}</p>
				<p>Base experience: {data?.base_experience}</p>
				<p>Abilities: {data?.abilities.map((item: any) => item.ability.name).join(', ')}</p>
				<p>Types: {data?.types.map((item: any) => item.type.name).join(', ')}</p>
				<p>Moves: {data?.moves.map((item: any) => item.move.name).join(', ')}</p>
				<p>Stats: {data?.stats.map((item: any) => `${item.stat.name}: ${item.base_stat}`).join(', ')}</p>
				<p>Forms: {data?.forms.map((item: any) => item.name).join(', ')}</p>
				<p>Game indices: {data?.game_indices.map((item: any) => item.version.name).join(', ')}</p>
				<p>Species: {data?.species.name}</p>
				<p>Order: {data?.order}</p>
				<p>Is default: {data?.is_default}</p>
				<p>Location area encounters: {data?.location_area_encounters}</p>
				<p>Id: {data?.id}</p>
				<div>
					{data?.sprites.front_default && <img src={data?.sprites.front_default} alt={data?.name} />}
					{data?.sprites.back_default && <img src={data?.sprites.back_default} alt={data?.name} />}
					{data?.sprites.front_shiny && <img src={data?.sprites.front_shiny} alt={data?.name} />}
					{data?.sprites.back_shiny && <img src={data?.sprites.back_shiny} alt={data?.name} />}
				</div>
			</div>
		</div>
	)
}