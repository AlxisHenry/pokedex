import { getPokemon } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
// @ts-ignore
import useColorThief from "use-color-thief";

export const Pokemon = ({ id }: { id: number }) => {
  const { isPending, data } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
  });
  const { color } = useColorThief(data?.sprites.front_default, {
    format: "hex",
    quality: 1,
  });

  return isPending ? (
    <p>Loading...</p>
  ) : (
    <div className="pokemon">
      <div className="sprite">
        <img
          className="sprite__main"
          src={data?.sprites.other.dream_world?.front_default ??
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        />
        <div className="circle" style={{ borderColor: color }}></div>
        <div className="circle-small" style={{ borderColor: color }}></div>
      </div>
      <div className="details"></div>
    </div>
  );
};
