"use client";

import './globals.css'
import {  
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </QueryClientProvider>
  )
}
