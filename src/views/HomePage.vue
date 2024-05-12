<template>
	<div class="flex p-8 flex-col"></div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';

// const meals = computed(() => store.state.meals);
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ingredients = ref([]);

onMounted(async () => {
	const response = await axiosClient.get('list.php?i=list');
	console.log({ response });
	ingredients.value = response.data;
});
</script>
