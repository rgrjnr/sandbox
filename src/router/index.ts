import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: TabsPage,
		children: [
			{
				path: '',
				redirect: 'events',
			},
			{
				path: 'events',
				component: () => import('@/views/EventsPage.vue'),
			},
			{
				path: 'favorites',
				component: () => import('@/views/FavoritesPage.vue'),
			},
			{
				path: 'instructions',
				component: () => import('@/views/InstructionsPage.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
