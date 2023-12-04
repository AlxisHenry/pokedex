"use client";

import { Pokedex } from '@/components/Pokedex';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pokedex />
      <ReactQueryDevtools initialIsOpen={false} />
    </main>
  )
}
