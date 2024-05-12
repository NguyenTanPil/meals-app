import axiosClient from '@/axiosClient';
import { SET_MEALS_BY_INGREDIENT, SET_MEALS_BY_LETTER, SET_SEARCH_MEALS } from './mutationTypes';

const searchMeals = ({ commit }, keyword) => {
	axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
		commit(SET_SEARCH_MEALS, data.meals);
	});
};

const searchMealsByLetter = ({ commit }, letter) => {
	axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
		commit(SET_MEALS_BY_LETTER, data.meals);
	});
};

const searchMealsByIngredient = ({ commit }, ingredient) => {
	axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
		commit(SET_MEALS_BY_INGREDIENT, data.meals);
	});
};

export default { searchMeals, searchMealsByLetter, searchMealsByIngredient };
