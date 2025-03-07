<template>
    <div class="event">
        <div class="event-thumbnail">
        </div>

        <div class="event-details">
            <div class="event-name">Event Name</div>
            <div class="event-date">10/20</div>
            <div class="event-address">Lisboa</div>
        </div>

        <ion-icon :icon="heartOutline" class="event-favorite-button"></ion-icon>
    </div>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import {  heart, heartOutline } from 'ionicons/icons';



</script>

<style>
.event {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.25rem;
}

.event-thumbnail {
    background: var(--ion-color-step-200);
    width: 5rem;
    height: 5rem;
    border-radius: 0.25rem;
}

.event-name {
    font-size: 120%;
    font-weight: bold;
}

</style>