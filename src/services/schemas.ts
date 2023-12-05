import { z } from 'zod';

export const baseQuerySchema = z.object({
	count: z.number(),
	next: z.string().nullable(),
	previous: z.string().nullable(),
	results: z.array(z.object({
		name: z.string(),
		url: z.string(),
	})),
});

export const baseQueryItemSchema = z.object({
	name: z.string(),
	url: z.string(),
});

export const pokemonSchema = z.object({
	id: z.number(),
	name: z.string(),
	weight: z.number(),
	height: z.number(),
	base_experience: z.number(),
	is_default: z.boolean(),
	order: z.number(),
	location_area_encounters: z.string(),
	past_types:z.array(z.object({
		type: z.object({
			name: z.string(),
			url: z.string(),
		}),
	})).nullable(),
	past_stats: z.array(z.object({
		base_stat: z.number(),
		effort: z.number(),
		stat: z.object({
			name: z.string(),
			url: z.string(),
		})
	})).nullable(),
	game_indices: z.array(z.object({
		game_index: z.number(),
		version: z.object({
			name: z.string(),
			url: z.string(),
		}),
	})),
	forms: z.array(z.object({
		name: z.string(),
		url: z.string(),
	})),
	moves: z.array(z.object({
		move: z.object({
			name: z.string(),
			url: z.string(),
		}),
		version_group_details: z.array(z.object({
			level_learned_at: z.number(),
			move_learn_method: z.object({
				name: z.string(),
				url: z.string(),
			}),
			version_group: z.object({
				name: z.string(),
				url: z.string(),
			}),
		})),
	})),
	species: z.object({
		name: z.string(),
		url: z.string(),
	}),
	types: z.array(z.object({
		type: z.object({
			name: z.string(),
			url: z.string(),
		}),
		slot: z.number(),
	})),
	stats: z.array(z.object({
		base_stat: z.number(),
		effort: z.number(),
		stat: z.object({
			name: z.string(),
			url: z.string(),
		})
	})),
	abilities: z.array(z.object({
		ability: z.object({
			name: z.string(),
			url: z.string(),
		}),
		is_hidden: z.boolean(),
		slot: z.number(),
	})),
	sprites: z.object({
		back_default: z.string().nullable(),
		back_female: z.string().nullable(),
		back_shiny: z.string().nullable(),
		back_shiny_female: z.string().nullable(),
		front_default: z.string().nullable(),
		front_female: z.string().nullable(),
		front_shiny: z.string().nullable(),
		front_shiny_female: z.string().nullable(),
		other: z.object({
			dream_world: z.object({
				front_default: z.string().nullable(),
				front_female: z.string().nullable(),
			}).nullable(),
			home: z.object({
				front_default: z.string().nullable(),
				front_female: z.string().nullable(),
				front_shiny: z.string().nullable(),
				front_shiny_female: z.string().nullable(),
			}).nullable(),
			official_artwork: z.object({
				front_default: z.string().nullable(),
			}).nullable(),
		}),
		versions: z.object({}),
	}),
});