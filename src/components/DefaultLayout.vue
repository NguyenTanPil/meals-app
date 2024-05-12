<template>
	<div class="bg-gray-100 min-h-[100vh]">
		<Navbar />
		<main>
			<router-view />
		</main>
	</div>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>
