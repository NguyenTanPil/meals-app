<template>
	<div class="bg-white shadow rounded">
		<router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
			><img
				:src="meal.strMealThumb"
				:alt="meal.strMeal"
				class="rounded-t w-full h-48 object-cover"
		/></router-link>

		<div class="p-3">
			<h3 class="font-bold">{{ meal.strMeal }}</h3>
			<p class="mb-4"></p>
			<div class="p-3 flex">
				<YoutubeButton :href="meal.strYoutube">View</YoutubeButton>
			</div>
		</div>
	</div>
</template>

<script setup>
import YoutubeButton from './YoutubeButton.vue';

const { meal } = defineProps({
	meal: {
		type: Object,
		required: true,
	},
});
</script>
