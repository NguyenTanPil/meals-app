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
	<Meals :meals="meals" />
</template>

<script setup>
import Meals from '@/components/Meals.vue';
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
