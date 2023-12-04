"use client";

import { useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { z } from 'zod'

const pokemonSchema = z.object({
  name: z.string(),
  url: z.string(),
});

type Pokemon = z.infer<typeof pokemonSchema>;

const getPokemons = async (): Promise<Pokemon[]> => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await res.json();
  return data.results.map((pokemon: Pokemon) => pokemonSchema.parse(pokemon));
}

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isPending ?
        <p>Loading...</p> :
        error ?
          <p>Error: {error.message}</p> :
          <ul>
            {data.map((pokemon) => (
              <>
                <p>{JSON.stringify(pokemon)}</p>
                <li>{pokemon.url}</li>
              </>
            ))}
          </ul>
      }
      <ReactQueryDevtools initialIsOpen />
    </main>
  )
}
