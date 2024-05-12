<template>
	<div class="p-8">
		<input
			v-model="keyword"
			type="text"
			class="rounded border-2 border-gray-200 w-full py-2 px-4"
			placeholder="Search for Meals..."
			@change="searchMeals"
		/>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
		<div
			v-for="meal of meals"
			:key="meal.idMeal"
			class="bg-white shadow rounded"
		>
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
	</div>
</template>

<script setup>
import YoutubeButton from '@/components/YoutubeButton.vue';
import store from '@/store';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchMeals);

const searchMeals = () => {
	store.dispatch('searchMeals', keyword.value);
};

onMounted(() => {
	keyword.value = route.params.name;

	if (keyword.value) {
		searchMeals();
	}
});
</script>
