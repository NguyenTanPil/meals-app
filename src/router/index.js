import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/HomePage.vue';
import MealsByIngredients from '@/views/MealsByIngredients.vue';
import MealsByLetter from '@/views/MealsByLetter.vue';
import MealsByName from '@/views/MealsByName.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/by-letter/:letter?',
		name: 'byLetter',
		component: MealsByLetter,
	},
	{
		path: '/by-ingredients/:ingredients?',
		name: 'byIngredients',
		component: MealsByIngredients,
	},
	{
		path: '/by-name/:name?',
		name: 'byName',
		component: MealsByName,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
