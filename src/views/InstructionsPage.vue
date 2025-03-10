<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Instructions</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true"
			><div class="page">
				<h1 id="event-management-application-implementation-guide">
					Event Management Application - Implementation Guide
				</h1>
				<h2 id="overview">Overview</h2>
				<p>This is a Vue.js application for managing events and favorites. The application uses:</p>
				<ul>
					<li>Vue.js with Composition API</li>
					<li>Pinia for state management</li>
					<li>Ionic for UI components</li>
				</ul>
				<h2 id="implementation-tasks">Implementation Tasks</h2>
				<p>This guide outlines the TODOs that need to be implemented in the codebase.</p>
				<h3 id="task-1-implement-the-togglefavorite-method-in-favoritestore">
					Task 1: Implement the toggleFavorite method in FavoriteStore
				</h3>
				<p><strong>File</strong>: <code>src/stores/FavoriteStore.ts</code></p>
				<p>
					<strong>Description</strong>: Implement the <code>toggleFavorite</code> method to toggle an event&#39;s
					favorite status by adding or removing its ID from the <code>favoriteEvents</code> array in the state.
				</p>
				<h3 id="task-2-implement-the-isfavorite-computed-property-in-eventspage">
					Task 2: Implement the isFavorite computed property in EventsPage
				</h3>
				<p><strong>File</strong>: <code>src/views/EventsPage.vue</code></p>
				<p>
					<strong>Description</strong>: Implement the <code>isFavorite</code> computed property to determine if an event
					is a favorite based on the FavoriteStore.
				</p>
				<h3 id="task-3-implement-the-favoriteevents-computed-property-in-favoritespage">
					Task 3: Implement the favoriteEvents computed property in FavoritesPage
				</h3>
				<p><strong>File</strong>: <code>src/views/FavoritesPage.vue</code></p>
				<p>
					<strong>Description</strong>: Implement the <code>favoriteEvents</code> computed property to return an array
					of event objects that are marked as favorites.
				</p>
				<h3 id="task-4-implement-the-isfavorite-computed-property-in-eventcard">
					Task 4: Implement the isFavorite computed property in EventCard
				</h3>
				<p><strong>File</strong>: <code>src/components/EventCard.vue</code></p>
				<p>
					<strong>Description</strong>: Implement the <code>isFavorite</code> computed property to determine if the
					current event is a favorite.
				</p>
				<h2 id="testing-your-implementation">Testing Your Implementation</h2>
				<p>After implementing each task:</p>
				<ol>
					<li>Run the application to verify that the favorites functionality works correctly</li>
					<li>Check that events can be added to and removed from favorites</li>
					<li>Verify that the favorites page displays only the favorited events</li>
					<li>Ensure that the heart icon in the EventCard component correctly reflects the favorite status</li>
				</ol>
			</div></ion-content
		>
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
