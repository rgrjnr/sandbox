<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Events</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true"
			><div class="events">
				<EventCard v-for="event in eventStore.events" :key="event.id" :event="event"></EventCard>
			</div>
		</ion-content>
	</ion-page>
</template>

<script setup lang="ts">
	import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
	import EventCard from '@/components/EventCard.vue';
	import { useEventStore } from '@/stores/EventStore';
	import { onMounted, computed } from 'vue';
	const eventStore = useEventStore();

	const isFavorite = computed(() => {
		// TODO: Implement this
		return false;
	});

	onMounted(() => {
		eventStore.initializeEvents();
	});
</script>
