<template>
	<a
		:href="props.href"
		target="_blank"
		class="px-3 py-2 rounded border border-red-400 hover:bg-red-400 hover:text-white"
	>
		<slot> Youtube </slot>
	</a>
</template>

<script setup>
const props = defineProps({
	href: {
		type: String,
		required: true,
	},
});
</script>
