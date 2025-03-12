<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Favorites</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true"
			><div class="events">
				<EventCard
					v-for="event in favoriteEvents"
					:key="event.id"
					:event="event"
					v-if="favoriteEvents.length > 0"></EventCard>
				<p v-else>No favorites yet (or not implemented yet)</p>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
	import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
	import EventCard from '@/components/EventCard.vue';
	import { useEventStore } from '@/stores/EventStore';
	import { useFavoriteStore } from '@/stores/FavoriteStore';
	import { onMounted, computed } from 'vue';
	const eventStore = useEventStore();
	const favoriteStore = useFavoriteStore();

	const favoriteEvents = computed(() => {
		// TODO: Implement this
		return [];
	});

	onMounted(() => {
		eventStore.initializeEvents();
	});
</script>
