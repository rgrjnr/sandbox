<template>
	<div class="event ion-activatable ripple-parent" @click="favoriteStore.toggleFavorite(props.event.id)">
		<ion-ripple-effect></ion-ripple-effect>
		<div class="event-thumbnail"></div>

		<div class="event-details">
			<div class="event-name">{{ props.event.name }}</div>
			<div class="event-date">{{ props.event.date }}</div>
			<div class="event-address">{{ props.event.location }}</div>
		</div>

		<ion-icon
			:icon="isFavorite ? heart : heartOutline"
			class="event-favorite-button"
			></ion-icon>
	</div>
</template>

<script setup lang="ts">
	import { IonRippleEffect, IonIcon } from '@ionic/vue';
	import { heart, heartOutline } from 'ionicons/icons';
	import { useFavoriteStore } from '@/stores/FavoriteStore';
	import { computed } from 'vue';
	const favoriteStore = useFavoriteStore();

	const isFavorite = computed(() => {
		// TODO: Implement this
		return false;
	});

	const props = defineProps<{
		event: {
			name: string;
			date: string;
			location: string;
			id: number;
		};
	}>();
</script>
