<template>
	<div class="flex p-8 flex-col">
		<div class="flex gap-2 justify-center mt-2">
			<router-link
				:to="{ name: 'byLetter', params: { letter } }"
				v-for="letter of letters"
				:key="letter"
			>
				{{ letter }}
			</router-link>
		</div>
	</div>
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
