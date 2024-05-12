<template>
	<Meals :meals="meals" />
</template>

<script setup>
import Meals from '@/components/Meals.vue';
import store from '@/store';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const router = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
	store.dispatch('searchMealsByIngredient', router.params.ingredient);
});
</script>
