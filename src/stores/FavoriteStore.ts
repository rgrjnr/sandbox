import { defineStore } from 'pinia';

export const useFavoriteStore = defineStore('favorites', {
	state: () => ({
		favoriteEvents: [1] as number[],
	}),

	actions: {
		toggleFavorite(eventId: number) {
			// TODO: Implement this
		},
	},

	getters: {
		favoriteEvents: (state) => {
			// TODO: Implement this
			return [];
		},
	},
});
