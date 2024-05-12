<template>
	<div class="p-4">
		<h2 class="text-4xl font-bold my-4">Ingredients</h2>
		<input
			v-model="keyword"
			type="text"
			class="rounded border-2 border-gray-200 w-full py-2 px-4"
			placeholder="Search for Meals..."
		/>
		<router-link
			v-for="ingredient of computedIngredient"
			:to="{
				name: 'byIngredient',
				params: { ingredient: ingredient.strIngredient },
			}"
			:key="ingredient.idIngredient"
			class="bg-white rounded p-3 mb-3 shadow"
		>
			<h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
			<p>{{ ingredient.strDescription }}</p>
		</router-link>
	</div>
</template>

<script setup>
import axiosClient from '@/axiosClient';
import { computed, onMounted, ref } from 'vue';

const ingredients = ref([]);
const keyword = ref('');
const computedIngredient = computed(() => {
	if (keyword.value === '') {
		return ingredients.value;
	}

	return ingredients.value.filter((item) => {
		const strDescription = item?.strDescription ?? '';
		const strIngredient = item?.strIngredient ?? '';

		return (
			strDescription.toLowerCase().includes(keyword.value.toLowerCase()) ||
			strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
		);
	});
});

onMounted(() => {
	axiosClient.get('list.php?i=list').then(({ data }) => {
		ingredients.value = data.meals;
	});
});
</script>
