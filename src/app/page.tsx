"use client";

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Pokemon } from '@/components/Pokemon';
import { useState } from 'react';
import { Search } from '@/components/Search';

export default function Home() {
  const [pokemonId, setPokemonId] = useState<number>(parseInt(localStorage.getItem("pokemonId") ?? "1"));
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Search setPokemonId={setPokemonId} />
      <Pokemon id={pokemonId} />
      <ReactQueryDevtools initialIsOpen={false} />
    </main>
  )
}
