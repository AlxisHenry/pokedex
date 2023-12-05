import { z } from 'zod'
import { baseQueryItemSchema, baseQuerySchema, pokemonSchema } from './schemas'

export type BaseQuery = z.infer<typeof baseQuerySchema>
export type BaseQueryItem = z.infer<typeof baseQueryItemSchema>
export type Pokemon = z.infer<typeof pokemonSchema>
