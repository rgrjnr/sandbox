import { defineStore } from 'pinia';

export interface Event {
	id: number;
	name: string;
	date: string;
	location: string;
}

export const useEventStore = defineStore('events', {
	state: () => ({
		events: [] as Event[],
	}),

	actions: {
		initializeEvents() {
			this.events = [
				{ id: 1, name: 'Event 1', date: '2021-01-01', location: 'Location 1' },
				{ id: 2, name: 'Event 2', date: '2021-01-02', location: 'Location 2' },
				{ id: 3, name: 'Event 3', date: '2021-01-03', location: 'Location 3' },
				{ id: 4, name: 'Event 4', date: '2021-01-04', location: 'Location 4' },
				{ id: 5, name: 'Event 5', date: '2021-01-05', location: 'Location 5' },
			];
		},
	},
});
