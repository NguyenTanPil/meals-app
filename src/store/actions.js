import axiosClient from '@/axiosClient';
import { SET_SEARCH_MEALS } from './mutationTypes';

const searchMeals = ({ commit }, keyword) => {
	axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
		commit(SET_SEARCH_MEALS, data.meals);
	});
};

export default { searchMeals };
