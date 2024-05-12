<template>
	<div class="w-[800px] mx-auto">
		<h2 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h2>
		<img
			:src="meal.strMealThumb"
			:alt="meal.strMeal"
		/>
		<div class="grid grid-cols-1 md:grid-cols-2 text-lg py-2">
			<div class="font-bold">Category: {{ meal.strCategory }}</div>
			<div class="font-bold">Area: {{ meal.strArea }}</div>
			<div class="font-bold">Tags: {{ meal.strTags }}</div>
		</div>

		<div>{{ meal.strInstructions }}</div>

		<div class="grid grid-col-1 md:grid-cols-2">
			<div>
				<h2 class="text-2xl font-semibold md-2">Ingredients</h2>
				<ul>
					<template
						v-for="(el, idx) of new Array(20)"
						:key="idx"
					>
						<li v-if="meal[`strIngredient${idx + 1}`]">{{ idx + 1 }}. {{ meal[`strIngredient${idx + 1}`] }}</li>
					</template>
				</ul>
			</div>
			<div>
				<h2 class="text-2xl font-semibold md-2">Measures</h2>
				<ul>
					<template
						v-for="(el, idx) of new Array(20)"
						:key="idx"
					>
						<li v-if="meal[`strMeasure${idx + 1}`]?.trim()">{{ idx + 1 }}. {{ meal[`strMeasure${idx + 1}`] }}</li>
					</template>
				</ul>
			</div>
			<div class="mt-4">
				<YoutubeButton :href="meal.strYoutube">Go to Youtube</YoutubeButton>
			</div>
		</div>
	</div>
</template>

<script setup>
import axiosClient from '@/axiosClient';
import YoutubeButton from '@/components/YoutubeButton.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const meal = ref('');

onMounted(() => {
	axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
		meal.value = data.meals[0] || {};
	});
});
</script>
