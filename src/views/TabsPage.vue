<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="instructions" href="/instructions">
					<ion-icon aria-hidden="true" :icon="document" />
					<ion-label>Instructions</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="events" href="/events">
					<ion-icon aria-hidden="true" :icon="calendar" />
					<ion-label>Events</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="favorites" href="/favorites">
					<ion-icon aria-hidden="true" :icon="heart" />
					<ion-label>Favorites</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup lang="ts">
	import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
	import { calendar, heart, document } from 'ionicons/icons';
</script>
