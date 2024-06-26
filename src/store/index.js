import { createStore } from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const store = createStore({
	actions,
	mutations,
	state,
	getters,
});

export default store;
