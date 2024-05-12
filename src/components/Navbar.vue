<template>
	<header class="bg-white shadow-md h-16 flex justify-between items-center">
		<router-link
			:to="{ name: 'home' }"
			class="inline-flex items-center h-full px-5"
		>
			Home
		</router-link>
		<div class="flex items-center gap-1 h-full">
			<router-link
				:to="{ name: 'byName' }"
				class="px-2 h-full hover:bg-purple-100 inline-flex items-center"
				>Search Meals</router-link
			>
			<router-link
				:to="{ name: 'byLetter' }"
				class="px-2 h-full hover:bg-purple-100 inline-flex items-center"
				>Search by Letter</router-link
			>
			<router-link
				:to="{ name: 'byIngredients' }"
				class="px-2 h-full hover:bg-purple-100 inline-flex items-center"
				>Search Ingredients</router-link
			>
		</div>
	</header>
</template>
