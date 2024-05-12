<template>
	<div class="flex gap-2 justify-center mt-2">
		<router-link
			:to="{ name: 'byLetter', params: { letter } }"
			v-for="letter of letters"
			:key="letter"
		>
			{{ letter }}
		</router-link>
	</div>

	<Meals :meals="meals" />
</template>

<script setup>
import Meals from '@/components/Meals.vue';
import store from '@/store';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const router = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter);

const searchMealsByLetter = () => {
	store.dispatch('searchMealsByLetter', router.params.letter);
};

watch(
	() => router.params.letter,
	() => {
		searchMealsByLetter();
	},
);

onMounted(() => {
	searchMealsByLetter();
});
</script>
