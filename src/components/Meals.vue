<template>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
		<MealItem
			v-for="meal of meals"
			:meal="meal"
			:key="meal.idMeal"
		/>
	</div>
	<div
		v-if="!meals?.length"
		class="flex justify-center text-gray-600"
	>
		There are no meals
	</div>
</template>

<script setup>
import MealItem from './MealItem.vue';

const { meals } = defineProps({
	meals: {
		type: Array,
		required: true,
		default: () => [],
	},
});
</script>
